import { useItems } from "#/collections/items";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";
import InventoryEmpty from "./components/inventory-empty";
import InventoryPending from "./components/inventory-pending";
import { useInventoryTable } from "./hooks/use-inventory-table";

export default function InventoryTable() {
	const itemsQuery = useItems();
	const { table, headerGroups, rows, isEmpty } = useInventoryTable(
		itemsQuery.data ?? [],
	);

	if (itemsQuery.isLoading) {
		return <InventoryPending />;
	}

	if (isEmpty) {
		return <InventoryEmpty />;
	}

	return (
		<div className="inventory-table">
			<Table>
				<TableHeader>
					{headerGroups.map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableHead key={header.id}>
									{header.isPlaceholder ? null : (
										<table.FlexRender header={header} />
									)}
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							{row.getAllCells().map((cell) => (
								<TableCell key={cell.id}>
									<table.FlexRender cell={cell} />
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
