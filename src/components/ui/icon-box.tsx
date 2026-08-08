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
				"flex items-center justify-center rounded-md border-b border-border p-2 shadow-sm",
				className,
				toneClass,
			)}
		>
			{children}
		</div>
	);
}