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

export const itemDurabilitySchema = z
	.object({
		current: z.number().int().nonnegative(),
		max: z.number().int().positive(),
	})
	.refine((durability) => durability.current <= durability.max, {
		message: "current durability cannot exceed max",
	});
export type ItemDurability = z.infer<typeof itemDurabilitySchema>;

/** Shared domain shape for an inventory item (used by app code). */
export const inventoryItemSchema = z.object({
	id: z.string().min(1),
	name: z.string().min(1),
	category: itemCategorySchema,
	rarity: itemRaritySchema,
	weight: z.number().nonnegative(),
	value: z.number().nonnegative(),
	/** `null` for indestructible items and categories without durability (e.g. consumables). */
	durability: itemDurabilitySchema.nullable(),
	modifiers: z.array(itemModifierSchema),
});
export type InventoryItem = z.infer<typeof inventoryItemSchema>;
