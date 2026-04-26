import { AppDB, QuestionStat } from "./db";
import { Question } from "@/data/questions";

/** Record a single attempt for a question. Creates the row if first attempt. */
export async function recordAttempt(
  db: AppDB,
  question: Question,
  correct: boolean
): Promise<void> {
  const existing = await db.question_stats.get(question.id);

  const attempt = { timestamp: Date.now(), correct };

  if (existing) {
    await db.question_stats.update(question.id, {
      attempts: [...existing.attempts, attempt],
    });
  } else {
    const stat: QuestionStat = {
      questionId: question.id,
      subjectId: question.subject,
      topicId: question.topic,
      attempts: [attempt],
    };
    await db.question_stats.add(stat);
  }

  // Upsert daily streak log
  const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD
  const log = await db.streak_log.get(today);
  if (log) {
    await db.streak_log.update(today, {
      questionsAnswered: log.questionsAnswered + 1,
      questionsCorrect: log.questionsCorrect + (correct ? 1 : 0),
    });
  } else {
    await db.streak_log.add({ date: today, questionsAnswered: 1, questionsCorrect: correct ? 1 : 0 });
  }

}
