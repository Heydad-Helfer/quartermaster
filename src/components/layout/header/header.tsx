import { Link } from "@tanstack/react-router";
import { Anvil } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { getMainNavigation, getUtilityNavigation } from "@/lib/navigation";
import { NavLink } from "./nav-link";

export function Header() {
	const mainNav = getMainNavigation();
	const utilityNav = getUtilityNavigation();
	const settings = utilityNav[0];

	return (
		<header className="app-shell__header">
			<div className="app-shell__header-inner">
				<Link to="/" className="app-shell__brand">
					<div className="app-shell__logo">
						<Anvil className="size-5" aria-hidden />
					</div>
					<span className="app-shell__title">Forge Inventory</span>
				</Link>

				<nav aria-label="Primary" className="app-shell__nav">
					{mainNav.map((item) => (
						<NavLink key={item.path} item={item} />
					))}
				</nav>

				<div className="app-shell__utilities">
					{settings ? (
						<Button
							variant="outline"
							size="icon"
							nativeButton={false}
							render={
								<Link
									to={settings.path}
									activeOptions={{ exact: true }}
									aria-label={settings.name}
								/>
							}
						>
							<settings.icon className="size-4" aria-hidden />
						</Button>
					) : null}
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
