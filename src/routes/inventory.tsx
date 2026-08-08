import { createFileRoute } from "@tanstack/react-router";
import { getItemsCollection } from "#/collections/items";
import InventoryTable from "#/components/inventory-table/InventoryTable";

export const Route = createFileRoute("/inventory")({
	ssr: false,
	pendingMs: 0,
	pendingComponent: InventoryPending,
	loader: async ({ context }) => {
		await getItemsCollection(context.queryClient).preload();
	},
	component: InventoryPage,
});

function InventoryPending() {
	return <p className="text-muted-foreground">Loading inventory…</p>;
}

function InventoryPage() {
	return <InventoryTable />;
}
