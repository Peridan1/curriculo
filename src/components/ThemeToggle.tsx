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
            className="size-10 flex items-center justify-center rounded-xl bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-cyan-500 dark:hover:border-cyan-400 text-cyan-700 dark:text-cyan-400 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            title="Alternar Tema"
            aria-label="Alternar Tema"
        >
            <span className="material-symbols-outlined text-xl select-none">
                {mounted ? (isDark ? "light_mode" : "dark_mode") : "dark_mode"}
            </span>
        </button>
    );
}
