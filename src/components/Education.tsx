"use client";

import { motion } from "framer-motion";

interface EducationProps {
    dict: {
        education: {
            title: string;
            subtitle: string;
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

export default function Education({ dict }: EducationProps) {
    const icons = ["school", "translate"];

    return (
        <section className="py-24 relative overflow-hidden" id="education">
            <div className="max-w-300 mx-auto px-6">
                {/* Cabeçalho da Seção */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-2">
                        Qualificação & Idiomas
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-black mb-4 bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                        {dict.education.title}
                    </h2>
                    <p className="text-slate-800 dark:text-slate-300 max-w-2xl text-base mb-6 font-medium">
                        {dict.education.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                </div>

                {/* Grid de Formações */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {dict.education.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/15 bg-white dark:bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 group shadow-sm"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div className="size-14 rounded-2xl bg-emerald-100/80 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/25 flex items-center justify-center text-emerald-800 dark:text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all">
                                        <span className="material-symbols-outlined text-3xl">
                                            {icons[index] || "school"}
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-500/10 text-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                                        {item.period}
                                    </span>
                                </div>

                                <div className="mb-2">
                                    <span className="text-xs font-black uppercase tracking-wider text-cyan-800 dark:text-cyan-400">
                                        {item.type}
                                    </span>
                                    <h3 className="text-xl lg:text-2xl font-extrabold text-slate-950 dark:text-slate-100 mt-1 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                                        {item.degree}
                                    </h3>
                                </div>

                                <div className="text-emerald-800 dark:text-emerald-300/90 font-bold text-base mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm text-cyan-700 dark:text-cyan-400">
                                        location_on
                                    </span>
                                    {item.institution}
                                </div>

                                <p className="text-slate-800 dark:text-slate-300 text-sm leading-relaxed font-normal">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
