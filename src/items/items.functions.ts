import { createServerFn } from "@tanstack/react-start";
import { findAllItems } from "./items.server";

/** Fetches every inventory row from the server SQLite DB via Drizzle. */
export const getItems = createServerFn({ method: "GET" }).handler(async () => {
	return findAllItems();
});
