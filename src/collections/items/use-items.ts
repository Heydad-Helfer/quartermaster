import { useLiveQuery } from "@tanstack/react-db";
import { useQueryClient } from "@tanstack/react-query";
import { getItemsCollection } from "./collection";

/** Subscribe to the items collection — reactive rows for Table, lists, etc. */
export function useItems() {
	const queryClient = useQueryClient();
	const collection = getItemsCollection(queryClient);

	return useLiveQuery(collection);
}
