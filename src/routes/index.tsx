import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: InventoryPage });

function InventoryPage() {
	return (
		<div className="flex max-w-prose flex-col gap-2">
			<p className="text-label-md text-muted-foreground">Inventory</p>
			<h2 className="text-headline-md">All Items</h2>
			<p className="text-body-md text-muted-foreground">
				Inventory table and filters will live here.
			</p>
		</div>
	);
}
