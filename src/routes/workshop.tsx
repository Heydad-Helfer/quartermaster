import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const Route = createFileRoute("/workshop")({
	component: WorkshopPage,
});

function WorkshopPage() {
	return <PlaceholderPage title="Workshop" />;
}
