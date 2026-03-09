import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import path from "path";
import * as schema from "../schema";
import { editionsSeed } from "./editions";
import { charactersSeed } from "./characters";
import { roomsSeed } from "./rooms";
import { itemsSeed } from "./items";
import { hauntsSeed } from "./haunts";
import { rulingsSeed } from "./rulings";

const dbPath = path.join(process.cwd(), "local.db");
const sqlite = new Database(dbPath);
sqlite.pragma("journal_mode = WAL");
const db = drizzle(sqlite, { schema });

async function seed() {
  console.log("Seeding editions...");
  for (const edition of editionsSeed) {
    await db.insert(schema.editions).values(edition).onConflictDoNothing();
  }

  console.log("Seeding characters...");
  for (const char of charactersSeed) {
    await db
      .insert(schema.characters)
      .values({ ...char, speed: char.speed, might: char.might, sanity: char.sanity, knowledge: char.knowledge })
      .onConflictDoNothing();
  }

  console.log("Seeding rooms...");
  for (const room of roomsSeed) {
    await db.insert(schema.rooms).values(room).onConflictDoNothing();
  }

  console.log("Seeding items...");
  for (const item of itemsSeed) {
    await db.insert(schema.items).values(item).onConflictDoNothing();
  }

  console.log("Seeding haunts...");
  for (const haunt of hauntsSeed) {
    await db.insert(schema.haunts).values(haunt).onConflictDoNothing();
  }

  console.log("Seeding rulings...");
  for (const ruling of rulingsSeed) {
    await db
      .insert(schema.rulings)
      .values({
        ...ruling,
        tags: ruling.tags,
        createdAt: new Date().toISOString(),
      })
      .onConflictDoNothing();
  }

  console.log("Seed complete!");
  sqlite.close();
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  sqlite.close();
  process.exit(1);
});
