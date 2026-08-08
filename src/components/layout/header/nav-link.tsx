import { Link } from "@tanstack/react-router";
import type { NavItem } from "@/lib/navigation";

export function NavLink({ item }: { item: NavItem }) {
	const Icon = item.icon;

	return (
		<Link
			to={item.path}
			activeOptions={{ exact: item.path === "/" }}
			className="header-nav-link"
		>
			<Icon className="size-4" aria-hidden />
			<span>{item.name}</span>
		</Link>
	);
}
