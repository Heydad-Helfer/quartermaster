import { itemRarityMeta } from "#/lib/item-meta";
import { cn } from "#/lib/utils";
import type { ItemRarity } from "#/types/item";

export default function Rarity({ rarity }: { rarity: ItemRarity }) {
	const rarityDetails = itemRarityMeta[rarity];

	return (
		<span className={cn("rarity-ribbon", rarityDetails.ribbonClass)}>
			<rarityDetails.icon className={cn("size-3.5", rarityDetails.iconClass)} />
			{rarityDetails.label}
		</span>
	);
}
