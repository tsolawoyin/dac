"use client";

import { Flame } from "lucide-react";
import { useStreak } from "@/hooks/streak";

export function StreakBadge() {
  const streak = useStreak();

  // Loading or never studied
  if (!streak || (streak.current === 0 && streak.longest === 0)) return null;

  return (
    <div className="flex items-center gap-2">
      <Flame
        className={`h-5 w-5 ${streak.todayDone ? "text-orange-500" : "text-muted-foreground"}`}
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium">
          {streak.current} {streak.current === 1 ? "day" : "days"}
        </span>
        {streak.longest > streak.current && (
          <span className="text-xs text-muted-foreground">Best: {streak.longest}</span>
        )}
      </div>
    </div>
  );
}
