import { db } from "#/db";
import { items } from "#/db/schema";
import type { InventoryItem } from "#/types/item";

function mapItemRow(
	row: typeof items.$inferSelect,
): InventoryItem {
	const { durabilityCurrent, durabilityMax, ...rest } = row;

	const durability =
		durabilityCurrent !== null && durabilityMax !== null
			? { current: durabilityCurrent, max: durabilityMax }
			: null;

	return { ...rest, durability };
}

/** Server-only Drizzle read — keep out of client modules. */
export function findAllItems(): InventoryItem[] {
	return db.select().from(items).all().map(mapItemRow);
}
