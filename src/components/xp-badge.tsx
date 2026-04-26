/**
 * XpBadge — displays the user's total Mastery XP in the header.
 *
 * Mirrors the StreakBadge pattern:
 *   - Compact button with icon + number
 *   - Popover on click with detailed breakdown
 *   - Returns null if no XP earned yet (no visual clutter for new users)
 *
 * Uses the Zap (lightning bolt) icon to distinguish from the streak flame.
 */
"use client";

import { Zap } from "lucide-react";
import { useXp } from "@/hooks/xp";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function XpBadge() {
  const xp = useXp();

  // Still loading from IndexedDB, or no XP earned yet — don't render anything.
  if (!xp || xp.total === 0) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-1 rounded-full px-2 py-1 text-sm font-semibold transition-colors hover:bg-muted">
          <Zap className="h-5 w-5 text-yellow-500" />
          <span className="text-yellow-500">{xp.total}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56 p-4">
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            <div>
              <p className="text-lg font-bold leading-none">
                {xp.total} XP
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Mastery points
              </p>
            </div>
          </div>
          {/* Today's earnings — only show if the user earned something today */}
          {xp.today > 0 && (
            <div className="border-t pt-2">
              <p className="text-xs text-muted-foreground">
                Today: <span className="font-semibold text-foreground">+{xp.today} XP</span>
              </p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
