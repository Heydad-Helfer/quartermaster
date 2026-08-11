import { Button } from "#/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyTitle,
} from "#/components/ui/empty";

export default function InventoryEmpty() {
	return (
		<div className="inventory-table p-8">
			<Empty>
				<EmptyTitle>The ledger lies empty</EmptyTitle>
				<EmptyDescription>
					No arms, relics, or provisions are recorded in your keeping.
				</EmptyDescription>
				<EmptyContent>
					<Button>Add Item</Button>
				</EmptyContent>
			</Empty>
		</div>
	);
}
