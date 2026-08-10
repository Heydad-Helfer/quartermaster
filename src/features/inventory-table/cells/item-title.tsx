import IconBox from "#/components/ui/icon-box";
import { itemCategoryMeta, itemRarityMeta } from "#/lib/item-meta";
import type { InventoryItem } from "#/types/item";

export default function ItemTitle({ item }: { item: InventoryItem }) {
    const itemRarityDetails = itemRarityMeta[item.rarity];
    const itemCategoryDetails = itemCategoryMeta[item.category];

    return <div className="flex items-center gap-2">
        <IconBox className="bg-surface-container" toneClass={itemRarityDetails.iconBoxClass}>
            <itemCategoryDetails.icon className="h-4 w-4" />
        </IconBox>
        <div className="flex flex-col">
            <span className="text-lg font-medium">{item.name}</span>
            <sub className="text-xs text-muted-foreground">{item.id}</sub>
        </div>
    </div>
}