import { createFileRoute } from "@tanstack/react-router";
import InventoryTable from "#/features/inventory-table/InventoryTable";

export const Route = createFileRoute("/inventory")({
	ssr: false,
	pendingMs: 0,
	component: InventoryTable,
});
