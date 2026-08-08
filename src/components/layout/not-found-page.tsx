import { Link } from "@tanstack/react-router";
import { FileQuestion } from "lucide-react";
import { StatusPage } from "@/components/layout/status-page";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
	return (
		<StatusPage
			label="404"
			title="Page not found"
			description="The page you're looking for doesn't exist or has been moved."
			icon={<FileQuestion className="size-6 text-muted-foreground" />}
			actions={
				<Button nativeButton={false} render={<Link to="/" />}>
					Back to inventory
				</Button>
			}
		/>
	);
}
