import { useTable } from "@tanstack/react-table";
import { useTanStackTableDevtools } from "@tanstack/react-table-devtools";
import type { InventoryItem } from "#/types/item";
import { columns, features } from "../columns";

export function useInventoryTable(items: InventoryItem[]) {
	

	const table = useTable({
		key: "inventory-table",
		// debugTable: true,
		features,
		columns,
		data: items,
	});

    useTanStackTableDevtools(table);

	return {
        table,
        headerGroups: table.getHeaderGroups(),
        rows: table.getRowModel().rows,
        isEmpty: table.getRowModel().rows.length === 0,
    };
}