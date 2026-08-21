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
        <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden" id="hero">
            {/* Luzes de Fundo Ambientais (Apenas no Modo Escuro) */}
            <div className="hidden dark:block absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="hidden dark:block absolute top-1/3 right-10 w-100 h-100 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="max-w-300 mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
                    {/* Coluna da Esquerda: Apresentação e CTAs */}
                    <div className="w-full lg:w-6/12 flex flex-col gap-6">
                        <div className="space-y-4">
                            {/* Badges de Status */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/90 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-400 text-xs lg:text-sm font-black uppercase tracking-wider border border-cyan-300 dark:border-cyan-500/30 shadow-xs">
                                    <span className="size-2 rounded-full bg-emerald-500 animate-ping"></span>
                                    {h.badge}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-200 text-xs font-bold border border-slate-300 dark:border-white/15 shadow-xs">
                                    📍 {h.location}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-200 text-xs font-bold border border-slate-300 dark:border-white/15 shadow-xs">
                                    🎓 {h.university}
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-slate-950 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                {h.greeting} <br />
                                <span className="bg-linear-to-r from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent block mt-1">
                                    {h.name}
                                </span>
                            </h1>

                            <h2 className="text-emerald-800 dark:text-emerald-400 text-base sm:text-lg lg:text-xl font-black tracking-wide flex items-center gap-2">
                                <span className="material-symbols-outlined text-cyan-700 dark:text-cyan-400 text-lg">
                                    terminal
                                </span>
                                {h.title}
                            </h2>

                            <p className="text-slate-950 dark:text-slate-200 text-base lg:text-lg leading-relaxed max-w-xl font-medium">
                                {h.description}
                            </p>
                        </div>

                        {/* Ações Principais */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            {/* Ver Projetos */}
                            <a
                                href="#projects"
                                className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white dark:text-slate-950 px-6 py-3.5 rounded-2xl font-black text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-600/25 flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-lg font-bold">
                                    deployed_code
                                </span>
                                {h.ctaProjects}
                            </a>

                            {/* Acessar Currículo Completo */}
                            <Link
                                href={`/${lang}/curriculo`}
                                className="bg-white dark:bg-slate-900 border-2 border-cyan-500/40 hover:border-cyan-600 text-cyan-900 dark:text-cyan-300 px-6 py-3.5 rounded-2xl font-black text-sm sm:text-base transition-all hover:scale-105 shadow-xs flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-lg">
                                    description
                                </span>
                                {h.ctaCurriculum}
                            </Link>
                        </div>

                        {/* Redes e Contato Rápido */}
                        <div className="flex items-center gap-2.5 pt-2">
                            <a
                                href="https://linkedin.com/in/daniel-satel-pereira"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-400 hover:border-cyan-600 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                                title="LinkedIn"
                            >
                                <span className="material-symbols-outlined text-lg">
                                    work
                                </span>
                            </a>
                            <a
                                href="https://github.com/DanielSatelPereira"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/15 text-slate-950 dark:text-slate-200 hover:border-slate-400 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                                title="GitHub"
                            >
                                <span className="material-symbols-outlined text-lg">
                                    code
                                </span>
                            </a>
                            <a
                                href="https://wa.me/5541999521315"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-11 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500/40 text-emerald-800 dark:text-emerald-400 hover:border-emerald-600 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                                title="WhatsApp"
                            >
                                <span className="material-symbols-outlined text-lg">
                                    chat
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Coluna da Direita: Terminal Interativo ao Vivo */}
                    <div className="w-full lg:w-6/12 flex justify-center">
                        <InteractiveTerminal dict={dict} lang={lang} />
                    </div>
                </div>
            </div>
        </section>
    );
}
