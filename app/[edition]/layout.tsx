import Link from "next/link";

const editionMeta: Record<string, string> = {
  original: "Original (2004)",
  "widows-walk": "Widow's Walk (2016)",
  legacy: "Betrayal Legacy (2018)",
  "3rd-edition": "3rd Edition (2022)",
};

export default async function EditionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ edition: string }>;
}) {
  const { edition } = await params;
  const name = editionMeta[edition] || edition;

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
        <h1 className="mt-1.5 text-xl font-semibold text-stone-200">
          {name}
        </h1>
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
