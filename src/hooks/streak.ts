import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { computeStreak } from "@/lib/streak";

/** Live streak data. Returns undefined while loading. */
export function useStreak() {
  return useLiveQuery(async () => {
    const logs = await db.streak_log.orderBy("date").reverse().toArray();
    return computeStreak(logs);
  }, []);
}
