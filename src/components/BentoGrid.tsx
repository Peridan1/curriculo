"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CodeIcon, ServerIcon, CalendarIcon, CurriculumIcon } from "./icons";

interface BentoProps {
    lang: string;
    dict: {
        homePage: {
            bento: {
                badge: string;
                title: string;
                subtitle: string;
                fullstackCard: {
                    badge: string;
                    title: string;
                    description: string;
                };
                infraCard: {
                    badge: string;
                    title: string;
                    description: string;
                };
                locationCard: {
                    badge: string;
                    city: string;
                    country: string;
                    status: string;
                };
                educationCard: {
                    badge: string;
                    degree: string;
                    institution: string;
                    period: string;
                };
                curriculumCtaCard: {
                    badge: string;
                    title: string;
                    description: string;
                    btn: string;
                };
            };
        };
    };
}

export default function BentoGrid({ dict, lang }: BentoProps) {
    const b = dict.homePage.bento;

    // Relógio dinâmico em tempo real de Umuarama/PR
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString(lang === "pt" ? "pt-BR" : "en-US", {
                    timeZone: "America/Sao_Paulo",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, [lang]);

    return (
        <section className="py-24 relative overflow-hidden" id="bento">
            <div className="max-w-300 mx-auto px-6">
                {/* Cabeçalho da Seção */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2">
                        {b.badge}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-black mb-4 bg-linear-to-r from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                        {b.title}
                    </h2>
                    <p className="text-slate-800 dark:text-slate-300 max-w-2xl text-base mb-6 font-medium">
                        {b.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-emerald-400 rounded-full"></div>
                </div>

                {/* Grade Bento Box */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Card 1: Full-Stack Mastery (Ocupa 2 colunas) */}
                    <div className="md:col-span-2 p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/15 bg-white dark:bg-slate-900/70 backdrop-blur-xl shadow-lg dark:shadow-cyan-500/5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-xl group">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-100/90 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30">
                                    {b.fullstackCard.badge}
                                </span>
                                <CodeIcon className="size-6 text-cyan-700 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-950 dark:text-slate-100 mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                                {b.fullstackCard.title}
                            </h3>
                            <p className="text-slate-800 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                                {b.fullstackCard.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {["PHP 8+", "Laravel", "React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "MySQL"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-200 shadow-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Redes & Infraestrutura */}
                    <div className="p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/15 bg-white dark:bg-slate-900/70 backdrop-blur-xl shadow-lg dark:shadow-cyan-500/5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl group">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-500/10 text-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                                    {b.infraCard.badge}
                                </span>
                                <ServerIcon className="size-6 text-emerald-700 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-xl font-black text-slate-950 dark:text-slate-100 mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                                {b.infraCard.title}
                            </h3>
                            <p className="text-slate-800 dark:text-slate-300 text-sm leading-relaxed mb-4 font-normal">
                                {b.infraCard.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {["Mikrotik", "Windows Server", "Docker", "Sail", "DNS/Redes"].map((item) => (
                                <span
                                    key={item}
                                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Card 3: Localização & Relógio ao Vivo */}
                    <div className="p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/15 bg-white dark:bg-slate-900/70 backdrop-blur-xl shadow-lg dark:shadow-cyan-500/5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-xl group">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100/90 dark:bg-purple-500/10 text-purple-950 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30">
                                    {b.locationCard.badge}
                                </span>
                                <CalendarIcon className="size-6 text-purple-700 dark:text-purple-400" />
                            </div>
                            <div className="text-2xl font-black font-mono text-purple-700 dark:text-purple-300 mb-2">
                                {currentTime || "00:00:00"}
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-950 dark:text-slate-100 mb-1">
                                {b.locationCard.city}, {b.locationCard.country}
                            </h3>
                            <p className="text-slate-700 dark:text-slate-400 text-xs font-medium mt-2">
                                {b.locationCard.status}
                            </p>
                        </div>
                        <div className="pt-4 flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                            <span className="size-2 rounded-full bg-emerald-500 animate-ping"></span>
                            Online & Ready
                        </div>
                    </div>

                    {/* Card 4: CTA Currículo Completo (Ocupa 4 colunas em telas grandes) */}
                    <div className="md:col-span-3 lg:col-span-4 p-8 sm:p-10 rounded-3xl border-2 border-cyan-500/40 bg-linear-to-br from-cyan-500/10 via-white to-emerald-500/10 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-900/90 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-cyan-500 transition-all">
                        <div className="space-y-2 text-center md:text-left max-w-2xl">
                            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-cyan-800 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-500/30">
                                📄 {b.curriculumCtaCard.badge}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
                                {b.curriculumCtaCard.title}
                            </h3>
                            <p className="text-slate-800 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                                {b.curriculumCtaCard.description}
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link
                                href={`/${lang}/curriculo`}
                                className="inline-flex items-center gap-3 bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white dark:text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl shadow-cyan-600/30 hover:scale-105 transition-all text-base"
                            >
                                <CurriculumIcon className="size-5" />
                                {b.curriculumCtaCard.btn}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
