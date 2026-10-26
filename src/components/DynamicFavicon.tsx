"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function DynamicFavicon() {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const iconHref = resolvedTheme === "light" ? "/icon-light.svg" : "/icon-dark.svg";
        
        // Atualiza ou cria especificamente a tag de ícone SVG, preservando o favicon.ico estático
        const existingSvgIcon = document.querySelector<HTMLLinkElement>(
            "link[rel~='icon'][type='image/svg+xml']"
        );

        if (existingSvgIcon) {
            existingSvgIcon.href = iconHref;
        } else {
            const newLink = document.createElement("link");
            newLink.rel = "icon";
            newLink.type = "image/svg+xml";
            newLink.href = iconHref;
            document.head.appendChild(newLink);
        }
    }, [resolvedTheme]);

    return null;
}
