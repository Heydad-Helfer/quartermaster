import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const Route = createFileRoute("/vault")({
	component: VaultPage,
});

function VaultPage() {
	return <PlaceholderPage title="Vault" />;
}
