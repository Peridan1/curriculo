import Link from "next/link";

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
        ([_, project]) => project.featured,
    );

    return (
        <section className="bg-black py-24" id="projects">
            <div className="max-w-300 mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-pop-yellow text-3xl lg:text-4xl font-black mb-4">
                        {dict.projectsSection.title}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                </div>

                {/* Carrossel CSS com Scroll Snap */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-6 px-6 scrollbar-hide">
                    {featuredProjects.map(([slug, project]) => (
                        <div
                            key={slug}
                            className="snap-center shrink-0 w-[90%] md:w-[60%] lg:w-[45%] group bg-charcoal rounded-3xl overflow-hidden border border-white/10 hover:border-pop-yellow/50 transition-all flex flex-col"
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
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
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
                </div>

                {/* Botão para ir para o Hub de Projetos */}
                <div className="flex justify-center mt-8">
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
