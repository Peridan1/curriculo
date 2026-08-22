import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Daniel Satel Pereira | Peridan.dev",
        short_name: "Peridan.dev",
        description:
            "Portfólio & Currículo de Daniel Satel Pereira (Peridan) - Desenvolvedor Full Stack",
        start_url: "/pt",
        display: "standalone",
        background_color: "#020617",
        theme_color: "#06b6d4",
        icons: [
            {
                src: "/icon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
}
