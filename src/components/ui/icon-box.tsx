import { cn } from "#/lib/utils";

export type IconBoxProps = {
	children: React.ReactNode;
	className?: string;
	/** Full Tailwind utility classes for text, border, shadow, etc. */
	toneClass?: string;
};

export default function IconBox({
	children,
	className,
	toneClass,
}: IconBoxProps) {
	return (
		<div
			className={cn(
				"flex size-9 items-center justify-center rounded-lg bg-surface-container p-2 shadow-edge",
				className,
				toneClass,
			)}
		>
			{children}
		</div>
	);
}
