import { queryCollectionOptions } from "@tanstack/query-db-collection";
import { createCollection } from "@tanstack/react-db";
import type { QueryClient } from "@tanstack/react-query";
import { getItems } from "#/items/items.functions";
import { itemCollectionSchema } from "./schema";

function createItemsCollection(queryClient: QueryClient) {
	return createCollection(
		queryCollectionOptions({
			id: "items",
			queryKey: ["items"],
			queryFn: async () => getItems(),
			queryClient,
			getKey: (item) => item.id,
			schema: itemCollectionSchema,
		}),
	);
}

export type ItemsCollection = ReturnType<typeof createItemsCollection>;

const itemsCollections = new WeakMap<QueryClient, ItemsCollection>();

/** Stable items collection scoped to a QueryClient (SSR / request-safe). */
export function getItemsCollection(queryClient: QueryClient): ItemsCollection {
	let collection = itemsCollections.get(queryClient);

	if (!collection) {
		collection = createItemsCollection(queryClient);
		itemsCollections.set(queryClient, collection);
	}

	return collection;
}
