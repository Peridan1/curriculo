import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import CookieBanner from "../../../../components/CookieBanner";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, GitHubIcon } from "../../../../components/icons";

interface ProjectDetail {
    title: string;
    period: string;
    description: string;
    challengesTitle: string;
    challenges: string;
    repoUrl: string;
    backButton: string;
    image?: string;
    tags?: string[];
}

const dictionaries = {
    en: () =>
        import("../../../../dictionaries/en.json").then(
            (module) => module.default,
        ),
    pt: () =>
        import("../../../../dictionaries/pt.json").then(
            (module) => module.default,
        ),
};

export default async function ProjectTemplate({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const resolvedParams = await params;
    const lang =
        resolvedParams.lang === "pt" || resolvedParams.lang === "en"
            ? resolvedParams.lang
            : "en";
    const slug = resolvedParams.slug;
    const dict = await dictionaries[lang]();

    const projectsMap = dict.projectsData as Record<string, ProjectDetail>;
    const projectData = projectsMap?.[slug];

    if (!projectData) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col">
            <Header dict={dict} />

            {/* Esqueleto Dinâmico do Projeto */}
            <section className="grow pt-32 pb-24 px-6 max-w-240 mx-auto w-full">
                {/* Botão Dinâmico de Voltar */}
                <Link
                    href={`/${lang}/#projects`}
                    className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors mb-8 font-black text-sm"
                >
                    <ArrowLeftIcon className="size-4" />
                    {projectData.backButton}
                </Link>

                {/* Título e Período */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 bg-linear-to-r from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                    {projectData.title}
                </h1>
                <p className="text-slate-700 dark:text-slate-400 text-sm sm:text-base mb-6 font-medium">
                    {projectData.period}
                </p>

                {/* Tags */}
                {projectData.tags && projectData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {projectData.tags.map((tag, tIndex) => (
                            <span
                                key={tIndex}
                                className="text-xs font-bold px-3 py-1 bg-cyan-100/80 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-300 rounded-lg border border-cyan-300 dark:border-cyan-500/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Imagem de Destaque */}
                {projectData.image ? (
                    <div
                        className="w-full aspect-video bg-cover bg-center rounded-3xl border border-slate-200 dark:border-cyan-500/20 mb-10 overflow-hidden shadow-2xl shadow-cyan-500/10"
                        style={{
                            backgroundImage: `url('${projectData.image}')`,
                        }}
                    />
                ) : (
                    <div className="w-full aspect-video bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/20 rounded-3xl mb-10 flex items-center justify-center">
                        <span className="text-slate-500 text-sm font-medium">
                            {projectData.title}
                        </span>
                    </div>
                )}

                {/* Descrições e Desafios com Contraste Alto */}
                <div className="space-y-6 text-slate-900 dark:text-slate-200 leading-relaxed text-base sm:text-lg font-medium">
                    <p>{projectData.description}</p>
                    <h3 className="text-2xl font-black text-cyan-800 dark:text-cyan-400 mt-8">
                        {projectData.challengesTitle}
                    </h3>
                    <p>{projectData.challenges}</p>
                </div>

                {/* Link para o Repositório / Código */}
                <div className="mt-12">
                    <a
                        href={projectData.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 border-2 border-cyan-500/40 hover:border-cyan-500 text-cyan-800 dark:text-cyan-400 hover:text-white dark:hover:text-slate-950 hover:bg-linear-to-r hover:from-cyan-500 hover:to-emerald-500 px-8 py-4 rounded-xl font-bold transition-all shadow-md shadow-cyan-500/10 group"
                    >
                        <GitHubIcon className="size-5 text-slate-900 dark:text-white group-hover:scale-110 transition-transform" />
                        {lang === "pt"
                            ? "Ver Repositório no GitHub"
                            : "View GitHub Repository"}
                    </a>
                </div>
            </section>

            <Footer dict={dict} />
            <CookieBanner dict={dict} lang={lang} />
        </main>
    );
}
