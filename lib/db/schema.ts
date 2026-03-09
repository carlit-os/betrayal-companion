import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const editions = sqliteTable("editions", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  year: integer("year").notNull(),
  hauntCount: integer("haunt_count").notNull(),
  hasCampaign: integer("has_campaign", { mode: "boolean" }).notNull().default(false),
  description: text("description"),
});

export const characters = sqliteTable("characters", {
  id: text("id").primaryKey(),
  editionId: text("edition_id")
    .notNull()
    .references(() => editions.id),
  name: text("name").notNull(),
  color: text("color").notNull(),
  // Stat tracks stored as JSON arrays, e.g. [0,2,3,3,4,5,6,6]
  speed: text("speed", { mode: "json" }).notNull().$type<number[]>(),
  might: text("might", { mode: "json" }).notNull().$type<number[]>(),
  sanity: text("sanity", { mode: "json" }).notNull().$type<number[]>(),
  knowledge: text("knowledge", { mode: "json" }).notNull().$type<number[]>(),
  speedStart: integer("speed_start").notNull(),
  mightStart: integer("might_start").notNull(),
  sanityStart: integer("sanity_start").notNull(),
  knowledgeStart: integer("knowledge_start").notNull(),
  age: integer("age"),
  description: text("description"),
});

export const rooms = sqliteTable("rooms", {
  id: text("id").primaryKey(),
  editionId: text("edition_id")
    .notNull()
    .references(() => editions.id),
  name: text("name").notNull(),
  floor: text("floor").notNull(), // "basement" | "ground" | "upper"
  description: text("description"),
  effect: text("effect"),
  hasEvent: integer("has_event", { mode: "boolean" }).default(false),
  hasItem: integer("has_item", { mode: "boolean" }).default(false),
  hasOmen: integer("has_omen", { mode: "boolean" }).default(false),
});

export const items = sqliteTable("items", {
  id: text("id").primaryKey(),
  editionId: text("edition_id")
    .notNull()
    .references(() => editions.id),
  name: text("name").notNull(),
  type: text("type").notNull(), // "item" | "omen"
  description: text("description"),
  effect: text("effect"),
});

export const haunts = sqliteTable("haunts", {
  id: text("id").primaryKey(),
  editionId: text("edition_id")
    .notNull()
    .references(() => editions.id),
  number: integer("number").notNull(),
  name: text("name").notNull(),
  omenTrigger: text("omen_trigger"),
  roomTrigger: text("room_trigger"),
  traitorDescription: text("traitor_description"),
  heroDescription: text("hero_description"),
  winConditionTraitor: text("win_condition_traitor"),
  winConditionHero: text("win_condition_hero"),
  specialRules: text("special_rules"),
});

export const rulings = sqliteTable("rulings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  hauntId: text("haunt_id").references(() => haunts.id),
  editionId: text("edition_id")
    .notNull()
    .references(() => editions.id),
  roomId: text("room_id").references(() => rooms.id),
  itemId: text("item_id").references(() => items.id),
  title: text("title").notNull(),
  situation: text("situation").notNull(),
  ruling: text("ruling").notNull(),
  source: text("source").notNull().default("community"), // "official_faq" | "designer" | "community"
  sourceUrl: text("source_url"),
  upvotes: integer("upvotes").notNull().default(0),
  downvotes: integer("downvotes").notNull().default(0),
  tags: text("tags", { mode: "json" }).$type<string[]>(),
  createdAt: text("created_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});
