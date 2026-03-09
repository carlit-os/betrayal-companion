import { db } from "../../../lib/db";
import { rulings } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import RulingsList from "../../../components/RulingsList";

export default async function RulingsPage({
  params,
}: {
  params: Promise<{ edition: string }>;
}) {
  const { edition } = await params;

  const allRulings = await db
    .select()
    .from(rulings)
    .where(eq(rulings.editionId, edition));

  return <RulingsList rulings={allRulings} edition={edition} />;
}
