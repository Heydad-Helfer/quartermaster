import { z } from "zod";

export const itemRaritySchema = z.enum([
	"common",
	"rare",
	"epic",
	"legendary",
]);
export type ItemRarity = z.infer<typeof itemRaritySchema>;

export const itemCategorySchema = z.enum(["weapon", "armor", "consumable"]);
export type ItemCategory = z.infer<typeof itemCategorySchema>;

export const itemModifierSchema = z.object({
	id: z.string().min(1),
	stat: z.string().min(1),
	value: z.number(),
});
export type ItemModifier = z.infer<typeof itemModifierSchema>;

export const inventoryItemSchema = z.object({
	id: z.string().min(1),
	name: z.string().min(1),
	category: itemCategorySchema,
	rarity: itemRaritySchema,
	weight: z.number().nonnegative(),
	value: z.number().nonnegative(),
	durability: z.number().min(0).max(100),
	modifiers: z.array(itemModifierSchema),
});
export type InventoryItem = z.infer<typeof inventoryItemSchema>;
