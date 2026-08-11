export default function Value({ value }: { value: number }) {
	return (
		<span className="font-semibold text-secondary tabular-nums">
			{Intl.NumberFormat("en-US").format(value)} g
		</span>
	);
}
