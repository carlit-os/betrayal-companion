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

  const hauntRulings = allRulings.filter((r) => r.hauntId);
  const generalRulings = allRulings.filter((r) => !r.hauntId);

  return (
    <div>
      <div className="mb-5">
        <SearchBar
          placeholder="Search rulings..."
          basePath={`/${edition}/rulings`}
        />
      </div>

      <p className="mb-5 text-xs text-stone-600">
        {allRulings.length} ruling{allRulings.length !== 1 ? "s" : ""}
        {q ? ` matching "${q}"` : ""}
      </p>

      {generalRulings.length > 0 && (
        <div className="mb-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-500">
            General Rules
          </h3>
          <div className="space-y-2">
            {generalRulings.map((ruling) => (
              <RulingCard key={ruling.id} ruling={ruling} />
            ))}
          </div>
        </div>
      )}

      {hauntRulings.length > 0 && (
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-500">
            Haunt-Specific
          </h3>
          <div className="space-y-2">
            {hauntRulings.map((ruling) => (
              <RulingCard key={ruling.id} ruling={ruling} />
            ))}
          </div>
        </div>
      )}

      {allRulings.length === 0 && (
        <div className="rounded-lg border border-stone-800 bg-stone-900/50 py-16 text-center">
          <p className="text-stone-500">No rulings found.</p>
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
    <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-4 transition hover:border-stone-700">
      <div className="mb-1.5 flex items-start justify-between gap-3">
        <h4 className="text-sm font-medium text-stone-200">{ruling.title}</h4>
        <span
          className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
            ruling.source === "official_faq"
              ? "bg-emerald-950/50 text-emerald-400"
              : ruling.source === "designer"
                ? "bg-blue-950/50 text-blue-400"
                : "bg-stone-800 text-stone-500"
          }`}
        >
          {ruling.source === "official_faq"
            ? "Official"
            : ruling.source === "designer"
              ? "Designer"
              : "Community"}
        </span>
      </div>

      <p className="mb-2 text-xs italic text-stone-500">{ruling.situation}</p>
      <p className="text-sm leading-relaxed text-stone-400">{ruling.ruling}</p>

      {tags && tags.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-stone-800/50 px-1.5 py-0.5 text-[10px] text-stone-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
