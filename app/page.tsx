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
  },
  {
    id: "widows-walk",
    name: "Widow's Walk",
    year: "2016",
    haunts: 50,
    description: "Expansion. Roof floor, new rooms, 50 additional haunts.",
    ready: true,
  },
  {
    id: "legacy",
    name: "Betrayal Legacy",
    year: "2018",
    haunts: 14,
    description: "Campaign. Choices permanently alter the house across generations.",
    ready: true,
  },
  {
    id: "3rd-edition",
    name: "3rd Edition",
    year: "2022",
    haunts: 50,
    description: "Revised and rebalanced. Updated components and streamlined rules.",
    ready: true,
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
            className="group rounded-lg border border-stone-800 bg-stone-900/50 p-5 transition hover:border-stone-700 hover:bg-stone-900"
          >
            <div className="mb-2 flex items-baseline justify-between">
              <h3 className="font-medium text-stone-200 group-hover:text-stone-100">
                {edition.name}
              </h3>
              <span className="font-mono text-[11px] text-stone-600">
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
