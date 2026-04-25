import { StreakLog } from "./db";

const MS_PER_DAY = 86_400_000;

/** Returns today's date as YYYY-MM-DD in the local timezone. */
export function getToday(): string {
  return new Date().toLocaleDateString("en-CA");
}

/**
 * Compute current streak, longest streak, and whether today has activity.
 * Expects `logs` sorted by date descending (newest first).
 */
export function computeStreak(logs: StreakLog[]): {
  current: number;
  longest: number;
  todayDone: boolean;
} {
  if (logs.length === 0) return { current: 0, longest: 0, todayDone: false };

  const today = getToday();
  const todayDone = logs[0].date === today;

  // Walk consecutive dates starting from today (or yesterday if today has no activity)
  let current = 0;
  // The streak can start from today or yesterday
  let expected = todayDone ? today : yesterday(today);

  for (const log of logs) {
    if (log.date === expected) {
      current++;
      expected = yesterday(expected);
    } else if (log.date < expected) {
      // Gap found — streak broken
      break;
    }
    // log.date > expected means duplicate or future, skip
  }

  // Longest streak: walk all logs
  let longest = 0;
  let run = 1;
  for (let i = 1; i < logs.length; i++) {
    if (daysBetween(logs[i].date, logs[i - 1].date) === 1) {
      run++;
    } else {
      longest = Math.max(longest, run);
      run = 1;
    }
  }
  longest = Math.max(longest, run);

  return { current, longest, todayDone };
}

/** Returns the YYYY-MM-DD string for the day before `dateStr`. */
function yesterday(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() - 1);
  return d.toLocaleDateString("en-CA");
}

/** Number of days between two YYYY-MM-DD strings (absolute). */
function daysBetween(earlier: string, later: string): number {
  const a = new Date(earlier + "T00:00:00").getTime();
  const b = new Date(later + "T00:00:00").getTime();
  return Math.round(Math.abs(b - a) / MS_PER_DAY);
}
