import Link from "next/link";

const editionMeta: Record<string, { name: string; color: string }> = {
  original: { name: "Original (2004)", color: "text-red-700" },
  "widows-walk": { name: "Widow's Walk (2016)", color: "text-purple-700" },
  legacy: { name: "Betrayal Legacy (2018)", color: "text-amber-700" },
  "3rd-edition": { name: "3rd Edition (2022)", color: "text-emerald-700" },
};

export default async function EditionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ edition: string }>;
}) {
  const { edition } = await params;
  const meta = editionMeta[edition] || {
    name: edition,
    color: "text-stone-700",
  };

  const tabs = [
    { label: "Haunts", href: `/${edition}/haunts` },
    { label: "Rulings", href: `/${edition}/rulings` },
  ];

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-stone-400 transition hover:text-stone-600"
        >
          &larr; All editions
        </Link>
        <h1 className={`mt-1 text-2xl font-bold ${meta.color}`}>
          {meta.name}
        </h1>
      </div>

      <div className="mb-6 flex gap-1 border-b border-stone-200">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-stone-500 transition hover:border-stone-400 hover:text-stone-800"
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
}
