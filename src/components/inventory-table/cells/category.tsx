import { Badge } from "#/components/ui/badge";
import { itemCategoryMeta } from "#/lib/item-meta";
import type { ItemCategory } from "#/types/item";

export default function Category({ category }: { category: ItemCategory }) {
    const categoryDetails = itemCategoryMeta[category];

    return <Badge variant="outline" className="p-2 bg-surface-container rounded-md">
        <categoryDetails.icon className="h-4 w-4" />
        {categoryDetails.label}
    </Badge>
}