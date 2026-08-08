import { Outlet } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "./sidebar";

export function AppLayout() {
	return (
		<div className="app-shell">
			<Sidebar />
			<div className="app-shell__main">
				<header className="app-shell__header">
					<h1 className="app-shell__title">Forge Inventory</h1>
					<ModeToggle />
				</header>
				<main className="app-shell__content">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
