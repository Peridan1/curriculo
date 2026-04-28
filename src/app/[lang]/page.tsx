import type { Metadata } from "next"; // 1. Nova importação obrigatória para o SEO
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

// O carregador de dicionários continua igual
const dictionaries = {
    en: () =>
        import("../../dictionaries/en.json").then((module) => module.default),
    pt: () =>
        import("../../dictionaries/pt.json").then((module) => module.default),
};

// 2. FUNÇÃO MÁGICA DE SEO: O Next.js lê isso antes de carregar a página
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
        // O OpenGraph é o que faz o link ficar bonito com título e descrição
        // quando você envia pelo WhatsApp, LinkedIn ou Discord!
        openGraph: {
            title: dict.seo.title,
            description: dict.seo.description,
            type: "website",
        },
    };
}

// 3. Sua página Home continua exatamente igual!
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
        <main>
            <Header dict={dict} />
            <Hero dict={dict} />
            <Skills dict={dict} />
            <Experience dict={dict} />
            <Projects dict={dict} lang={lang} />
            <Footer dict={dict} />
        </main>
    );
}
