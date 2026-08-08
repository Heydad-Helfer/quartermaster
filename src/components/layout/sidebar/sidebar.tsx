import { Anvil } from "lucide-react";
import { getMainNavigation, getUtilityNavigation } from "@/lib/navigation";
import { NavLink } from "./nav-link";

export function Sidebar() {
	const mainNav = getMainNavigation();
	const utilityNav = getUtilityNavigation();

	return (
		<aside className="sidebar">
			<div className="sidebar__brand">
				<div className="sidebar__logo">
					<Anvil className="size-5" aria-hidden />
					<span className="sr-only">Forge Inventory</span>
				</div>
			</div>

			<nav aria-label="Primary" className="sidebar__nav">
				{mainNav.map((item) => (
					<NavLink key={item.path} item={item} />
				))}
			</nav>

			<nav aria-label="Utility" className="sidebar__nav--utility">
				{utilityNav.map((item) => (
					<NavLink key={item.path} item={item} />
				))}
			</nav>
		</aside>
	);
}
