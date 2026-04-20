"use client";

import { useEffect, useState } from 'react';

type ContributionDay = {
  date: string;
  count: number;
};

type ContributionData = {
  total: Record<string, number>;
  contributions: ContributionDay[];
};

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function getLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3)  return 1;
  if (count <= 6)  return 2;
  if (count <= 9)  return 3;
  return 4;
}

function groupIntoWeeks(days: ContributionDay[]): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];
  let week: ContributionDay[] = [];

  // Pad the start so the first day lands on its correct weekday (0 = Sun)
  if (days.length > 0) {
    const firstDayOfWeek = new Date(days[0].date).getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      week.push({ date: '', count: -1 }); // -1 = empty padding cell
    }
  }

  for (const day of days) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  // Pad the end to complete the last week
  if (week.length > 0) {
    while (week.length < 7) week.push({ date: '', count: -1 });
    weeks.push(week);
  }

  return weeks;
}

type TooltipState = { text: string; x: number; y: number } | null;

type Props = {
  username: string;
};

export default function GithubHeatmap({ username }: Props) {
  const [data, setData] = useState<ContributionData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>(null);

  useEffect(() => {
    if (!username) return;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then(r => {
        if (!r.ok) throw new Error(`User "${username}" not found`);
        return r.json();
      })
      .then(setData)
      .catch(e => setError(e.message));
  }, [username]);

  const getLevelColor = (level: 0 | 1 | 2 | 3 | 4): string => {
    switch (level) {
      case 0: return 'bg-[#ebedf0] dark:bg-[#161b22]';
      case 1: return 'bg-[#9be9a8] dark:bg-[#0e4429]';
      case 2: return 'bg-[#40c463] dark:bg-[#006d32]';
      case 3: return 'bg-[#30a14e] dark:bg-[#26a641]';
      case 4: return 'bg-[#216e39] dark:bg-[#39d353]';
      default: return 'bg-[#ebedf0] dark:bg-[#161b22]';
    }
  };

  if (error) {
    return (
      <div className="flex items-center gap-2 p-3 border border-destructive/20 rounded-lg bg-destructive/5 text-destructive text-sm">
        <span className="font-bold">!</span>
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-4 border rounded-lg bg-card animate-pulse">
        <div className="h-4 bg-muted rounded w-48 mb-3"></div>
        <div className="flex gap-1">
          {Array.from({ length: 53 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, j) => (
                <div key={j} className="w-3 h-3 bg-muted rounded-sm"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const weeks = groupIntoWeeks(data.contributions);
  const totalLastYear = Object.values(data.total).reduce((a, b) => a + b, 0);

  // Build month labels: track when the month changes across weeks
  const monthLabels: (string | null)[] = weeks.map((week, i) => {
    const firstReal = week.find(d => d.date);
    if (!firstReal) return null;
    const month = new Date(firstReal.date).getMonth();
    if (i === 0) return MONTHS[month];
    const prevWeek = weeks[i - 1];
    const prevReal = prevWeek.find(d => d.date);
    if (!prevReal) return null;
    const prevMonth = new Date(prevReal.date).getMonth();
    return month !== prevMonth ? MONTHS[month] : null;
  });

  return (
    <div className="relative">
      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 bg-popover text-popover-foreground px-2 py-1 rounded-md text-xs shadow-lg pointer-events-none whitespace-nowrap border"
          style={{
            top: tooltip.y - 40,
            left: tooltip.x,
            transform: 'translateX(-50%)',
          }}
        >
          {tooltip.text}
        </div>
      )}

      <div className="p-4 border rounded-lg bg-card shadow">
        <p className="text-sm text-muted-foreground mb-3">
          <strong className="text-foreground">{totalLastYear.toLocaleString()}</strong> contributions in the last year
        </p>

        <div className="overflow-x-auto scrollbar-hide w-full">
          {/* Month labels row */}
          <div className="flex pl-6 mb-1 justify-between">
            {weeks.map((_, i) => (
              <div key={i} className="text-[9px] text-muted-foreground flex-shrink-0 overflow-visible whitespace-nowrap text-center flex-1">
                {monthLabels[i] ?? ''}
              </div>
            ))}
          </div>

          <div className="flex gap-0.5 justify-between">
            {/* Day-of-week labels */}
            <div className="flex flex-col gap-0.5 mr-0.5 flex-shrink-0">
              {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((d, i) => (
                <div key={i} className="h-2.5 text-[9px] text-muted-foreground leading-[10px] whitespace-nowrap">
                  {d}
                </div>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="flex gap-0.5 flex-1 justify-between">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-0.5 flex-1">
                  {week.map((day, di) => {
                    if (day.count === -1) {
                      // Padding cell
                      return <div key={di} className="flex-1 h-2.5" />;
                    }
                    const lvl = getLevel(day.count);
                    return (
                      <div
                        key={di}
                        className={`flex-1 h-2.5 rounded-sm cursor-pointer transition-all hover:ring-1 hover:ring-ring ${getLevelColor(lvl)}`}
                        onMouseEnter={e => {
                          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                          const label =
                            day.count === 0
                              ? `No contributions on ${day.date}`
                              : `${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`;
                          setTooltip({ text: label, x: rect.left + rect.width / 2, y: rect.top });
                        }}
                        onMouseLeave={() => setTooltip(null)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-1 mt-3">
          <span className="text-xs text-muted-foreground">Less</span>
          {([0, 1, 2, 3, 4] as const).map(l => (
            <div key={l} className={`w-2.5 h-2.5 rounded-sm ${getLevelColor(l)}`} />
          ))}
          <span className="text-xs text-muted-foreground">More</span>
        </div>
      </div>
    </div>
  );
}