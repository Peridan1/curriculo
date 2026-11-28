import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-lexend",
    display: "optional",
});
import { ThemeProvider } from "../components/ThemeProvider";
import DynamicFavicon from "../components/DynamicFavicon";
import TechAmbientBackground from "../components/TechAmbientBackground";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSiteUrl } from "../lib/site-url";

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#020617" },
    ],
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Daniel Satel Pereira (Peridan) | Desenvolvedor Full Stack",
        template: "%s | Daniel Satel Pereira (Peridan)",
    },
    description:
        "Portfólio e currículo interativo de Daniel Satel Pereira (Peridan). Desenvolvedor Full Stack Júnior especialista em React 19, Next.js 16, TypeScript, PHP/Laravel e Docker.",
    keywords: [
        "Daniel Satel Pereira",
        "Peridan",
        "Peridan.dev",
        "Desenvolvedor Full Stack",
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "PHP",
        "Laravel",
        "Docker",
        "Umuarama",
        "UniALFA",
    ],
    authors: [
        {
            name: "Daniel Satel Pereira",
            url: "https://github.com/Peridan1",
        },
    ],
    creator: "Daniel Satel Pereira",
    publisher: "Daniel Satel Pereira",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        alternateLocale: "en_US",
        url: siteUrl,
        siteName: "Daniel Satel Pereira | Peridan.dev",
        title: "Daniel Satel Pereira (Peridan) | Desenvolvedor Full Stack",
        description:
            "Portfólio e currículo de Daniel Satel Pereira. Soluções de alta performance com React, Next.js, TypeScript e Laravel.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Daniel Satel Pereira (Peridan) | Desenvolvedor Full Stack",
        description:
            "Portfólio e currículo de Daniel Satel Pereira. Soluções de alta performance com React, Next.js, TypeScript e Laravel.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={lexend.variable} suppressHydrationWarning>
            <body className={`${lexend.className} antialiased`}>
                <ThemeProvider>
                    <DynamicFavicon />
                    <TechAmbientBackground />
                    {children}
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
