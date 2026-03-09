import Link from "next/link";
import DiceRoller from "../components/DiceRoller";

const editions = [
  {
    id: "original",
    name: "Original",
    year: "2004",
    haunts: 50,
    description: "The classic. 50 haunts, 12 explorers, endless arguments about the rules.",
    ready: true,
    border: "border-red-900/40 hover:border-red-700/60",
    dot: "bg-red-500",
  },
  {
    id: "widows-walk",
    name: "Widow's Walk",
    year: "2016",
    haunts: 50,
    description: "Expansion. Roof floor, new rooms, 50 additional haunts.",
    ready: true,
    border: "border-violet-900/40 hover:border-violet-700/60",
    dot: "bg-violet-500",
  },
  {
    id: "legacy",
    name: "Betrayal Legacy",
    year: "2018",
    haunts: 14,
    description: "Campaign. Choices permanently alter the house across generations.",
    ready: true,
    border: "border-amber-900/40 hover:border-amber-700/60",
    dot: "bg-amber-500",
  },
  {
    id: "3rd-edition",
    name: "3rd Edition",
    year: "2022",
    haunts: 50,
    description: "Revised and rebalanced. Updated components and streamlined rules.",
    ready: true,
    border: "border-emerald-900/40 hover:border-emerald-700/60",
    dot: "bg-emerald-500",
  },
];

export default function Home() {
  return (
    <div>
      <div className="mb-12 pt-6">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-stone-100">
          Betrayal Companion
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-stone-500">
          Haunt reference, edge case rulings, and dice roller for every edition
          of Betrayal at House on the Hill. Built for the moments when the
          rulebook isn&apos;t enough.
        </p>
      </div>

      <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-600">
        Editions
      </h2>

      <div className="mb-12 grid gap-3 sm:grid-cols-2">
        {editions.map((edition) => (
          <Link
            key={edition.id}
            href={`/${edition.id}/haunts`}
            className={`group rounded-lg border bg-stone-900/50 p-5 transition hover:bg-stone-900 ${edition.border}`}
          >
            <div className="mb-2 flex items-center gap-2.5">
              <span className={`h-2 w-2 rounded-full ${edition.dot}`} />
              <h3 className="font-medium text-stone-200 group-hover:text-stone-100">
                {edition.name}
              </h3>
              <span className="ml-auto font-mono text-[11px] text-stone-600">
                {edition.year}
              </span>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-stone-500">
              {edition.description}
            </p>
            <span className="text-xs text-stone-600">
              {edition.haunts} haunts
            </span>
          </Link>
        ))}
      </div>

      <DiceRoller />
    </div>
  );
}
