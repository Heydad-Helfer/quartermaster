import { itemCategoryMeta } from "#/lib/item-meta";
import type { ItemCategory } from "#/types/item";

export default function Category({ category }: { category: ItemCategory }) {
	const categoryDetails = itemCategoryMeta[category];

	return (
		<span className="inline-flex items-center gap-2 text-muted-foreground">
			<categoryDetails.icon className="size-4" aria-hidden />
			{categoryDetails.label}
		</span>
	);
}
