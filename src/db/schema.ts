/**
 * Server-side Drizzle table schema (SQLite).
 *
 * Do not confuse with the TanStack DB collection schema in
 * `src/collections/items/schema.ts`.
 */
import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import type { ItemCategory, ItemModifier, ItemRarity } from "#/types/item";
import { itemCategorySchema, itemRaritySchema } from "#/types/item";

const itemCategories = itemCategorySchema.options as [
	ItemCategory,
	...ItemCategory[],
];
const itemRarities = itemRaritySchema.options as [ItemRarity, ...ItemRarity[]];

export const items = sqliteTable("items", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	category: text("category", { enum: itemCategories }).notNull(),
	rarity: text("rarity", { enum: itemRarities }).notNull(),
	weight: real("weight").notNull(),
	value: real("value").notNull(),
	durability: integer("durability").notNull(),
	modifiers: text("modifiers", { mode: "json" })
		.$type<ItemModifier[]>()
		.notNull(),
});
