import type { Metadata } from "next";
import Header from "../../components/Header";
import HomeHero from "../../components/HomeHero";
import BentoGrid from "../../components/BentoGrid";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";

const dictionaries = {
    en: () =>
        import("../../dictionaries/en.json").then((module) => module.default),
    pt: () =>
        import("../../dictionaries/pt.json").then((module) => module.default),
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const lang =
        resolvedParams.lang === "pt" || resolvedParams.lang === "en"
            ? resolvedParams.lang
            : "pt";
    const dict = await dictionaries[lang]();

    return {
        title: dict.seo.title,
        description: dict.seo.description,
        keywords: dict.seo.keywords,
        openGraph: {
            title: dict.seo.title,
            description: dict.seo.description,
            type: "website",
        },
    };
}

export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const resolvedParams = await params;
    const lang =
        resolvedParams.lang === "pt" || resolvedParams.lang === "en"
            ? resolvedParams.lang
            : "pt";
    const dict = await dictionaries[lang]();

    return (
        <main className="min-h-screen flex flex-col">
            <Header dict={dict} />
            <HomeHero dict={dict} lang={lang} />
            <BentoGrid dict={dict} lang={lang} />
            <Projects dict={dict} lang={lang} />
            <Footer dict={dict} />
            <CookieBanner dict={dict} lang={lang} />
        </main>
    );
}
