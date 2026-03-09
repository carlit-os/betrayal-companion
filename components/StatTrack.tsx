"use client";

interface StatTrackProps {
  label: string;
  values: number[];
  startIndex: number;
  currentIndex?: number;
  color: string;
}

export default function StatTrack({
  label,
  values,
  startIndex,
  currentIndex,
  color,
}: StatTrackProps) {
  const activeIndex = currentIndex ?? startIndex;

  const colorClasses: Record<string, string> = {
    speed: "bg-emerald-600",
    might: "bg-red-600",
    sanity: "bg-blue-600",
    knowledge: "bg-amber-600",
  };

  const bgClass = colorClasses[color] || "bg-gray-600";

  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </span>
      <div className="flex gap-0.5">
        {values.map((val, i) => (
          <div
            key={i}
            className={`flex h-7 w-7 items-center justify-center rounded text-xs font-bold ${
              i === 0
                ? "bg-gray-900 text-red-400"
                : i === activeIndex
                  ? `${bgClass} text-white ring-2 ring-offset-1 ring-gray-900`
                  : i === startIndex && activeIndex !== startIndex
                    ? "bg-gray-200 text-gray-500 underline"
                    : "bg-gray-100 text-gray-700"
            }`}
            title={
              i === 0
                ? "Death"
                : i === startIndex
                  ? `Starting value`
                  : undefined
            }
          >
            {i === 0 ? "\u2620" : val}
          </div>
        ))}
      </div>
    </div>
  );
}
