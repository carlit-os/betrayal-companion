"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

interface Haunt {
  id: string;
  number: number;
  name: string;
  omenTrigger: string | null;
  roomTrigger: string | null;
  traitorDescription: string | null;
  heroDescription: string | null;
}

export default function HauntsList({
  haunts,
  edition,
}: {
  haunts: Haunt[];
  edition: string;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return haunts;
    const lower = query.toLowerCase();
    return haunts.filter(
      (h) =>
        h.name.toLowerCase().includes(lower) ||
        h.omenTrigger?.toLowerCase().includes(lower) ||
        h.roomTrigger?.toLowerCase().includes(lower) ||
        h.heroDescription?.toLowerCase().includes(lower) ||
        h.traitorDescription?.toLowerCase().includes(lower)
    );
  }, [haunts, query]);

  return (
    <div>
      <div className="mb-5">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search haunts by name, omen, room..."
          className="w-full rounded-lg border border-stone-800 bg-stone-900/50 px-3.5 py-2 text-sm text-stone-200 placeholder-stone-600 transition focus:border-stone-600 focus:outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-stone-800 bg-stone-900/50 py-16 text-center">
          <p className="text-stone-500">
            {query ? `No haunts matching "${query}".` : "No haunts for this edition yet."}
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-stone-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-800 bg-stone-900/80">
                <th className="w-14 px-4 py-2.5 text-left text-xs font-medium text-stone-500">
                  #
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-medium text-stone-500">
                  Name
                </th>
                <th className="hidden px-4 py-2.5 text-left text-xs font-medium text-stone-500 sm:table-cell">
                  Omen
                </th>
                <th className="hidden px-4 py-2.5 text-left text-xs font-medium text-stone-500 sm:table-cell">
                  Room
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((haunt, i) => (
                <tr
                  key={haunt.id}
                  className={`group transition hover:bg-stone-800/50 ${i < filtered.length - 1 ? "border-b border-stone-800/50" : ""}`}
                >
                  <td className="px-4 py-2.5 font-mono text-xs text-stone-600">
                    {haunt.number}
                  </td>
                  <td className="px-4 py-2.5">
                    <Link
                      href={`/${edition}/haunts/${haunt.number}`}
                      className="text-stone-300 transition group-hover:text-stone-100"
                    >
                      {haunt.name}
                    </Link>
                    <div className="mt-0.5 text-xs text-stone-600 sm:hidden">
                      {[haunt.omenTrigger, haunt.roomTrigger]
                        .filter(Boolean)
                        .join(" / ") || "—"}
                    </div>
                  </td>
                  <td className="hidden px-4 py-2.5 text-stone-500 sm:table-cell">
                    {haunt.omenTrigger || <span className="text-stone-700">—</span>}
                  </td>
                  <td className="hidden px-4 py-2.5 text-stone-500 sm:table-cell">
                    {haunt.roomTrigger || <span className="text-stone-700">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-3 text-center text-xs text-stone-600">
        {filtered.length} haunt{filtered.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
