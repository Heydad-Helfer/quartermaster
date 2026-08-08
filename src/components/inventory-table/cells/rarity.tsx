import { Badge } from "#/components/ui/badge";
import { itemRarityMeta } from "#/lib/item-meta";
import { cn } from "#/lib/utils";
import type { ItemRarity } from "#/types/item";

export default function Rarity({ rarity }: { rarity: ItemRarity }) {
    const rarityDetails = itemRarityMeta[rarity];
    return <Badge variant="outline" 
    className={cn("p-2 bg-surface-container rounded-md border border-border shadow-sm", 
        rarityDetails.color ? `text-${rarityDetails.color} bg-${rarityDetails.color}/25 border-${rarityDetails.color}` : undefined)}>
        <rarityDetails.icon className={cn("h-4 w-4", rarityDetails.color ? `text-${rarityDetails.color} fill-${rarityDetails.color}` : undefined)} />
        {rarityDetails.label}
    </Badge>
}