import { Progress } from "#/components/ui/progress";
import { cn } from "#/lib/utils";
import type { ItemCategory, ItemDurability } from "#/types/item";

type DurabilityVariant =
	| "high"
	| "mid"
	| "low"
	| "broken"
	| "indestructible"
	| "single-use";

function durabilityPercent({ current, max }: ItemDurability): number {
	return Math.round((current / max) * 100);
}

function variantFromPercent(percent: number): DurabilityVariant {
	if (percent === 0) return "broken";
	if (percent >= 66) return "high";
	if (percent >= 33) return "mid";
	return "low";
}

function labelClass(variant: DurabilityVariant): string {
	switch (variant) {
		case "high":
			return "text-durability-high";
		case "mid":
			return "text-durability-mid";
		case "low":
		case "broken":
			return "text-durability-low";
		case "indestructible":
			return "text-rarity-legendary";
		default:
			return "text-muted-foreground";
	}
}

export default function Durability({
	category,
	durability,
}: {
	category: ItemCategory;
	durability: ItemDurability | null;
}) {
	if (durability === null) {
		if (category === "consumable") {
			return (
				<DurabilityBar
					fraction="1/1"
					label="Single Use"
					value={100}
					variant="single-use"
				/>
			);
		}

		return (
			<DurabilityBar
				fraction="--/--"
				label="Indestructible"
				value={100}
				variant="indestructible"
			/>
		);
	}

	const percent = durabilityPercent(durability);
	const variant = variantFromPercent(percent);

	return (
		<DurabilityBar
			fraction={`${durability.current}/${durability.max}`}
			label={`${percent}%`}
			value={percent}
			variant={variant}
		/>
	);
}

function DurabilityBar({
	fraction,
	label,
	value,
	variant,
}: {
	fraction: string;
	label: string;
	value: number;
	variant: DurabilityVariant;
}) {
	return (
		<Progress
			value={value}
			className={cn("durability", `durability--${variant}`)}
		>
			<div className="durability__header">
				<span className={cn("durability__label", labelClass(variant))}>
					{label}
				</span>
				<span className="durability__fraction">{fraction}</span>
			</div>
		</Progress>
	);
}
