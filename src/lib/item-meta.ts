import type { LucideIcon } from "lucide-react";
import {
	Circle,
	Crown,
	FlaskConical,
	Gem,
	Shield,
	Sparkles,
	Sword,
} from "lucide-react";
import type { ItemCategory, ItemRarity } from "#/types/item";

type ItemRarityMeta = {
	label: string;
	/** CSS custom property reference for borders, glow, and title color */
	color: string;
	icon: LucideIcon;
};

type ItemCategoryMeta = {
	label: string;
	icon: LucideIcon;
};

export const itemRarityMeta = {
	common: {
		label: "Common",
		color: "rarity-common",
		icon: Circle,
	},
	rare: {
		label: "Rare",
		color: "rarity-rare",
		icon: Gem,
	},
	epic: {
		label: "Epic",
		color: "rarity-epic",
		icon: Sparkles,
	},
	legendary: {
		label: "Legendary",
		color: "rarity-legendary",
		icon: Crown,
	},
} as const satisfies Record<ItemRarity, ItemRarityMeta>;

export const itemCategoryMeta = {
	weapon: {
		label: "Weapon",
		icon: Sword,
	},
	armor: {
		label: "Armor",
		icon: Shield,
	},
	consumable: {
		label: "Consumable",
		icon: FlaskConical,
	},
} as const satisfies Record<ItemCategory, ItemCategoryMeta>;
