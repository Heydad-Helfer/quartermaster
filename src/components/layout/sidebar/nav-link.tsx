import { Link } from "@tanstack/react-router";
import type { NavItem } from "@/lib/navigation";

export function NavLink({ item }: { item: NavItem }) {
	const Icon = item.icon;

	return (
		<Link
			to={item.path}
			activeOptions={{ exact: item.path === "/" }}
			className="sidebar-nav-link"
		>
			<Icon className="size-5" aria-hidden />
			<span className="sidebar-nav-link__label">{item.name}</span>
		</Link>
	);
}
