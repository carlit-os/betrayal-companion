import Link from "next/link";
import DiceRoller from "../components/DiceRoller";

const editions = [
  {
    id: "original",
    name: "Original",
    year: "2004",
    haunts: 50,
    description: "The classic. 50 haunts, 12 characters, endless edge cases.",
    ready: true,
    accent: "border-red-800/30 hover:border-red-700",
  },
  {
    id: "widows-walk",
    name: "Widow's Walk",
    year: "2016",
    haunts: 50,
    description: "Expansion adding a roof floor, new rooms, and 50 new haunts.",
    ready: true,
    accent: "border-purple-800/30 hover:border-purple-700",
  },
  {
    id: "legacy",
    name: "Betrayal Legacy",
    year: "2018",
    haunts: 14,
    description: "Campaign-based. Choices permanently alter the house.",
    ready: true,
    accent: "border-amber-800/30 hover:border-amber-700",
  },
  {
    id: "3rd-edition",
    name: "3rd Edition",
    year: "2022",
    haunts: 50,
    description: "Revised and rebalanced for a new generation.",
    ready: true,
    accent: "border-emerald-800/30 hover:border-emerald-700",
  },
];

export default function Home() {
  return (
    <div>
      <div className="mb-10 pt-4 text-center">
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-stone-900">
          Betrayal Companion
        </h1>
        <p className="mx-auto max-w-md text-stone-500">
          Haunt lookup, edge case rulings, and dice roller for every edition of
          Betrayal at House on the Hill.
        </p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {editions.map((edition) => (
          <Link
            key={edition.id}
            href={`/${edition.id}/haunts`}
            className={`group rounded-xl border-2 bg-white p-6 shadow-sm transition-all hover:shadow-md ${edition.accent}`}
          >
            <div className="mb-2 flex items-baseline justify-between">
              <h2 className="text-lg font-semibold text-stone-900 group-hover:text-stone-700">
                {edition.name}
              </h2>
              <span className="font-mono text-xs text-stone-400">
                {edition.year}
              </span>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-stone-500">
              {edition.description}
            </p>
            <span className="text-xs font-medium text-stone-400">
              {edition.haunts} haunts
            </span>
          </Link>
        ))}
      </div>

      <DiceRoller />
    </div>
  );
}
