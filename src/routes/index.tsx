import { useLiveQuery } from "@tanstack/react-db";
import { createFileRoute } from "@tanstack/react-router";
import { getItemsCollection } from "#/collections/items/collection";

export const Route = createFileRoute("/")({
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
	const { queryClient } = Route.useRouteContext();
	const itemsCollection = getItemsCollection(queryClient);
	const { data: items, isLoading } = useLiveQuery((q) =>
		q.from({ item: itemsCollection }),
	);

	if (isLoading) {
		return <InventoryPending />;
	}

	return (
		<div className="flex max-w-prose flex-col gap-2">
			{items.map((item) => (
				<div key={item.id}>
					<h3>{item.name}</h3>
				</div>
			))}
		</div>
	);
}
