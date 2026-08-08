import { cn } from "#/lib/utils";

export type IconBoxProps = {
    children: React.ReactNode;
    className?: string;
    color?: string;
}

export default function IconBox({ children, className, color }: IconBoxProps) {
    return <div className={cn(
        "flex items-center justify-center rounded-md border-b border-border p-2 shadow-sm", 
        className, 
        color ? `text-${color} border-${color} shadow-${color}` : undefined
        )}>
			{children}
		</div>
	;
}