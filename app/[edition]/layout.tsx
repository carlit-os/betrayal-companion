import Link from "next/link";

const editionIds = ["original", "widows-walk", "legacy", "3rd-edition"];

export function generateStaticParams() {
  return editionIds.map((edition) => ({ edition }));
}

const editionMeta: Record<string, { name: string; accent: string; dot: string }> = {
  original: { name: "Original (2004)", accent: "text-red-400", dot: "bg-red-500" },
  "widows-walk": { name: "Widow's Walk (2016)", accent: "text-violet-400", dot: "bg-violet-500" },
  legacy: { name: "Betrayal Legacy (2018)", accent: "text-amber-400", dot: "bg-amber-500" },
  "3rd-edition": { name: "3rd Edition (2022)", accent: "text-emerald-400", dot: "bg-emerald-500" },
};

export default async function EditionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ edition: string }>;
}) {
  const { edition } = await params;
  const meta = editionMeta[edition] || { name: edition, accent: "text-stone-400", dot: "bg-stone-500" };

  const tabs = [
    { label: "Haunts", href: `/${edition}/haunts` },
    { label: "Rulings", href: `/${edition}/rulings` },
  ];

  return (
    <div>
      <div className="mb-5">
        <Link
          href="/"
          className="text-xs text-stone-600 transition hover:text-stone-400"
        >
          &larr; Editions
        </Link>
        <div className="mt-1.5 flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
          <h1 className={`text-xl font-semibold ${meta.accent}`}>
            {meta.name}
          </h1>
        </div>
      </div>

      <div className="mb-6 flex gap-0.5 border-b border-stone-800">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="border-b-2 border-transparent px-4 py-2 text-sm text-stone-500 transition hover:border-stone-600 hover:text-stone-300"
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
}
