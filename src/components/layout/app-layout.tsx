import { Outlet } from "@tanstack/react-router";
import { Header } from "./header";

export function AppLayout() {
	return (
		<div className="app-shell">
			<Header />
			<main className="app-shell__content">
				<Outlet />
			</main>
		</div>
	);
}
