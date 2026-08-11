export default function Weight({ weight }: { weight: number }) {
	return (
		<span className="text-muted-foreground tabular-nums">
			{Intl.NumberFormat("en-US", {
				style: "unit",
				unit: "kilogram",
			}).format(weight)}
		</span>
	);
}
