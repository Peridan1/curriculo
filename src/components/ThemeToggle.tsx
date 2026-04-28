"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [isExploding, setIsExploding] = useState(false);
    const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
    const [radius, setRadius] = useState(0);

    const isDark = theme === "dark";

    const handleToggle = (e: React.MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        // Calcula a distância até o canto mais distante para garantir cobertura total
        const fullRadius = Math.sqrt(
            Math.max(x, window.innerWidth - x) ** 2 +
                Math.max(y, window.innerHeight - y) ** 2,
        );

        setClickCoords({ x, y });
        setRadius(fullRadius);
        setIsExploding(true);

        setTimeout(() => {
            setTheme(isDark ? "light" : "dark");
        }, 400);

        setTimeout(() => setIsExploding(false), 1000);
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
                        backgroundColor: isDark ? "#f3f4f6" : "#1a1a1b", // Cor do novo tema
                        animation:
                            "explosion 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                    }}
                />
            )}

            {/* O Botão (Sol / Lua) */}
            <button
                onClick={handleToggle}
                className="relative z-10000 size-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-pop-yellow text-pop-yellow transition-all hover:scale-110"
                title="Trocar Tema"
            >
                <span className="material-symbols-outlined text-xl">
                    {isDark ? "light_mode" : "dark_mode"}
                </span>
            </button>
        </>
    );
}
