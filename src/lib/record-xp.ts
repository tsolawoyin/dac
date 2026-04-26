/**
 * record-xp.ts — Batch XP recording, called once when an exam ends.
 *
 * WHY BATCH INSTEAD OF PER-QUESTION?
 * We don't want the XP badge updating live during the exam — it's distracting
 * and leaks score info. Instead, we compute and log XP for all questions in
 * one go after the exam is submitted (or time runs out).
 *
 * HOW IT WORKS:
 * 1. For each question in the exam, we look up its prior attempt history
 *    from question_stats. Note: by the time this runs, recordAttempt() has
 *    already written the current attempt, so we need to exclude the latest
 *    attempt from "prior" history.
 * 2. We classify each attempt (first_correct, recovery, repeat_correct, wrong).
 * 3. We compute the multiplier ONCE for the whole batch (streak + breadth are
 *    session-level context, not per-question).
 * 4. We write all XP entries to xp_log in a single Dexie transaction.
 *
 * IMPORTANT FOR FUTURE DEVS:
 * - This function must be called AFTER recordAttempt() has run for all questions.
 *   recordAttempt() writes to question_stats and streak_log, which we read here.
 * - The "prior attempts" logic accounts for the current exam's attempt already
 *   being in question_stats by slicing off the last element.
 * - Multipliers are computed once and shared across all questions in the exam.
 *   This means a single exam's XP is internally consistent.
 */

import { AppDB } from "./db";
import { ExamQuestion } from "@/components/config";
import { Question } from "@/data/questions";
import { calculateXp } from "./xp";
import { computeStreak } from "./streak";

/**
 * Record XP for all questions in a completed exam.
 *
 * @param db             - The Dexie database instance
 * @param examQuestions  - The exam's question list (with userAnswer + marked state)
 * @param questionMap    - Map from question ID to full Question object
 */
export async function recordXpForExam(
  db: AppDB,
  examQuestions: ExamQuestion[],
  questionMap: Map<string, Question>
): Promise<void> {
  // ─── Step 1: Compute session-level context for multipliers ──────
  // These are the same for every question in this exam.

  // Current streak (from the already-updated streak_log)
  const allLogs = await db.streak_log.orderBy("date").reverse().toArray();
  const { current: currentStreak } = computeStreak(allLogs);

  // Count distinct topics the user has practiced today (from existing xp_log).
  // We also add the topics from THIS exam since they count toward breadth.
  const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD
  const startOfToday = new Date(today + "T00:00:00").getTime();
  const todaysXpEntries = await db.xp_log
    .where("timestamp")
    .aboveOrEqual(startOfToday)
    .toArray();

  const topicsToday = new Set(todaysXpEntries.map((e) => e.topicId));

  // Add all topics from the current exam to the breadth set
  for (const eq of examQuestions) {
    const question = questionMap.get(eq.question);
    if (question) topicsToday.add(question.topic);
  }

  // ─── Step 2: Process each question and build XP entries ─────────
  const now = Date.now();
  const xpEntries = [];

  for (const eq of examQuestions) {
    const question = questionMap.get(eq.question);
    if (!question) continue;

    // If the question was never answered (no userAnswer), skip it.
    // This happens when the user didn't reach this question before time ran out.
    if (!eq.userAnswer) continue;

    const isCorrect = eq.userAnswer === question.answer;

    // Look up the full attempt history for this question.
    // recordAttempt() already added the current attempt to question_stats,
    // so we need to exclude the last attempt to get "prior" history.
    const stat = await db.question_stats.get(question.id);
    const allAttempts = stat?.attempts ?? [];

    // Slice off the last attempt — that's the one from this exam session.
    // Everything before it is the "prior" history for classification.
    const priorAttempts = allAttempts.slice(0, -1);

    const { eventType, basePoints, multiplier, points } = calculateXp(
      isCorrect,
      priorAttempts,
      currentStreak,
      topicsToday.size
    );

    xpEntries.push({
      timestamp: now,
      questionId: question.id,
      topicId: question.topic,
      eventType,
      basePoints,
      multiplier,
      points,
    });
  }

  // ─── Step 3: Write all XP entries in one batch ──────────────────
  // bulkAdd is atomic and faster than individual adds.
  if (xpEntries.length > 0) {
    await db.xp_log.bulkAdd(xpEntries);
  }
}
