import type { Metadata } from "next";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

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
            : "en";
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
            : "en";
    const dict = await dictionaries[lang]();

    return (
        <main className="min-h-screen">
            <Header dict={dict} />
            <Hero dict={dict} />
            <Skills dict={dict} />
            <Education dict={dict} />
            <Experience dict={dict} />
            <Projects dict={dict} lang={lang} />
            <Footer dict={dict} />
        </main>
    );
}
