"use client";

import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
    const [isExploding, setIsExploding] = useState(false);
    const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });

    const isDark = theme === "dark";


    const handleToggle = (e: React.MouseEvent) => {
        const cx = e.clientX;
        const cy = e.clientY;

        setClickCoords({ x: cx, y: cy });
        setIsExploding(true);

        setTimeout(() => {
            setTheme(isDark ? "light" : "dark");
        }, 300);

        setTimeout(() => setIsExploding(false), 800);
    };

    return (
        <>
            {/* O Clarão da Explosão */}
            {isExploding && (
                <div
                    className="fixed z-9999 rounded-full pointer-events-none"
                    style={{
                        left: clickCoords.x,
                        top: clickCoords.y,
                        width: "2vw",
                        height: "2vw",
                        backgroundColor: isDark ? "#f3f4f6" : "#1a1a1b",
                        animation:
                            "explosion 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                    }}
                />
            )}

            {/* O Botão (Sol / Lua) */}
            <button
                onClick={handleToggle}
                className="relative z-10000 size-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-pop-yellow text-pop-yellow transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                title="Trocar Tema"
            >
                <span className="material-symbols-outlined text-xl">
                    {mounted ? (isDark ? "light_mode" : "dark_mode") : "dark_mode"}
                </span>
            </button>
        </>
    );
}

