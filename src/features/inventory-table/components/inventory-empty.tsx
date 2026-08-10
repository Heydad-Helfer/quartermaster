import { Button } from "#/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyTitle } from "#/components/ui/empty";

export default function InventoryEmpty() {
    return (
        <Empty>
            <EmptyTitle>No items in inventory</EmptyTitle>
            <EmptyDescription>
                You don't have any items in your inventory.
            </EmptyDescription>
            <EmptyContent>
                <Button variant="outline">
                    Add items
                </Button>
            </EmptyContent>
        </Empty>
    )
}