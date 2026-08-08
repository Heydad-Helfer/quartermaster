import type { LucideIcon } from "lucide-react";
import { Archive, Handshake, Lock, Settings, Wrench } from "lucide-react";

export type NavItem = {
	name: string;
	path: "/" | "/workshop" | "/vault" | "/traders" | "/settings";
	icon: LucideIcon;
};

export function getMainNavigation(): NavItem[] {
	return [
		{ name: "Inventory", path: "/", icon: Archive },
		{ name: "Workshop", path: "/workshop", icon: Wrench },
		{ name: "Vault", path: "/vault", icon: Lock },
		{ name: "Traders", path: "/traders", icon: Handshake },
	];
}

export function getUtilityNavigation(): NavItem[] {
	return [{ name: "Settings", path: "/settings", icon: Settings }];
}
