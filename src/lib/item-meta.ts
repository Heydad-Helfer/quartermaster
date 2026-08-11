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
	/** Theme color token name (maps to --color-rarity-* in @theme) */
	color: string;
	/** Full Tailwind classes — must be static strings for the compiler to detect them */
	ribbonClass: string;
	iconClass: string;
	iconBoxClass: string;
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
		ribbonClass: "text-rarity-common",
		iconClass: "text-rarity-common fill-rarity-common",
		iconBoxClass:
			"text-rarity-common border-rarity-common shadow-rarity-common",
		icon: Circle,
	},
	rare: {
		label: "Rare",
		color: "rarity-rare",
		ribbonClass: "text-rarity-rare",
		iconClass: "text-rarity-rare fill-rarity-rare",
		iconBoxClass: "text-rarity-rare border-rarity-rare shadow-rarity-rare",
		icon: Gem,
	},
	epic: {
		label: "Epic",
		color: "rarity-epic",
		ribbonClass: "text-rarity-epic",
		iconClass: "text-rarity-epic fill-rarity-epic",
		iconBoxClass: "text-rarity-epic border-rarity-epic shadow-rarity-epic",
		icon: Sparkles,
	},
	legendary: {
		label: "Legendary",
		color: "rarity-legendary",
		ribbonClass: "text-rarity-legendary",
		iconClass: "text-rarity-legendary fill-rarity-legendary",
		iconBoxClass:
			"text-rarity-legendary border-rarity-legendary shadow-rarity-legendary",
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
