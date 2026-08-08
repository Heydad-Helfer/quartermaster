import { db } from "#/db";
import { items } from "#/db/schema";

/** Server-only Drizzle read — keep out of client modules. */
export function findAllItems() {
	return db.select().from(items).all();
}
