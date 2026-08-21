"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function DynamicFavicon() {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const iconHref = resolvedTheme === "light" ? "/icon-light.svg" : "/icon-dark.svg";
        
        // Atualiza ou cria tag de link rel='icon' dinamicamente
        const existingLinks = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
        if (existingLinks.length > 0) {
            existingLinks.forEach((link) => {
                link.type = "image/svg+xml";
                link.href = iconHref;
            });
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
