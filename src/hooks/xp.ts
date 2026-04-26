/**
 * xp hooks — reactive XP data from IndexedDB via useLiveQuery.
 *
 * These hooks re-run automatically whenever the xp_log table changes,
 * so the UI always shows the latest XP without manual refresh.
 *
 * Pattern: same as useStreak() and useTopicMastery() — Dexie's
 * useLiveQuery subscribes to the relevant table(s) and re-fires
 * the async function on any write.
 */

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";

/**
 * Live total XP and today's XP.
 *
 * Returns undefined while loading (initial IndexedDB read).
 * After that, returns { total, today } which are both numbers.
 *
 * Why two numbers?
 *   - `total` is for the header badge / leaderboard.
 *   - `today` is for the popover breakdown ("You earned X XP today").
 */
export function useXp() {
  return useLiveQuery(async () => {
    // Get ALL xp_log entries and sum their points for the total.
    // For a typical user this table will have hundreds to low-thousands of rows,
    // so a full scan is fine. If it ever gets huge, we could maintain a running
    // total in the `meta` table — but premature optimization isn't needed here.
    const allEntries = await db.xp_log.toArray();

    const total = allEntries.reduce((sum, e) => sum + e.points, 0);

    // Filter to today's entries for the daily breakdown.
    const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD
    const startOfToday = new Date(today + "T00:00:00").getTime();

    const todayPoints = allEntries
      .filter((e) => e.timestamp >= startOfToday)
      .reduce((sum, e) => sum + e.points, 0);

    return { total, today: todayPoints };
  }, []);
}
