import { db } from "../../../lib/db";
import { haunts } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import HauntsList from "../../../components/HauntsList";

export default async function HauntsPage({
  params,
}: {
  params: Promise<{ edition: string }>;
}) {
  const { edition } = await params;

  const allHaunts = await db
    .select()
    .from(haunts)
    .where(eq(haunts.editionId, edition))
    .orderBy(haunts.number);

  return <HauntsList haunts={allHaunts} edition={edition} />;
}
