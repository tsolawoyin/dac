/**
 * ONE-TIME BACKFILL — safe to delete this entire file once all users have run it.
 *
 * Reads existing question_stats attempts and populates streak_log for past days.
 * Guarded by a meta key so it only runs once per device.
 */
import { db } from "./db";

const META_KEY = "streak_backfill_done";

export async function backfillStreaks(): Promise<void> {
  const already = await db.meta.get(META_KEY);
  if (already) return;

  const allStats = await db.question_stats.toArray();

  // Group attempts by date
  const dayMap = new Map<string, { answered: number; correct: number }>();
  for (const stat of allStats) {
    for (const a of stat.attempts) {
      const date = new Date(a.timestamp).toLocaleDateString("en-CA");
      const entry = dayMap.get(date);
      if (entry) {
        entry.answered++;
        if (a.correct) entry.correct++;
      } else {
        dayMap.set(date, { answered: 1, correct: a.correct ? 1 : 0 });
      }
    }
  }

  // Bulk-insert into streak_log (skip dates that somehow already exist)
  const existing = new Set((await db.streak_log.toArray()).map((l) => l.date));
  const rows = [...dayMap.entries()]
    .filter(([date]) => !existing.has(date))
    .map(([date, { answered, correct }]) => ({
      date,
      questionsAnswered: answered,
      questionsCorrect: correct,
    }));

  if (rows.length > 0) {
    await db.streak_log.bulkAdd(rows);
  }

  await db.meta.put({ key: META_KEY, value: "1" });
}
