import type { Metadata } from "next";
import Header from "../../../components/Header";
import CurriculumView from "../../../components/CurriculumView";
import Footer from "../../../components/Footer";
import CookieBanner from "../../../components/CookieBanner";

const dictionaries = {
    en: () =>
        import("../../../dictionaries/en.json").then((module) => module.default),
    pt: () =>
        import("../../../dictionaries/pt.json").then((module) => module.default),
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
        title: `${dict.curriculumPage.title} | Daniel Satel Pereira (Peridan)`,
        description: dict.curriculumPage.subtitle,
        openGraph: {
            title: `${dict.curriculumPage.title} | Daniel Satel Pereira`,
            description: dict.curriculumPage.subtitle,
            type: "profile",
        },
    };
}

export default async function CurriculumPage({
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
            <CurriculumView dict={dict} lang={lang} />
            <Footer dict={dict} />
            <CookieBanner dict={dict} lang={lang} />
        </main>
    );
}
