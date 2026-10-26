import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CookieBanner from "../../../components/CookieBanner";
import AboutView from "../../../components/AboutView";

const dictionaries = {
    en: () => import("../../../dictionaries/en.json").then((module) => module.default),
    pt: () => import("../../../dictionaries/pt.json").then((module) => module.default),
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const { lang } = resolvedParams;

    if (lang !== "pt" && lang !== "en") {
        notFound();
    }

    const dict = await dictionaries[lang]();

    return {
        title: `${dict.aboutPage.title} | Daniel Satel Pereira`,
        description: dict.aboutPage.subtitle,
        openGraph: {
            title: `${dict.aboutPage.title} | Daniel Satel Pereira`,
            description: dict.aboutPage.subtitle,
            type: "website",
        },
    };
}

export default async function SobrePage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const resolvedParams = await params;
    const { lang } = resolvedParams;

    if (lang !== "pt" && lang !== "en") {
        notFound();
    }

    const dict = await dictionaries[lang]();

    return (
        <main className="min-h-screen flex flex-col">
            <Header dict={dict} />
            <AboutView lang={lang} dict={dict} />
            <Footer dict={dict} lang={lang} />
            <CookieBanner dict={dict} lang={lang} />
        </main>
    );
}
