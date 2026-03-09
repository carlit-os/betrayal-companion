import { db } from "../../../lib/db";
import { rulings } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import SearchBar from "../../../components/SearchBar";

export default async function RulingsPage({
  params,
  searchParams,
}: {
  params: Promise<{ edition: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { edition } = await params;
  const { q } = await searchParams;

  let allRulings = await db
    .select()
    .from(rulings)
    .where(eq(rulings.editionId, edition));

  if (q) {
    const lower = q.toLowerCase();
    allRulings = allRulings.filter(
      (r) =>
        r.title.toLowerCase().includes(lower) ||
        r.situation.toLowerCase().includes(lower) ||
        r.ruling.toLowerCase().includes(lower) ||
        (r.tags as string[] | null)?.some((t) =>
          t.toLowerCase().includes(lower)
        )
    );
  }

  // Group: haunt-specific first, then general
  const hauntRulings = allRulings.filter((r) => r.hauntId);
  const generalRulings = allRulings.filter((r) => !r.hauntId);

  return (
    <div>
      <div className="mb-5">
        <SearchBar
          placeholder="Search rulings by keyword, tag, or situation..."
          basePath={`/${edition}/rulings`}
        />
      </div>

      <p className="mb-4 text-xs text-stone-400">
        {allRulings.length} ruling{allRulings.length !== 1 ? "s" : ""}
        {q ? ` matching "${q}"` : ""}
      </p>

      {generalRulings.length > 0 && (
        <div className="mb-8">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-stone-500">
            <span className="inline-block h-4 w-1 rounded-full bg-stone-400" />
            General Rules
          </h3>
          <div className="space-y-3">
            {generalRulings.map((ruling) => (
              <RulingCard key={ruling.id} ruling={ruling} />
            ))}
          </div>
        </div>
      )}

      {hauntRulings.length > 0 && (
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-stone-500">
            <span className="inline-block h-4 w-1 rounded-full bg-red-600" />
            Haunt-Specific
          </h3>
          <div className="space-y-3">
            {hauntRulings.map((ruling) => (
              <RulingCard key={ruling.id} ruling={ruling} />
            ))}
          </div>
        </div>
      )}

      {allRulings.length === 0 && (
        <div className="rounded-xl border border-stone-200 bg-white py-16 text-center">
          <p className="text-stone-400">No rulings found.</p>
        </div>
      )}
    </div>
  );
}

function RulingCard({
  ruling,
}: {
  ruling: {
    id: number;
    title: string;
    situation: string;
    ruling: string;
    source: string;
    tags: unknown;
    hauntId: string | null;
  };
}) {
  const tags = ruling.tags as string[] | null;
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 transition hover:border-stone-300">
      <div className="mb-1 flex items-start justify-between gap-2">
        <h4 className="font-medium text-stone-900">{ruling.title}</h4>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
            ruling.source === "official_faq"
              ? "bg-green-100 text-green-700"
              : ruling.source === "designer"
                ? "bg-blue-100 text-blue-700"
                : "bg-stone-100 text-stone-500"
          }`}
        >
          {ruling.source === "official_faq"
            ? "Official"
            : ruling.source === "designer"
              ? "Designer"
              : "Community"}
        </span>
      </div>

      <p className="mb-2 text-sm italic text-stone-400">{ruling.situation}</p>
      <p className="text-sm leading-relaxed text-stone-700">{ruling.ruling}</p>

      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] text-stone-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
