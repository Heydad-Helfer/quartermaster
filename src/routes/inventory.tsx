import { createFileRoute } from "@tanstack/react-router";
import { getItemsCollection } from "#/collections/items";
import InventoryTable from "#/features/inventory-table/InventoryTable";

export const Route = createFileRoute("/inventory")({
	ssr: false,
	pendingMs: 0,
	loader: ({ context }) => {
		void getItemsCollection(context.queryClient).preload();
	},
	component: InventoryTable
});

