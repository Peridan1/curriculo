"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ProjectsProps {
    lang: string;
    dict: {
        projectsSection: {
            title: string;
            explore: string;
            viewAll: string;
        };
        projectsData: Record<
            string,
            {
                featured: boolean;
                title: string;
                shortDescription: string;
                tags: string[];
                image: string;
            }
        >;
    };
}

export default function Projects({ dict, lang }: ProjectsProps) {
    // Filtrar apenas os projetos marcados como destaque
    const featuredProjects = Object.entries(dict.projectsData).filter(
        ([, project]) => project.featured,
    );


    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const controls = useAnimation();
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const updateWidth = () => {
            if (carouselRef.current) {
                setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [featuredProjects.length]);

    useEffect(() => {
        if (width > 0 && !isPaused) {
            controls.start({
                x: [0, -width],
                transition: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 20,
                    ease: "linear",
                },
            });
        } else {
            controls.stop();
        }
    }, [width, isPaused, controls]);

    return (
        <section className="bg-black py-24" id="projects">
            <div className="max-w-300 mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-pop-yellow text-3xl lg:text-4xl font-black mb-4">
                        {dict.projectsSection.title}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                </div>

                {/* Carrossel Arrastável e Auto-Pan */}
                <div ref={carouselRef} className="overflow-hidden py-4 -mx-6 px-6">
                    <motion.div
                        drag="x"
                        dragConstraints={carouselRef}
                        dragElastic={0.1}
                        animate={controls}
                        onPointerEnter={() => setIsPaused(true)}
                        onPointerLeave={() => setIsPaused(false)}
                        onDragStart={() => setIsPaused(true)}
                        onDragEnd={() => setIsPaused(false)}
                        className="flex gap-6 cursor-grab active:cursor-grabbing w-max"
                    >
                        {featuredProjects.map(([slug, project]) => (
                            <div
                                key={slug}
                                className="shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] lg:w-[450px] group bg-charcoal rounded-3xl overflow-hidden border border-white/10 hover:border-pop-yellow/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                <div
                                    className="aspect-video bg-cover bg-center overflow-hidden"
                                    style={{
                                        backgroundImage: `url('${project.image}')`,
                                    }}
                                >
                                    <div className="w-full h-full bg-charcoal/40 group-hover:bg-charcoal/0 transition-all duration-500"></div>
                                </div>

                                <div className="p-8 flex flex-col grow">
                                    <h3 className="text-2xl font-bold mb-3 text-pop-yellow">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 mb-6 leading-relaxed grow">
                                        {project.shortDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-xs font-bold px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        className="inline-flex items-center gap-2 text-pop-orange font-bold hover:underline mt-auto"
                                        href={`/${lang}/projetos/${slug}`}
                                    >
                                        {dict.projectsSection.explore}{" "}
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Botão para ir para o Hub de Projetos */}
                <div className="flex justify-center mt-12">
                    <Link
                        href={`/${lang}/projetos`}
                        className="border-2 border-pop-yellow text-pop-yellow px-8 py-4 rounded-xl font-bold text-lg hover:bg-pop-yellow hover:text-black transition-all"
                    >
                        {dict.projectsSection.viewAll}
                    </Link>
                </div>
            </div>
        </section>
    );
}
