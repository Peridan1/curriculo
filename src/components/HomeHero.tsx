"use client";

import Link from "next/link";
import InteractiveTerminal from "./InteractiveTerminal";

interface HomeHeroProps {
    lang: string;
    dict: {
        homePage: {
            hero: {
                badge: string;
                greeting: string;
                name: string;
                nickname: string;
                title: string;
                description: string;
                ctaProjects: string;
                ctaCurriculum: string;
                ctaTerminal: string;
                availability: string;
                location: string;
                university: string;
            };
            terminal: {
                headerTitle: string;
                welcome: string;
                shortcutsLabel: string;
                inputPlaceholder: string;
                helpText: string;
                whoamiText: string;
                skillsText: string;
                stackText: string;
                projectsText: string;
                curriculoText: string;
                contactText: string;
                unknownCommand: string;
                triviaMenu?: string;
                triviaTech?: string;
                triviaMusic?: string;
                triviaMovies?: string;
                triviaGames?: string;
                triviaPlaylist?: string;
                easterEgg42?: string;
                easterEggPeace?: string;
                easterEggMatrix?: string;
                easterEggCoffee?: string;
                easterEggStarWars?: string;
                easterEggVim?: string;
                easterEggRickroll?: string;
                easterEggDeploy?: string;
            };
        };
        hero: {
            linkedinBtn: string;
            githubBtn: string;
            whatsappBtn: string;
        };
    };
}

export default function HomeHero({ dict, lang }: HomeHeroProps) {
    const h = dict.homePage.hero;

    return (
        <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden" id="hero">
            {/* Luzes de Fundo Ambientais (Apenas no Modo Escuro) */}
            <div className="hidden dark:block absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="hidden dark:block absolute top-1/3 right-10 w-100 h-100 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="max-w-300 mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">
                    {/* Coluna da Esquerda: Apresentação e Botões Principais */}
                    <div className="w-full lg:w-6/12 flex flex-col justify-between gap-5">
                        {/* Container Principal de Apresentação com Fundo Suave e Legível */}
                        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-cyan-500/20 shadow-sm flex flex-col gap-5 grow justify-between">
                            <div className="space-y-4">
                                {/* Badges de Status */}
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-400 text-xs lg:text-sm font-black uppercase tracking-wider border border-cyan-300 dark:border-cyan-500/30 shadow-xs">
                                        <span className="size-2 rounded-full bg-emerald-500 animate-ping"></span>
                                        {h.badge}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-950 text-slate-950 dark:text-slate-200 text-xs font-bold border border-slate-300 dark:border-white/15 shadow-xs">
                                        📍 {h.location}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-950 text-slate-950 dark:text-slate-200 text-xs font-bold border border-slate-300 dark:border-white/15 shadow-xs">
                                        🎓 {h.university}
                                    </span>
                                </div>

                                {/* Headline */}
                                <h1 className="text-slate-950 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                    <span className="text-slate-800 dark:text-slate-200 text-2xl sm:text-3xl font-extrabold block mb-1">
                                        {h.greeting}
                                    </span>
                                    <span className="bg-linear-to-r from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent block">
                                        {h.name}
                                    </span>
                                </h1>

                                <h2 className="text-emerald-800 dark:text-emerald-400 text-base sm:text-lg lg:text-xl font-black tracking-wide flex items-center gap-2">
                                    <span className="material-symbols-outlined text-cyan-700 dark:text-cyan-400 text-lg">
                                        terminal
                                    </span>
                                    {h.title}
                                </h2>
                            </div>

                            {/* Parágrafo de Apresentação em Card Suave e Nítido */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-950/60 border border-slate-200/90 dark:border-white/10 shadow-xs">
                                <p className="text-slate-900 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                                    {h.description}
                                </p>
                            </div>
                        </div>

                        {/* Ações Principais Lado a Lado */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full shrink-0">
                            {/* Ver Projetos */}
                            <a
                                href="#projects"
                                className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white dark:text-slate-950 px-5 py-3.5 rounded-2xl font-black text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-600/25 flex items-center justify-center gap-2 text-center"
                            >
                                <span className="material-symbols-outlined text-lg font-bold">
                                    deployed_code
                                </span>
                                <span>{h.ctaProjects}</span>
                            </a>

                            {/* Acessar Currículo Completo */}
                            <Link
                                href={`/${lang}/curriculo`}
                                className="bg-white dark:bg-slate-900 border-2 border-cyan-500/40 hover:border-cyan-600 text-cyan-900 dark:text-cyan-300 px-5 py-3.5 rounded-2xl font-black text-sm transition-all hover:scale-105 shadow-xs flex items-center justify-center gap-2 text-center"
                            >
                                <span className="material-symbols-outlined text-lg">
                                    description
                                </span>
                                <span>{h.ctaCurriculum}</span>
                            </Link>
                        </div>
                    </div>

                    {/* Coluna da Direita: Terminal Interativo + Redes Sociais */}
                    <div className="w-full lg:w-6/12 flex flex-col justify-between gap-5">
                        {/* Terminal Web Interativo */}
                        <div className="w-full grow flex flex-col">
                            <InteractiveTerminal dict={dict} lang={lang} />
                        </div>

                        {/* Redes e Contato Rápido Abaixo do Terminal */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 shrink-0">
                            <a
                                href="https://linkedin.com/in/daniel-satel-pereira"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-400 hover:border-cyan-600 text-xs font-bold transition-all hover:scale-105 shadow-xs"
                                title="LinkedIn"
                            >
                                <span className="material-symbols-outlined text-base">
                                    work
                                </span>
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/DanielSatelPereira"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/15 text-slate-950 dark:text-slate-200 hover:border-slate-400 text-xs font-bold transition-all hover:scale-105 shadow-xs"
                                title="GitHub"
                            >
                                <span className="material-symbols-outlined text-base">
                                    code
                                </span>
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://wa.me/5541999521315"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/40 text-emerald-800 dark:text-emerald-400 hover:border-emerald-600 text-xs font-bold transition-all hover:scale-105 shadow-xs"
                                title="WhatsApp"
                            >
                                <span className="material-symbols-outlined text-base">
                                    chat
                                </span>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
