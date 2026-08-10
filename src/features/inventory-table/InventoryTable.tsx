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
	const { table, headerGroups, rows, isLoading, isEmpty } = useInventoryTable();

	if (isLoading) {
		return <InventoryPending />;
	}

	if (isEmpty) {
		return <InventoryEmpty />;
	}

	return (
		<div className="overflow-hidden rounded-md border">
			<Table>
				<TableHeader className="bg-surface-container">
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
