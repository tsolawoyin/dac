import { db } from "./db";
import { computeStreak } from "./streak";
import { topicMastery } from "./mastery";
import { questions } from "@/data/questions";
import { getAnonId, getAnonUsername } from "./anonymous-id";
import { createClient } from "./supabase/client";

function totalQuestionsForTopic(topicId: string): number {
  return questions.filter((q) => q.topic === topicId && q.is_visible).length;
}

export async function syncStats(): Promise<void> {
  try {
    // Streak
    const logs = await db.streak_log.orderBy("date").reverse().toArray();
    const streak = computeStreak(logs);

    // Total XP
    const xpRows = await db.xp_log.toArray();
    const totalXp = xpRows.reduce((sum, row) => sum + row.points, 0);

    // Mastery per topic
    const allStats = await db.question_stats.toArray();
    const grouped = new Map<string, typeof allStats>();
    for (const s of allStats) {
      const arr = grouped.get(s.topicId);
      if (arr) arr.push(s);
      else grouped.set(s.topicId, [s]);
    }

    const now = Date.now();
    const mastery: Record<string, number> = {};
    const topicIds = new Set(
      questions.filter((q) => q.is_visible).map((q) => q.topic)
    );
    for (const topicId of topicIds) {
      const stats = grouped.get(topicId) ?? [];
      const total = totalQuestionsForTopic(topicId);
      const m = topicMastery(stats, total, now);
      if (m !== null) mastery[topicId] = Math.round(m * 100);
    }

    // Upsert to Supabase
    const supabase = createClient();
    await supabase.from("user_stats").upsert(
      {
        id: getAnonId(),
        username: getAnonUsername(),
        total_xp: totalXp,
        current_streak: streak.current,
        longest_streak: streak.longest,
        mastery,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    );
  } catch {
    // Silently swallow — local data is source of truth.
    // Sync failures (offline, Supabase down) are non-critical.
  }
}
