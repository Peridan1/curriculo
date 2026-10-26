import Link from "next/link";
import {
    TerminalIcon,
    CodeIcon,
    ShieldIcon,
    ExternalLinkIcon,
    ArrowRightIcon,
} from "./icons";

interface TechTimelineItem {
    id: string;
    title: string;
    period: string;
    description: string;
    tags: string[];
    projects: string[];
}

interface AboutViewProps {
    lang: string;
    dict: {
        aboutPage: {
            badge: string;
            title: string;
            subtitle: string;
            story: {
                title: string;
                p1: string;
                p2: string;
                p3: string;
                tributeTitle: string;
                tributeText: string;
            };
            techTimeline: {
                title: string;
                subtitle: string;
                items: TechTimelineItem[];
            };
            hobbies: {
                title: string;
                subtitle: string;
                onlineGames: { title: string; items: string[] };
                offlineGames: { title: string; items: string[] };
                racing: { title: string; items: string[] };
                booksAndMovies: { title: string; items: string[] };
                music: {
                    title: string;
                    description: string;
                    playlistButton: string;
                    playlistUrl: string;
                };
            };
            techMatrix: {
                title: string;
                subtitle: string;
                projectColumn: string;
                techColumn: string;
                typeColumn: string;
                viewProject: string;
            };
        };
        projectsData: Record<
            string,
            {
                title: string;
                tags: string[];
                isInternal?: boolean;
                inDevelopment?: boolean;
            }
        >;
    };
}

export default function AboutView({ lang, dict }: AboutViewProps) {
    const { aboutPage, projectsData } = dict;

    // Matriz de projetos x tecnologias mapeadas
    const matrixProjects = [
        { slug: "brisamar-pescados", type: lang === "pt" ? "Comercial / Produção" : "Commercial / Production" },
        { slug: "fleet-manager", type: lang === "pt" ? "Corporativo / PMU" : "Corporate / PMU" },
        { slug: "jf-informatica", type: lang === "pt" ? "Freelance / Produção" : "Freelance / Production" },
        { slug: "bem-digital", type: lang === "pt" ? "Acadêmico / Extensão" : "Academic / Extension" },
        { slug: "bolao-copa", type: lang === "pt" ? "Hackathon / UniALFA" : "Hackathon / UniALFA" },
        { slug: "hotsite-unialfa", type: lang === "pt" ? "Acadêmico / Refatoração" : "Academic / Refactoring" },
        { slug: "investment-manager", type: lang === "pt" ? "Acadêmico / POO" : "Academic / OOP" },
        { slug: "chopits", type: lang === "pt" ? "Acadêmico / Next.js" : "Academic / Next.js" },
    ];

    return (
        <div className="grow pt-32 pb-24 px-6 max-w-300 mx-auto w-full">
            {/* Header da Página Sobre */}
            <div className="flex flex-col items-center text-center mb-16">
                <span className="text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2">
                    {aboutPage.badge}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 bg-linear-to-r from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                    {aboutPage.title}
                </h1>
                <p className="text-slate-800 dark:text-slate-300 max-w-2xl text-base sm:text-lg mb-6 font-medium">
                    {aboutPage.subtitle}
                </p>
                <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-emerald-400 rounded-full"></div>
            </div>

            {/* Seção 1: História e Homenagem */}
            <section className="mb-20">
                <div className="bg-white/80 dark:bg-slate-900/70 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-cyan-500/15 backdrop-blur-xl shadow-lg shadow-cyan-500/5">
                    <h2 className="text-2xl sm:text-3xl font-black mb-6 text-slate-950 dark:text-slate-100 flex items-center gap-3">
                        <TerminalIcon className="size-7 text-cyan-600 dark:text-cyan-400" />
                        {aboutPage.story.title}
                    </h2>
                    <div className="space-y-4 text-slate-800 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                        <p>{aboutPage.story.p1}</p>
                        <p>{aboutPage.story.p2}</p>
                        <p>{aboutPage.story.p3}</p>
                    </div>

                    {/* Card de Gratidão / Homenagem */}
                    <div className="mt-8 p-6 rounded-2xl bg-linear-to-r from-cyan-500/10 via-emerald-500/10 to-transparent border border-cyan-500/30 dark:border-cyan-500/20 flex items-start gap-4">
                        <div className="size-10 rounded-xl bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 flex items-center justify-center shrink-0 font-black text-xl">
                            💡
                        </div>
                        <div>
                            <h3 className="text-base font-black text-cyan-800 dark:text-cyan-300 mb-1">
                                {aboutPage.story.tributeTitle}
                            </h3>
                            <p className="text-slate-900 dark:text-slate-200 text-sm sm:text-base font-semibold italic">
                                &ldquo;{aboutPage.story.tributeText}&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 2: Linha do Tempo Tecnológica */}
            <section className="mb-20">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-black mb-3 text-slate-950 dark:text-slate-100">
                        {aboutPage.techTimeline.title}
                    </h2>
                    <p className="text-slate-700 dark:text-slate-400 text-sm sm:text-base max-w-xl">
                        {aboutPage.techTimeline.subtitle}
                    </p>
                </div>

                <div className="space-y-6">
                    {aboutPage.techTimeline.items.map((item) => (
                        <div
                            key={item.id}
                            id={`tech-${item.id}`}
                            className="scroll-mt-28 bg-white/70 dark:bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-cyan-500/15 hover:border-cyan-500/40 transition-all shadow-sm hover:shadow-cyan-500/5 backdrop-blur-xl"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-slate-100 flex items-center gap-2">
                                    <span className="size-3 rounded-full bg-cyan-500 inline-block"></span>
                                    {item.title}
                                </h3>
                                <span className="text-xs font-bold text-cyan-800 dark:text-cyan-400 px-3 py-1 bg-cyan-100 dark:bg-cyan-500/10 rounded-full w-fit">
                                    {item.period}
                                </span>
                            </div>

                            <p className="text-slate-800 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                                {item.description}
                            </p>

                            {/* Tags de Competências */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-200 rounded-lg border border-slate-300 dark:border-slate-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Projetos Relacionados */}
                            {item.projects.length > 0 && (
                                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-2">
                                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 mr-1">
                                        {lang === "pt" ? "Projetos práticos:" : "Practical projects:"}
                                    </span>
                                    {item.projects.map((projSlug) => {
                                        const proj = projectsData[projSlug];
                                        return (
                                            <Link
                                                key={projSlug}
                                                href={`/${lang}/projetos/${projSlug}`}
                                                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-cyan-800 dark:text-cyan-400 hover:text-emerald-700 dark:hover:text-emerald-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/20 px-2.5 py-1 rounded-md transition-colors"
                                            >
                                                {proj?.title || projSlug}
                                                <ArrowRightIcon className="size-3" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Seção 3: Hobbies e Universo Pessoal */}
            <section className="mb-20">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-black mb-3 text-slate-950 dark:text-slate-100">
                        {aboutPage.hobbies.title}
                    </h2>
                    <p className="text-slate-700 dark:text-slate-400 text-sm sm:text-base max-w-xl">
                        {aboutPage.hobbies.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Jogos Online */}
                    <div className="bg-white/80 dark:bg-slate-900/70 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-cyan-500/15 shadow-sm">
                        <h3 className="text-lg font-black text-slate-950 dark:text-slate-100 mb-4 flex items-center gap-2">
                            🎮 {aboutPage.hobbies.onlineGames.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {aboutPage.hobbies.onlineGames.items.map((game, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs font-bold px-3 py-1.5 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-300 rounded-xl border border-cyan-200 dark:border-cyan-500/20"
                                >
                                    {game}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Jogos Offline */}
                    <div className="bg-white/80 dark:bg-slate-900/70 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-cyan-500/15 shadow-sm">
                        <h3 className="text-lg font-black text-slate-950 dark:text-slate-100 mb-4 flex items-center gap-2">
                            🕹️ {aboutPage.hobbies.offlineGames.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {aboutPage.hobbies.offlineGames.items.map((game, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs font-bold px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-950 dark:text-emerald-300 rounded-xl border border-emerald-200 dark:border-emerald-500/20"
                                >
                                    {game}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Jogos de Corrida */}
                    <div className="bg-white/80 dark:bg-slate-900/70 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-cyan-500/15 shadow-sm">
                        <h3 className="text-lg font-black text-slate-950 dark:text-slate-100 mb-4 flex items-center gap-2">
                            🏎️ {aboutPage.hobbies.racing.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {aboutPage.hobbies.racing.items.map((game, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs font-bold px-3 py-1.5 bg-amber-50 dark:bg-amber-500/10 text-amber-950 dark:text-amber-300 rounded-xl border border-amber-200 dark:border-amber-500/20"
                                >
                                    {game}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Livros e Filmes */}
                    <div className="bg-white/80 dark:bg-slate-900/70 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-cyan-500/15 shadow-sm">
                        <h3 className="text-lg font-black text-slate-950 dark:text-slate-100 mb-4 flex items-center gap-2">
                            📚 {aboutPage.hobbies.booksAndMovies.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {aboutPage.hobbies.booksAndMovies.items.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs font-bold px-3 py-1.5 bg-purple-50 dark:bg-purple-500/10 text-purple-950 dark:text-purple-300 rounded-xl border border-purple-200 dark:border-purple-500/20"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bloco de Música & Playlist com Link */}
                <div className="bg-linear-to-r from-cyan-500/10 via-slate-900/60 to-purple-500/10 rounded-3xl p-8 border border-cyan-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="max-w-xl text-center md:text-left">
                        <h3 className="text-xl font-black text-slate-950 dark:text-slate-100 mb-2 flex items-center justify-center md:justify-start gap-2">
                            🎧 {aboutPage.hobbies.music.title}
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
                            {aboutPage.hobbies.music.description}
                        </p>
                    </div>

                    <a
                        href={aboutPage.hobbies.music.playlistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-linear-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-sm shadow-lg shadow-red-500/20 hover:scale-105 transition-all shrink-0 cursor-pointer"
                    >
                        <ExternalLinkIcon className="size-4.5" />
                        {aboutPage.hobbies.music.playlistButton}
                    </a>
                </div>
            </section>

            {/* Seção 4: Matriz Tecnológica de Projetos */}
            <section>
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-black mb-3 text-slate-950 dark:text-slate-100">
                        {aboutPage.techMatrix.title}
                    </h2>
                    <p className="text-slate-700 dark:text-slate-400 text-sm sm:text-base max-w-xl">
                        {aboutPage.techMatrix.subtitle}
                    </p>
                </div>

                <div className="bg-white/80 dark:bg-slate-900/70 rounded-3xl border border-slate-200 dark:border-cyan-500/15 overflow-hidden shadow-lg shadow-cyan-500/5">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                                    <th className="py-4 px-6">{aboutPage.techMatrix.projectColumn}</th>
                                    <th className="py-4 px-6">{aboutPage.techMatrix.typeColumn}</th>
                                    <th className="py-4 px-6">{aboutPage.techMatrix.techColumn}</th>
                                    <th className="py-4 px-6 text-right">Ação</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
                                {matrixProjects.map((item) => {
                                    const proj = projectsData[item.slug];
                                    if (!proj) return null;
                                    return (
                                        <tr
                                            key={item.slug}
                                            className="hover:bg-cyan-500/5 transition-colors font-medium text-slate-900 dark:text-slate-200"
                                        >
                                            <td className="py-4 px-6 font-black text-slate-950 dark:text-white">
                                                {proj.title}
                                            </td>
                                            <td className="py-4 px-6 text-xs text-slate-600 dark:text-slate-400 font-bold">
                                                {item.type}
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {proj.tags.map((tag, tIdx) => (
                                                        <span
                                                            key={tIdx}
                                                            className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <Link
                                                    href={`/${lang}/projetos/${item.slug}`}
                                                    className="inline-flex items-center gap-1 text-xs font-black text-cyan-800 dark:text-cyan-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                                                >
                                                    {aboutPage.techMatrix.viewProject}
                                                    <ArrowRightIcon className="size-3.5" />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
