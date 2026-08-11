import {
	type ErrorComponentProps,
	Link,
	useRouter,
} from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { StatusPage } from "@/components/layout/status-page";
import { Button } from "@/components/ui/button";

export function ErrorPage({ error }: ErrorComponentProps) {
	const router = useRouter();

	return (
		<StatusPage
			label="Error"
			title="Something went wrong"
			description={
				error.message || "An unexpected error occurred while loading this page."
			}
			icon={<AlertTriangle className="size-6 text-destructive" />}
			actions={
				<>
					<Button onClick={() => router.invalidate()}>Try again</Button>
					<Button
						variant="outline"
						nativeButton={false}
						render={<Link to="/" />}
					>
						Back to inventory
					</Button>
				</>
			}
		/>
	);
}
