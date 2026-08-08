import type { LucideIcon } from "lucide-react";
import { Archive, Handshake, Lock, Settings, Wrench } from "lucide-react";
import type { FileRouteTypes } from "#/routeTree.gen";

type AppPath = FileRouteTypes["to"];

export type NavPath = Exclude<AppPath, "/">;

export type NavItem = {
	name: string;
	path: AppPath;
	icon: LucideIcon;
};

export function getMainNavigation(): NavItem[] {
	return [
		{ name: "Inventory", path: "/inventory", icon: Archive },
		{ name: "Workshop", path: "/workshop", icon: Wrench },
		{ name: "Vault", path: "/vault", icon: Lock },
		{ name: "Traders", path: "/traders", icon: Handshake },
	];
}

export function getUtilityNavigation(): NavItem[] {
	return [{ name: "Settings", path: "/settings", icon: Settings }];
}
