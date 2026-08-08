import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "system";

export const THEME_STORAGE_KEY = "forge-ui-theme";

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
	undefined,
);

function applyThemeClass(theme: Theme) {
	const root = window.document.documentElement;
	root.classList.remove("light", "dark");

	if (theme === "system") {
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
			.matches
			? "dark"
			: "light";
		root.classList.add(systemTheme);
		return;
	}

	root.classList.add(theme);
}

export function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = THEME_STORAGE_KEY,
	...props
}: ThemeProviderProps) {
	const [theme, setThemeState] = useState<Theme | undefined>(undefined);

	useEffect(() => {
		const stored = localStorage.getItem(storageKey) as Theme | null;
		if (stored === "dark" || stored === "light" || stored === "system") {
			setThemeState(stored);
			return;
		}
		setThemeState(defaultTheme);
	}, [defaultTheme, storageKey]);

	useEffect(() => {
		if (!theme) return;

		applyThemeClass(theme);

		if (theme !== "system") return;

		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeClass("system");
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, [theme]);

	const value: ThemeProviderState = {
		theme: theme ?? defaultTheme,
		setTheme: (next: Theme) => {
			localStorage.setItem(storageKey, next);
			setThemeState(next);
		},
	};

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeProviderContext);

	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
}

/** Inline before paint to avoid a flash of the wrong theme (SSR / first load). */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var d="system";var t=localStorage.getItem(k)||d;var r=t==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):t;var e=document.documentElement;e.classList.remove("light","dark");e.classList.add(r);}catch(n){document.documentElement.classList.add(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}})()`;
