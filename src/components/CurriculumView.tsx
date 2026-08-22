"use client";

import Link from "next/link";
import {
    ArrowLeftIcon,
    PrintIcon,
    CodeIcon,
    WorkIcon,
    SchoolIcon,
    PersonIcon,
} from "./icons";

interface JobItem {
    role: string;
    company: string;
    date: string;
    location: string;
    category: string;
    description: string;
    subSections?: Array<{
        label: string;
        text: string;
    }>;
    tags: string[];
}

interface CategoryData {
    name: string;
    items: string[];
}

interface CurriculumViewProps {
    lang: string;
    dict: {
        curriculumPage: {
            badge: string;
            title: string;
            subtitle: string;
            printButton: string;
            backHome: string;
            summaryTitle: string;
            summaryText: string;
            skillsTitle: string;
            experienceTitle: string;
            educationTitle: string;
            contactTitle: string;
        };
        hero: {
            personalInfo: {
                location: string;
                age: string;
                status: string;
                email: string;
                phone: string;
            };
        };
        skills: {
            categories: {
                backend: CategoryData;
                frontend: CategoryData;
                database: CategoryData;
                engineering: CategoryData;
                devops: CategoryData;
            };
        };
        experience: {
            jobs: JobItem[];
        };
        education: {
            items: Array<{
                degree: string;
                institution: string;
                period: string;
                type: string;
                description: string;
            }>;
        };
    };
}

export default function CurriculumView({ dict, lang }: CurriculumViewProps) {
    const cp = dict.curriculumPage;
    const personal = dict.hero.personalInfo;
    const skills = dict.skills.categories;
    const experience = dict.experience.jobs;
    const education = dict.education.items;

    const handlePrint = () => {
        if (typeof window !== "undefined") {
            window.print();
        }
    };

    return (
        <div className="min-h-screen py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-220 mx-auto">
                {/* Barra Superior de Ações (Oculta na Impressão) */}
                <div className="print:hidden flex flex-wrap items-center justify-between gap-4 mb-8">
                    <Link
                        href={`/${lang}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-400 font-bold text-sm hover:border-cyan-500 transition-all shadow-xs hover:scale-105"
                    >
                        <ArrowLeftIcon className="size-4" />
                        {cp.backHome}
                    </Link>

                    <button
                        onClick={handlePrint}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white dark:text-slate-950 font-black text-sm transition-all shadow-lg shadow-cyan-600/20 hover:scale-105 cursor-pointer"
                    >
                        <PrintIcon className="size-4" />
                        {cp.printButton}
                    </button>
                </div>

                {/* Folha do Currículo Formal */}
                <article className="bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-cyan-500/20 rounded-3xl p-8 sm:p-12 shadow-2xl print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
                    {/* Cabeçalho do Currículo */}
                    <header className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                            <div>
                                <span className="text-xs font-black uppercase tracking-widest text-cyan-800 dark:text-cyan-400">
                                    {cp.badge}
                                </span>
                                <h1 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white mt-1">
                                    {cp.title}
                                </h1>
                                <p className="text-emerald-800 dark:text-emerald-400 font-bold text-sm sm:text-base mt-1">
                                    {cp.subtitle}
                                </p>
                            </div>

                            {/* Foto discreta para o CV */}
                            <div className="size-20 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shrink-0 self-start print:hidden">
                                <img
                                    src="https://lh3.googleusercontent.com/a/ACg8ocKA38c3_AAu3Yq_pxnO-CO1FQX_T5NcvTUZjjuGmn02FFyORv8hHQ=s288-c-no"
                                    alt="Daniel Satel Pereira"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Dados de Contato e Localização */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-800 dark:text-slate-300 font-semibold pt-2">
                            <div>📍 {personal.location}</div>
                            <div>🎂 {personal.age} ({personal.status})</div>
                            <div>
                                ✉️ <a href={`mailto:${personal.email}`} className="text-cyan-800 dark:text-cyan-400 hover:underline">{personal.email}</a>
                            </div>
                            <div>
                                📱 <a href="https://wa.me/5541999521315" className="text-cyan-800 dark:text-cyan-400 hover:underline">{personal.phone}</a>
                            </div>
                        </div>
                    </header>

                    {/* Sumário Executivo */}
                    <section className="mb-10">
                        <h2 className="text-lg font-black uppercase tracking-wider text-cyan-900 dark:text-cyan-400 border-b border-cyan-500/20 pb-2 mb-3 flex items-center gap-2">
                            <PersonIcon className="size-5" />
                            {cp.summaryTitle}
                        </h2>
                        <p className="text-slate-950 dark:text-slate-200 text-sm leading-relaxed font-normal">
                            {cp.summaryText}
                        </p>
                    </section>

                    {/* Matriz de Competências Técnicas */}
                    <section className="mb-10">
                        <h2 className="text-lg font-black uppercase tracking-wider text-cyan-900 dark:text-cyan-400 border-b border-cyan-500/20 pb-2 mb-4 flex items-center gap-2">
                            <CodeIcon className="size-5" />
                            {cp.skillsTitle}
                        </h2>
                        <div className="space-y-3 text-xs leading-relaxed">
                            {Object.entries(skills).map(([key, cat]) => (
                                <div key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                                    <span className="font-black text-slate-950 dark:text-slate-100 min-w-44 shrink-0">
                                        • {cat.name}:
                                    </span>
                                    <span className="text-slate-800 dark:text-slate-300 font-medium">
                                        {cat.items.join(", ")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experiência Profissional */}
                    <section className="mb-10">
                        <h2 className="text-lg font-black uppercase tracking-wider text-cyan-900 dark:text-cyan-400 border-b border-cyan-500/20 pb-2 mb-6 flex items-center gap-2">
                            <WorkIcon className="size-5" />
                            {cp.experienceTitle}
                        </h2>

                        <div className="space-y-8">
                            {experience.map((job, idx) => (
                                <div key={idx} className="relative pl-4 border-l-2 border-cyan-500/30">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                        <h3 className="text-base font-black text-slate-950 dark:text-slate-100">
                                            {job.role}
                                        </h3>
                                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                                            {job.date}
                                        </span>
                                    </div>
                                    <div className="text-xs font-bold text-cyan-800 dark:text-cyan-400 mb-2">
                                        {job.company} • {job.location} ({job.category})
                                    </div>
                                    <p className="text-xs text-slate-900 dark:text-slate-200 leading-relaxed mb-3 font-normal">
                                        {job.description}
                                    </p>

                                    {job.subSections && job.subSections.length > 0 && (
                                        <div className="space-y-1.5 mb-3 bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                                            {job.subSections.map((sub, sIdx) => (
                                                <div key={sIdx} className="text-xs leading-relaxed">
                                                    <span className="font-bold text-cyan-900 dark:text-cyan-300 mr-1">
                                                        {sub.label}:
                                                    </span>
                                                    <span className="text-slate-800 dark:text-slate-300 font-medium">
                                                        {sub.text}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-1">
                                        {job.tags.map((t, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Formação Educacional */}
                    <section>
                        <h2 className="text-lg font-black uppercase tracking-wider text-emerald-900 dark:text-emerald-400 border-b border-emerald-500/20 pb-2 mb-4 flex items-center gap-2">
                            <SchoolIcon className="size-5" />
                            {cp.educationTitle}
                        </h2>

                        <div className="space-y-4">
                            {education.map((item, idx) => (
                                <div key={idx} className="text-xs">
                                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                                        <h3 className="text-sm font-black text-slate-950 dark:text-slate-100">
                                            {item.degree}
                                        </h3>
                                        <span className="font-bold text-slate-700 dark:text-slate-400">
                                            {item.period}
                                        </span>
                                    </div>
                                    <div className="text-emerald-800 dark:text-emerald-400 font-bold mb-1">
                                        {item.institution} ({item.type})
                                    </div>
                                    <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}
