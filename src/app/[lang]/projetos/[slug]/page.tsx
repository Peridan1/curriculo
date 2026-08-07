import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

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
        <main className="min-h-screen flex flex-col bg-slate-950">
            <Header dict={dict} />

            {/* Esqueleto Dinâmico do Projeto */}
            <section className="grow pt-32 pb-24 px-6 max-w-240 mx-auto w-full">
                {/* Botão Dinâmico de Voltar */}
                <Link
                    href={`/${lang}/#projects`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-emerald-300 transition-colors mb-8 font-bold text-sm"
                >
                    <span className="material-symbols-outlined text-base">
                        arrow_back
                    </span>
                    {projectData.backButton}
                </Link>

                {/* Título e Período */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                    {projectData.title}
                </h1>
                <p className="text-slate-400 text-sm sm:text-base mb-6">
                    {projectData.period}
                </p>

                {/* Tags */}
                {projectData.tags && projectData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {projectData.tags.map((tag, tIndex) => (
                            <span
                                key={tIndex}
                                className="text-xs font-bold px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-lg border border-cyan-500/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Imagem de Destaque */}
                {projectData.image ? (
                    <div
                        className="w-full aspect-video bg-cover bg-center rounded-3xl border border-cyan-500/20 mb-10 overflow-hidden shadow-2xl shadow-cyan-500/10"
                        style={{
                            backgroundImage: `url('${projectData.image}')`,
                        }}
                    />
                ) : (
                    <div className="w-full aspect-video bg-slate-900 border border-cyan-500/20 rounded-3xl mb-10 flex items-center justify-center">
                        <span className="text-slate-500 text-sm">
                            {projectData.title}
                        </span>
                    </div>
                )}

                {/* Descrições e Desafios */}
                <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
                    <p>{projectData.description}</p>
                    <h3 className="text-2xl font-bold text-cyan-400 mt-8">
                        {projectData.challengesTitle}
                    </h3>
                    <p>{projectData.challenges}</p>
                </div>

                {/* Link Dinâmico para o Repositório / Código */}
                <div className="mt-12">
                    <a
                        href={projectData.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-slate-900 border-2 border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-slate-950 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/10"
                    >
                        <span className="material-symbols-outlined">code</span>
                        {lang === "pt"
                            ? "Ver Repositório no GitHub"
                            : "View GitHub Repository"}
                    </a>
                </div>
            </section>

            <Footer dict={dict} />
        </main>
    );
}
