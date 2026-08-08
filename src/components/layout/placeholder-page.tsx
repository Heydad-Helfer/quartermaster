export function PlaceholderPage({ title }: { title: string }) {
	return (
		<div className="flex max-w-prose flex-col gap-2">
			<h2 className="text-headline-md">{title}</h2>
			<p className="text-body-md text-muted-foreground">
				This section is not wired up yet.
			</p>
		</div>
	);
}
