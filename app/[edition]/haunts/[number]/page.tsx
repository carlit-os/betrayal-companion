import Link from "next/link";
import { db } from "../../../../lib/db";
import { haunts, rulings } from "../../../../lib/db/schema";
import { eq, and } from "drizzle-orm";
import { notFound } from "next/navigation";
import DiceRoller from "../../../../components/DiceRoller";

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

  // Nav: prev/next haunt
  const prevNum = num > 1 ? num - 1 : null;
  const nextNum = num < 50 ? num + 1 : null;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <Link
            href={`/${edition}/haunts`}
            className="text-sm text-stone-400 transition hover:text-stone-600"
          >
            &larr; All haunts
          </Link>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-stone-900">
            <span className="text-stone-400">#{haunt.number}</span>{" "}
            {haunt.name}
          </h2>
        </div>
        <div className="flex gap-2 pt-6">
          {prevNum && (
            <Link
              href={`/${edition}/haunts/${prevNum}`}
              className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-500 transition hover:border-stone-300 hover:text-stone-700"
            >
              &larr; {prevNum}
            </Link>
          )}
          {nextNum && (
            <Link
              href={`/${edition}/haunts/${nextNum}`}
              className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-500 transition hover:border-stone-300 hover:text-stone-700"
            >
              {nextNum} &rarr;
            </Link>
          )}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-stone-200 bg-white p-4">
          <h3 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            Omen Trigger
          </h3>
          <p className="font-medium text-stone-800">
            {haunt.omenTrigger || "None"}
          </p>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-4">
          <h3 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            Room Trigger
          </h3>
          <p className="font-medium text-stone-800">
            {haunt.roomTrigger || "None"}
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {!noTraitor && (
          <div className="overflow-hidden rounded-xl border border-red-200">
            <div className="bg-red-900 px-4 py-2">
              <h3 className="text-sm font-bold text-red-100">Traitor</h3>
            </div>
            <div className="bg-red-50 p-4">
              <p className="mb-4 text-sm leading-relaxed text-red-900">
                {haunt.traitorDescription}
              </p>
              <div className="border-t border-red-200 pt-3">
                <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-red-500">
                  Win Condition
                </h4>
                <p className="text-sm font-medium text-red-800">
                  {haunt.winConditionTraitor}
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          className={`overflow-hidden rounded-xl border border-blue-200 ${noTraitor ? "sm:col-span-2" : ""}`}
        >
          <div className="bg-blue-900 px-4 py-2">
            <h3 className="text-sm font-bold text-blue-100">
              {noTraitor ? "All Players" : "Heroes"}
            </h3>
          </div>
          <div className="bg-blue-50 p-4">
            <p className="mb-4 text-sm leading-relaxed text-blue-900">
              {haunt.heroDescription}
            </p>
            <div className="border-t border-blue-200 pt-3">
              <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-blue-500">
                Win Condition
              </h4>
              <p className="text-sm font-medium text-blue-800">
                {haunt.winConditionHero}
              </p>
            </div>
          </div>
        </div>
      </div>

      {haunt.specialRules && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="mb-1 text-sm font-semibold text-amber-800">
            Special Rules
          </h3>
          <p className="text-sm leading-relaxed text-amber-900">
            {haunt.specialRules}
          </p>
        </div>
      )}

      {relatedRulings.length > 0 && (
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-stone-900">
            <span className="inline-block h-5 w-1 rounded-full bg-red-600" />
            Rulings for this Haunt
          </h3>
          <div className="space-y-3">
            {relatedRulings.map((ruling) => (
              <div
                key={ruling.id}
                className="rounded-xl border border-stone-200 bg-white p-4"
              >
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h4 className="font-medium text-stone-900">
                    {ruling.title}
                  </h4>
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
                <p className="mb-2 text-sm italic text-stone-400">
                  {ruling.situation}
                </p>
                <p className="text-sm leading-relaxed text-stone-700">
                  {ruling.ruling}
                </p>
                {(ruling.tags as string[] | null) &&
                  (ruling.tags as string[]).length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {(ruling.tags as string[]).map((tag) => (
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
            ))}
          </div>
        </div>
      )}

      <DiceRoller />
    </div>
  );
}
