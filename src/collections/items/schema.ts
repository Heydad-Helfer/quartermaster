import {
	inventoryItemSchema,
	type InventoryItem,
} from "#/types/item";

/**
 * TanStack DB collection schema for items.
 *
 * This is the client-side collection shape — not the Drizzle table in `src/db/schema`.
 * Shape is shared with the domain `inventoryItemSchema`; keep both in mind when columns change.
 */
export const itemCollectionSchema = inventoryItemSchema;

export type ItemCollectionItem = InventoryItem;
