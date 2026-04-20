import { useMemo } from "react";

const MONTH_NAMES = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarCard({
  year = 2026,
  month = 4, // 0-based: 4 = May
  highlightDay = 2,
}) {
  const cells = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const total = new Date(year, month + 1, 0).getDate();
    const grid = [];
    for (let i = 0; i < firstDay; i++) grid.push(null);
    for (let d = 1; d <= total; d++) grid.push(d);
    while (grid.length % 7 !== 0) grid.push(null);
    return grid;
  }, [year, month]);

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111] font-serif">
      <div className="w-[300px] rounded-[20px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)] select-none bg-[#F0EAE0]">
        {/* Header */}
        <div className="bg-[#6B0F1A] px-8 pt-6 pb-5 flex items-baseline justify-between">
          <span className="text-[#F0EAE0] text-md font-bold leading-none tracking-widest">
            {MONTH_NAMES[month]}
          </span>
          <span className="text-[#F0EAE0] text-sm font-normal tracking-wider">
            {year}
          </span>
        </div>

        {/* Body */}
        <div className="px-7 pt-6 pb-7">
          {/* Day labels */}
          <div className="grid grid-cols-7 text-center">
            {DAY_LABELS.map((d) => (
              <div
                key={d}
                className="text-xs text-neutral-800 tracking-wide pb-2"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-neutral-800/20 mb-2" />

          {/* Date rows */}
          {rows.map((row, ri) => (
            <div key={ri} className="grid grid-cols-7 text-center">
              {row.map((day, di) => {
                const isHighlight = day === highlightDay;
                return (
                  <div
                    key={di}
                    className="relative flex items-center justify-center h-9"
                  >
                    {day && (
                      <>
                        <span className="text-sm text-neutral-900 relative z-10">
                          {day}
                        </span>
                        {isHighlight && (
                          <div className="absolute inset-[6px] rounded-full border-2 border-[#9B2335] opacity-75 pointer-events-none shadow-[0_0_0_1px_rgba(155,35,53,0.25)]" />
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
