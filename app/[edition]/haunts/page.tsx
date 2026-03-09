import Link from "next/link";
import { db } from "../../../lib/db";
import { haunts } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import SearchBar from "../../../components/SearchBar";

export default async function HauntsPage({
  params,
  searchParams,
}: {
  params: Promise<{ edition: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { edition } = await params;
  const { q } = await searchParams;

  let allHaunts = await db
    .select()
    .from(haunts)
    .where(eq(haunts.editionId, edition))
    .orderBy(haunts.number);

  if (q) {
    const lower = q.toLowerCase();
    allHaunts = allHaunts.filter(
      (h) =>
        h.name.toLowerCase().includes(lower) ||
        h.omenTrigger?.toLowerCase().includes(lower) ||
        h.roomTrigger?.toLowerCase().includes(lower) ||
        h.heroDescription?.toLowerCase().includes(lower) ||
        h.traitorDescription?.toLowerCase().includes(lower)
    );
  }

  return (
    <div>
      <div className="mb-5">
        <SearchBar
          placeholder="Search haunts by name, omen, room..."
          basePath={`/${edition}/haunts`}
        />
      </div>

      {allHaunts.length === 0 ? (
        <div className="rounded-lg border border-stone-800 bg-stone-900/50 py-16 text-center">
          <p className="text-stone-500">
            {q ? `No haunts matching "${q}".` : "No haunts for this edition yet."}
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
              {allHaunts.map((haunt, i) => (
                <tr
                  key={haunt.id}
                  className={`group transition hover:bg-stone-800/50 ${i < allHaunts.length - 1 ? "border-b border-stone-800/50" : ""}`}
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
        {allHaunts.length} haunt{allHaunts.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
