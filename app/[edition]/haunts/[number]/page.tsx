import Link from "next/link";
import { db } from "../../../../lib/db";
import { haunts, rulings } from "../../../../lib/db/schema";
import { eq, and } from "drizzle-orm";
import { notFound } from "next/navigation";
import DiceRoller from "../../../../components/DiceRoller";

export async function generateStaticParams() {
  const allHaunts = await db.select({ editionId: haunts.editionId, number: haunts.number }).from(haunts);
  return allHaunts.map((h) => ({ edition: h.editionId, number: String(h.number) }));
}

export default async function HauntDetailPage({
  params,
}: {
  params: Promise<{ edition: string; number: string }>;
}) {
  const { edition, number } = await params;
  const num = parseInt(number, 10);

  const [haunt] = await db
    .select()
    .from(haunts)
    .where(and(eq(haunts.editionId, edition), eq(haunts.number, num)));

  if (!haunt) return notFound();

  const relatedRulings = await db
    .select()
    .from(rulings)
    .where(eq(rulings.hauntId, haunt.id));

  const noTraitor =
    haunt.traitorDescription?.toLowerCase().includes("no traitor") ?? false;

  const prevNum = num > (edition === "widows-walk" ? 51 : edition === "legacy" ? 0 : 1)
    ? num - 1
    : null;
  const maxHaunt = edition === "widows-walk" ? 100 : edition === "legacy" ? 13 : 50;
  const nextNum = num < maxHaunt ? num + 1 : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link
            href={`/${edition}/haunts`}
            className="text-xs text-stone-600 transition hover:text-stone-400"
          >
            &larr; All haunts
          </Link>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-stone-100">
            <span className="text-stone-500">#{haunt.number}</span>{" "}
            {haunt.name}
          </h2>
        </div>
        <div className="flex gap-1.5 pt-5">
          {prevNum !== null && (
            <Link
              href={`/${edition}/haunts/${prevNum}`}
              className="rounded border border-stone-800 px-2.5 py-1 text-xs text-stone-500 transition hover:border-stone-700 hover:text-stone-300"
            >
              &larr;
            </Link>
          )}
          {nextNum !== null && (
            <Link
              href={`/${edition}/haunts/${nextNum}`}
              className="rounded border border-stone-800 px-2.5 py-1 text-xs text-stone-500 transition hover:border-stone-700 hover:text-stone-300"
            >
              &rarr;
            </Link>
          )}
        </div>
      </div>

      {/* Triggers */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-stone-800 bg-stone-900/50 px-4 py-3">
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-stone-600">
            Omen
          </p>
          <p className="text-sm text-stone-300">
            {haunt.omenTrigger || "None"}
          </p>
        </div>
        <div className="rounded-lg border border-stone-800 bg-stone-900/50 px-4 py-3">
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-stone-600">
            Room
          </p>
          <p className="text-sm text-stone-300">
            {haunt.roomTrigger || "None"}
          </p>
        </div>
      </div>

      {/* Traitor / Heroes */}
      <div className="grid gap-3 sm:grid-cols-2">
        {!noTraitor && (
          <div className="rounded-lg border border-red-900/50 bg-red-950/30">
            <div className="border-b border-red-900/30 px-4 py-2">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-red-400">
                Traitor
              </h3>
            </div>
            <div className="p-4">
              <p className="mb-4 text-sm leading-relaxed text-stone-300">
                {haunt.traitorDescription}
              </p>
              <div className="border-t border-red-900/20 pt-3">
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-red-500/70">
                  Win Condition
                </p>
                <p className="text-sm text-red-300/90">
                  {haunt.winConditionTraitor}
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          className={`rounded-lg border border-blue-900/50 bg-blue-950/30 ${noTraitor ? "sm:col-span-2" : ""}`}
        >
          <div className="border-b border-blue-900/30 px-4 py-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-400">
              {noTraitor ? "All Players" : "Heroes"}
            </h3>
          </div>
          <div className="p-4">
            <p className="mb-4 text-sm leading-relaxed text-stone-300">
              {haunt.heroDescription}
            </p>
            <div className="border-t border-blue-900/20 pt-3">
              <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-blue-500/70">
                Win Condition
              </p>
              <p className="text-sm text-blue-300/90">
                {haunt.winConditionHero}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Rules */}
      {haunt.specialRules && (
        <div className="rounded-lg border border-amber-900/40 bg-amber-950/20 p-4">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-amber-500/70">
            Special Rules
          </p>
          <p className="text-sm leading-relaxed text-amber-200/80">
            {haunt.specialRules}
          </p>
        </div>
      )}

      {/* Rulings */}
      {relatedRulings.length > 0 && (
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-500">
            Rulings ({relatedRulings.length})
          </h3>
          <div className="space-y-2">
            {relatedRulings.map((ruling) => (
              <div
                key={ruling.id}
                className="rounded-lg border border-stone-800 bg-stone-900/50 p-4"
              >
                <div className="mb-1.5 flex items-start justify-between gap-3">
                  <h4 className="text-sm font-medium text-stone-200">
                    {ruling.title}
                  </h4>
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
                <p className="mb-2 text-xs italic text-stone-500">
                  {ruling.situation}
                </p>
                <p className="text-sm leading-relaxed text-stone-400">
                  {ruling.ruling}
                </p>
                {(ruling.tags as string[] | null) &&
                  (ruling.tags as string[]).length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {(ruling.tags as string[]).map((tag) => (
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
            ))}
          </div>
        </div>
      )}

      <DiceRoller />
    </div>
  );
}
