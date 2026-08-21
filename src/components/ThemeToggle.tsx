"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

    const isDark = theme === "dark";

    const handleToggle = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button
            onClick={handleToggle}
            className="size-10 flex items-center justify-center rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/30 hover:border-cyan-600 dark:hover:border-cyan-400 text-slate-950 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            title="Alternar Tema"
            aria-label="Alternar Tema"
        >
            <span className="material-symbols-outlined text-xl select-none font-bold">
                {mounted ? (isDark ? "light_mode" : "dark_mode") : "dark_mode"}
            </span>
        </button>
    );
}
