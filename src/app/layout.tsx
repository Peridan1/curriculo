import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import DynamicFavicon from "../components/DynamicFavicon";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: "Curriculo - Peridan",
    description: "Portfólio & Currículo de Daniel Satel Pereira (Peridan)",
    icons: {
        icon: [
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                <ThemeProvider>
                    <DynamicFavicon />
                    {children}
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
