import type { ReactNode } from "react";

type StatusPageProps = {
	label: string;
	title: string;
	description: string;
	icon: ReactNode;
	actions: ReactNode;
};

export function StatusPage({
	label,
	title,
	description,
	icon,
	actions,
}: StatusPageProps) {
	return (
		<div className="status-page">
			<div className="status-page__icon" aria-hidden>
				{icon}
			</div>
			<div className="status-page__content">
				<p className="text-label-md text-muted-foreground">{label}</p>
				<h2 className="text-headline-md">{title}</h2>
				<p className="text-body-md text-muted-foreground">{description}</p>
			</div>
			<div className="status-page__actions">{actions}</div>
		</div>
	);
}
