import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import CookieBanner from "../../../../components/CookieBanner";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeftIcon,
    GitHubIcon,
    ExternalLinkIcon,
    ShieldIcon,
    CodeIcon,
} from "../../../../components/icons";

interface ProjectDetail {
    title: string;
    period: string;
    description: string;
    shortDescription?: string;
    challengesTitle: string;
    challenges: string;
    repoUrl?: string | null;
    liveUrl?: string | null;
    isInternal?: boolean;
    inDevelopment?: boolean;
    backButton: string;
    image?: string;
    tags?: string[];
    lessons?: string;
    stackDetail?: string[];
    impact?: string;
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

function getTechAnchor(tag: string): string | null {
    const t = tag.toLowerCase();
    if (t.includes("mikrotik") || t.includes("windows server") || t.includes("redes") || t.includes("hardware")) {
        return "hardware";
    }
    if (t.includes("php") || t.includes("laravel") || t.includes("slim") || t.includes("mysql") || t.includes("mvc")) {
        return "php";
    }
    if (t.includes("docker") || t.includes("linux")) {
        return "docker";
    }
    if (t.includes("react") || t.includes("next") || t.includes("typescript") || t.includes("javascript")) {
        return "frontend";
    }
    if (t.includes("python") || t.includes("pandas") || t.includes("automação") || t.includes("etl")) {
        return "python";
    }
    if (t.includes("tailwind")) {
        return "tailwind";
    }
    return null;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const { lang, slug } = resolvedParams;

    if (lang !== "pt" && lang !== "en") {
        notFound();
    }

    const dict = await dictionaries[lang]();
    const projectsMap = dict.projectsData as Record<string, ProjectDetail>;
    const projectData = projectsMap?.[slug];

    if (!projectData) {
        return {
            title: lang === "pt" ? "Projeto não encontrado | Daniel Satel Pereira" : "Project not found | Daniel Satel Pereira",
        };
    }

    return {
        title: `${projectData.title} | Daniel Satel Pereira`,
        description: projectData.shortDescription || projectData.description,
        openGraph: {
            title: `${projectData.title} | Daniel Satel Pereira`,
            description: projectData.shortDescription || projectData.description,
            type: "article",
        },
    };
}

export default async function ProjectTemplate({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const resolvedParams = await params;
    const { lang, slug } = resolvedParams;

    if (lang !== "pt" && lang !== "en") {
        notFound();
    }

    const dict = await dictionaries[lang]();
    const projectsMap = dict.projectsData as Record<string, ProjectDetail>;
    const projectData = projectsMap?.[slug];

    if (!projectData) {
        notFound();
    }

    const statusLabels = dict.projectsSection?.status || {
        live: lang === "pt" ? "No Ar" : "Live",
        internal: lang === "pt" ? "Corporativo" : "Enterprise",
        inDevelopment: lang === "pt" ? "Em Evolução" : "In Progress",
    };

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

                {/* Tags conectadas com a Jornada Tecnológica na página Sobre */}
                {projectData.tags && projectData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {projectData.tags.map((tag, tIndex) => {
                            const anchor = getTechAnchor(tag);
                            if (anchor) {
                                return (
                                    <Link
                                        key={tIndex}
                                        href={`/${lang}/sobre#tech-${anchor}`}
                                        title={lang === "pt" ? "Ver tecnologia na jornada de aprendizado" : "View technology in tech journey"}
                                        className="text-xs font-bold px-3 py-1 bg-cyan-100/90 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-300 rounded-lg border border-cyan-400/50 dark:border-cyan-500/20 hover:border-cyan-500 hover:scale-105 transition-all cursor-pointer shadow-xs"
                                    >
                                        {tag} ↗
                                    </Link>
                                );
                            }
                            return (
                                <span
                                    key={tIndex}
                                    className="text-xs font-bold px-3 py-1 bg-cyan-100/80 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-300 rounded-lg border border-cyan-300 dark:border-cyan-500/20"
                                >
                                    {tag}
                                </span>
                            );
                        })}
                    </div>
                )}

                {/* Imagem de Destaque */}
                {projectData.image ? (
                    <div
                        className="w-full aspect-video bg-cover bg-center rounded-3xl border border-slate-200 dark:border-cyan-500/20 mb-10 overflow-hidden shadow-2xl shadow-cyan-500/10 relative"
                        style={{
                            backgroundImage: `url('${projectData.image}')`,
                        }}
                    >
                        <div className="absolute top-4 right-4 z-10 flex gap-2">
                            {projectData.liveUrl && (
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-extrabold shadow-md backdrop-blur-xs">
                                    <span className="size-2 rounded-full bg-white animate-ping inline-block" />
                                    {statusLabels.live}
                                </span>
                            )}
                            {projectData.isInternal && (
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/95 text-slate-950 text-xs font-extrabold shadow-md backdrop-blur-xs">
                                    <ShieldIcon className="size-3 text-slate-950" />
                                    {statusLabels.internal}
                                </span>
                            )}
                            {projectData.inDevelopment && (
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-violet-600/90 text-white text-xs font-extrabold shadow-md backdrop-blur-xs">
                                    <CodeIcon className="size-3 text-white" />
                                    {statusLabels.inDevelopment}
                                </span>
                            )}
                        </div>
                    </div>
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

                {/* Seções Opcionais Enriquecidas: Impacto, Lições e Stack Detalhada */}
                <div className="mt-10 space-y-6">
                    {projectData.impact && (
                        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200">
                            <h4 className="font-black text-lg mb-2">
                                {lang === "pt" ? "Impacto & Resultados" : "Impact & Results"}
                            </h4>
                            <p className="text-base opacity-95 leading-relaxed font-normal">
                                {projectData.impact}
                            </p>
                        </div>
                    )}

                    {projectData.lessons && (
                        <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-950 dark:text-cyan-200">
                            <h4 className="font-black text-lg mb-2">
                                {lang === "pt" ? "Lições Aprendidas" : "Lessons Learned"}
                            </h4>
                            <p className="text-base opacity-95 leading-relaxed font-normal">
                                {projectData.lessons}
                            </p>
                        </div>
                    )}

                    {projectData.stackDetail && projectData.stackDetail.length > 0 && (
                        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-cyan-500/20">
                            <h4 className="font-black text-lg mb-3 text-slate-900 dark:text-slate-100">
                                {lang === "pt" ? "Stack & Componentes de Engenharia" : "Stack & Engineering Components"}
                            </h4>
                            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-800 dark:text-slate-300 font-medium">
                                {projectData.stackDetail.map((detail, dIdx) => (
                                    <li key={dIdx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Ações e Links */}
                <div className="mt-12 flex flex-wrap items-center gap-4">
                    {projectData.liveUrl && (
                        <a
                            href={projectData.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-linear-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/20 group hover:scale-105"
                        >
                            <ExternalLinkIcon className="size-5 group-hover:scale-110 transition-transform" />
                            {lang === "pt"
                                ? "Acessar Projeto no Ar"
                                : "Visit Live Project"}
                        </a>
                    )}

                    {projectData.repoUrl && (
                        <a
                            href={projectData.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 border-2 border-cyan-500/40 hover:border-cyan-500 text-cyan-800 dark:text-cyan-400 hover:text-white dark:hover:text-slate-950 hover:bg-linear-to-r hover:from-cyan-500 hover:to-emerald-500 px-8 py-4 rounded-xl font-bold transition-all shadow-md shadow-cyan-500/10 group"
                        >
                            <GitHubIcon className="size-5 text-slate-900 dark:text-white group-hover:scale-110 transition-transform" />
                            {lang === "pt"
                                ? "Ver Código no GitHub"
                                : "View GitHub Repository"}
                        </a>
                    )}

                    {projectData.isInternal && (
                        <div className="w-full p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 flex items-start gap-4">
                            <ShieldIcon className="size-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-base mb-1">
                                    {lang === "pt"
                                        ? "Sistema Corporativo de Uso Interno"
                                        : "Internal Corporate System"}
                                </h4>
                                <p className="text-sm opacity-90 leading-relaxed font-normal">
                                    {lang === "pt"
                                        ? "Este software opera exclusivamente na infraestrutura privada da Prefeitura Municipal de Umuarama. Código-fonte e acesso externo são restritos por diretrizes institucionais de segurança e sigilo de dados públicos."
                                        : "This software operates exclusively within the private infrastructure of the Municipality of Umuarama. Source code and external access are restricted by institutional security policies and public data confidentiality."}
                                </p>
                            </div>
                        </div>
                    )}

                    {projectData.inDevelopment && (
                        <div className="w-full p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-900 dark:text-indigo-200 flex items-start gap-4">
                            <CodeIcon className="size-6 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-base mb-1">
                                    {lang === "pt"
                                        ? "Projeto em Fase de Refatoração e Evolução Contínua"
                                        : "Project in Continuous Evolution & Refactoring"}
                                </h4>
                                <p className="text-sm opacity-90 leading-relaxed font-normal">
                                    {lang === "pt"
                                        ? "Esta aplicação está recebendo melhorias ativas de arquitetura e desacoplamento de microserviços. O repositório reflete o estado de integração em andamento."
                                        : "This application is actively undergoing architectural refinements and microservice decoupling. The repository reflects the ongoing integration state."}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer dict={dict} lang={lang} />
            <CookieBanner dict={dict} lang={lang} />
        </main>
    );
}
