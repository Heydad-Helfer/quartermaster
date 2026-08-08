import { reset, seed } from "drizzle-seed";
import type { ItemModifier } from "#/types/item";
import { itemCategorySchema, itemRaritySchema } from "#/types/item";
import { db } from "./index";
import * as schema from "./schema";

/** drizzle-seed typings expect an unbound SQLite client. */
type SeedClient = Parameters<typeof seed>[0];
const seedDb = db as unknown as SeedClient;

const itemNames = [
	"Iron Longsword",
	"Oak Shield",
	"Health Potion",
	"Shadow Cloak",
	"Storm Bow",
	"Plate Cuirass",
	"Mana Elixir",
	"Ember Dagger",
	"Traveler's Boots",
	"Antidote Vial",
	"Runic Greataxe",
	"Leather Bracers",
	"Stamina Tonic",
	"Crystal Spear",
	"Warden's Helm",
] as const;

const modifierSets = [
	[],
	[{ id: "mod-str", stat: "strength", value: 2 }],
	[{ id: "mod-dex", stat: "dexterity", value: 1 }],
	[
		{ id: "mod-vit", stat: "vitality", value: 3 },
		{ id: "mod-arm", stat: "armor", value: 5 },
	],
	[{ id: "mod-int", stat: "intelligence", value: 4 }],
] as const satisfies readonly ItemModifier[][];

async function main() {
	await reset(seedDb, schema);

	await seed(seedDb, schema, { count: 15, seed: 42 }).refine((f) => ({
		items: {
			columns: {
				id: f.uuid(),
				name: f.valuesFromArray({ values: [...itemNames] }),
				category: f.valuesFromArray({
					values: [...itemCategorySchema.options],
				}),
				rarity: f.valuesFromArray({
					values: [...itemRaritySchema.options],
				}),
				weight: f.number({ minValue: 0.1, maxValue: 25, precision: 10 }),
				value: f.number({ minValue: 1, maxValue: 5000, precision: 1 }),
				durability: f.int({ minValue: 0, maxValue: 100 }),
				modifiers: f.weightedRandom(
					modifierSets.map((modifiers) => ({
						weight: 1 / modifierSets.length,
						value: f.default({ defaultValue: modifiers }),
					})),
				),
			},
		},
	}));

	console.log("Seeded 15 inventory items.");
}

main()
	.catch((error) => {
		console.error(error);
		process.exitCode = 1;
	})
	.finally(() => {
		process.exit();
	});
