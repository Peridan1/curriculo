"use client";

import Link from "next/link";
import { useRef } from "react";

interface ProjectItem {
    featured: boolean;
    title: string;
    shortDescription: string;
    tags: string[];
    image: string;
    period?: string;
}

interface ProjectsProps {
    lang: string;
    dict: {
        projectsSection: {
            title: string;
            subtitle?: string;
            explore: string;
            viewAll: string;
        };
        projectsData: Record<string, ProjectItem>;
    };
}

export default function Projects({ dict, lang }: ProjectsProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Filtrar os projetos marcados como destaque
    const featuredProjects = Object.entries(dict.projectsData).filter(
        ([, project]) => project.featured,
    );

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -420 : 420;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-24 relative overflow-hidden" id="projects">
            <div className="max-w-300 mx-auto px-6">
                {/* Cabeçalho da Seção */}
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-2">
                        Engenharia & Criações
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                        {dict.projectsSection.title}
                    </h2>
                    {dict.projectsSection.subtitle && (
                        <p className="text-slate-400 max-w-2xl text-base mb-6">
                            {dict.projectsSection.subtitle}
                        </p>
                    )}
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
                </div>

                {/* Controles de Navegação Horizontal */}
                <div className="flex justify-end gap-2 mb-4">
                    <button
                        onClick={() => scroll("left")}
                        className="size-10 rounded-full border border-cyan-500/20 bg-slate-900/80 hover:bg-cyan-500/10 hover:border-cyan-400 text-cyan-400 flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-cyan-500/5"
                        aria-label="Rolar para a esquerda"
                    >
                        <span className="material-symbols-outlined text-lg">
                            arrow_back
                        </span>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="size-10 rounded-full border border-cyan-500/20 bg-slate-900/80 hover:bg-cyan-500/10 hover:border-cyan-400 text-cyan-400 flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-cyan-500/5"
                        aria-label="Rolar para a direita"
                    >
                        <span className="material-symbols-outlined text-lg">
                            arrow_forward
                        </span>
                    </button>
                </div>

                {/* Carrossel Otimizado por Hardware (CSS Scroll Snap + GPU) */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
                    style={{
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        transform: "translateZ(0)",
                        willChange: "transform",
                    }}
                >
                    {featuredProjects.map(([slug, project]) => (
                        <div
                            key={slug}
                            className="shrink-0 w-[88vw] sm:w-[360px] md:w-[400px] lg:w-[420px] snap-start group rounded-3xl overflow-hidden border border-cyan-500/15 bg-slate-900/70 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
                        >
                            {/* Imagem do Projeto */}
                            <div
                                className="aspect-video bg-cover bg-center overflow-hidden relative"
                                style={{
                                    backgroundImage: `url('${project.image}')`,
                                }}
                            >
                                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/0 transition-all duration-500"></div>
                            </div>

                            {/* Conteúdo do Card */}
                            <div className="p-6 lg:p-8 flex flex-col grow justify-between">
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-3">
                                        {project.shortDescription}
                                    </p>
                                </div>

                                <div>
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-[11px] font-bold px-2.5 py-1 bg-cyan-500/10 text-cyan-300 rounded-lg border border-cyan-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Botão de Exploração */}
                                    <Link
                                        className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-emerald-300 transition-colors text-sm"
                                        href={`/${lang}/projetos/${slug}`}
                                    >
                                        {dict.projectsSection.explore}
                                        <span className="material-symbols-outlined text-base">
                                            arrow_forward
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botão para o Hub de Projetos */}
                <div className="flex justify-center mt-12">
                    <Link
                        href={`/${lang}/projetos`}
                        className="border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-slate-950 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-cyan-500/20"
                    >
                        {dict.projectsSection.viewAll}
                    </Link>
                </div>
            </div>
        </section>
    );
}
