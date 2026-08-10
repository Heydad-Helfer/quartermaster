import { useTable } from "@tanstack/react-table";
import { useTanStackTableDevtools } from "@tanstack/react-table-devtools";
import { useItems } from "#/collections/items";
import { columns, features } from "../columns";

export function useInventoryTable() {
	const { data: items = [], isLoading } = useItems();

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
        isLoading,
        isEmpty: table.getRowModel().rows.length === 0,
    };
}