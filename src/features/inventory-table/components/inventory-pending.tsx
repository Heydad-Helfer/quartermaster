import { Loader2 } from "lucide-react";

export default function InventoryPending() {
	return (
		<div className="flex items-center justify-center p-4">
			<Loader2 className="h-4 w-4 animate-spin" />
		</div>
	);
}