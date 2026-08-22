import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeftIcon } from "../../../components/icons";

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
        title: `${dict.privacyPage.title} | Daniel Satel Pereira`,
        description: dict.privacyPage.subtitle,
    };
}

export default async function PrivacyPage({
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
    const p = dict.privacyPage;

    return (
        <main className="min-h-screen flex flex-col">
            <Header dict={dict} />

            <section className="grow pt-32 pb-24 px-6 max-w-220 mx-auto w-full">
                {/* Botão de Retorno */}
                <Link
                    href={`/${lang}`}
                    className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors mb-8 font-black text-sm"
                >
                    <ArrowLeftIcon className="size-4" />
                    {p.backHome}
                </Link>

                {/* Cabeçalho */}
                <div className="mb-10">
                    <span className="text-xs font-black uppercase tracking-widest text-cyan-800 dark:text-cyan-400">
                        {p.badge}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white mt-1 mb-3">
                        {p.title}
                    </h1>
                    <p className="text-slate-800 dark:text-slate-300 text-sm sm:text-base font-medium">
                        {p.subtitle}
                    </p>
                </div>

                {/* Seções de Termos e Privacidade */}
                <article className="space-y-8 bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-cyan-500/20 rounded-3xl p-8 sm:p-12 shadow-xl text-slate-900 dark:text-slate-200">
                    {/* 1. Visão Geral */}
                    <div>
                        <h2 className="text-lg font-black text-slate-950 dark:text-white mb-3">
                            {p.sections.intro.title}
                        </h2>
                        <p className="text-sm leading-relaxed whitespace-pre-line font-normal">
                            {p.sections.intro.text}
                        </p>
                    </div>

                    {/* 2. Cookies e Armazenamento Local */}
                    <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                        <h2 className="text-lg font-black text-slate-950 dark:text-white mb-3">
                            {p.sections.cookies.title}
                        </h2>
                        <p className="text-sm leading-relaxed whitespace-pre-line font-normal">
                            {p.sections.cookies.text}
                        </p>
                    </div>

                    {/* 3. Termos de Uso */}
                    <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                        <h2 className="text-lg font-black text-slate-950 dark:text-white mb-3">
                            {p.sections.terms.title}
                        </h2>
                        <p className="text-sm leading-relaxed whitespace-pre-line font-normal">
                            {p.sections.terms.text}
                        </p>
                    </div>

                    {/* 4. Dúvidas e Contato */}
                    <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                        <h2 className="text-lg font-black text-slate-950 dark:text-white mb-3">
                            {p.sections.contact.title}
                        </h2>
                        <p className="text-sm leading-relaxed whitespace-pre-line font-normal">
                            {p.sections.contact.text}
                        </p>
                    </div>
                </article>
            </section>

            <Footer dict={dict} />
        </main>
    );
}
