"use client";

import { motion } from "framer-motion";

interface SubSection {
    label: string;
    text: string;
}

interface JobItem {
    role: string;
    company: string;
    date: string;
    location: string;
    category: string;
    description: string;
    subSections?: SubSection[];
    tags: string[];
}

interface ExperienceProps {
    dict: {
        experience: {
            title: string;
            subtitle: string;
            jobs: JobItem[];
        };
    };
}

export default function Experience({ dict }: ExperienceProps) {
    const icons = ["terminal", "dns", "translate"];

    return (
        <section className="py-24 max-w-300 mx-auto px-6 relative" id="experience">
            <div className="flex flex-col items-center text-center mb-16">
                <span className="text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-2">
                    Carreira & Atuação
                </span>
                <h2 className="text-3xl lg:text-4xl font-black mb-4 bg-linear-to-r from-cyan-600 via-teal-600 to-purple-600 dark:from-cyan-400 dark:via-teal-300 dark:to-purple-400 bg-clip-text text-transparent">
                    {dict.experience.title}
                </h2>
                <p className="text-slate-800 dark:text-slate-300 max-w-2xl text-base mb-6 font-medium">
                    {dict.experience.subtitle}
                </p>
                <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full"></div>
            </div>

            <div className="relative space-y-10 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-cyan-500/40 before:via-emerald-400/40 before:to-purple-500/20">
                {dict.experience.jobs.map((job, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Ícone Central da Linha do Tempo */}
                            <div className="flex items-center justify-center size-11 rounded-2xl border-2 border-cyan-500/50 bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 shadow-xl shadow-cyan-500/10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 mt-1 z-10 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-cyan-400/30 transition-all">
                                <span className="material-symbols-outlined text-lg">
                                    {icons[index] || "work"}
                                </span>
                            </div>

                            {/* Cartão de Conteúdo da Experiência */}
                            <div className="w-[calc(100%-4rem)] md:w-[46%] p-6 lg:p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/15 bg-white dark:bg-slate-900/60 backdrop-blur-xl shadow-lg dark:shadow-cyan-500/5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
                                {/* Cabeçalho do Cartão */}
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-100/80 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30">
                                        {job.category}
                                    </span>
                                    <time className="text-xs font-bold text-emerald-950 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-500/25">
                                        {job.date}
                                    </time>
                                </div>

                                <h3 className="font-extrabold text-slate-950 dark:text-slate-100 text-xl mb-1 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                                    {job.role}
                                </h3>

                                <div className="text-cyan-800 dark:text-cyan-400/90 font-bold text-sm mb-4 flex items-center gap-2">
                                    <span>{job.company}</span>
                                    <span className="text-slate-400 dark:text-slate-600">•</span>
                                    <span className="text-slate-600 dark:text-slate-400 text-xs font-medium">{job.location}</span>
                                </div>

                                <p className="text-slate-900 dark:text-slate-200 text-sm leading-relaxed mb-4 font-normal">
                                    {job.description}
                                </p>

                                {/* Subseções */}
                                {job.subSections && job.subSections.length > 0 && (
                                    <div className="space-y-3 my-4 pt-3 border-t border-slate-200 dark:border-white/10">
                                        {job.subSections.map((sub, sIndex) => (
                                            <div key={sIndex} className="text-xs leading-relaxed">
                                                <span className="font-bold text-cyan-800 dark:text-cyan-300 mr-1">
                                                    {sub.label}:
                                                </span>
                                                <span className="text-slate-800 dark:text-slate-300 font-medium">
                                                    {sub.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Tags de Tecnologias */}
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {job.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-cyan-500/40 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
