import { Badge } from "#/components/ui/badge";
import { itemRarityMeta } from "#/lib/item-meta";
import { cn } from "#/lib/utils";
import type { ItemRarity } from "#/types/item";

export default function Rarity({ rarity }: { rarity: ItemRarity }) {
	const rarityDetails = itemRarityMeta[rarity];

	return (
		<Badge
			className={cn(
				"rounded-md border border-border bg-surface-container p-2 shadow-sm",
				rarityDetails.badgeClass,
			)}
		>
			<rarityDetails.icon
				className={cn("h-4 w-4", rarityDetails.iconClass)}
			/>
			{rarityDetails.label}
		</Badge>
	);
}
