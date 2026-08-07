"use client";

interface CategoryData {
    name: string;
    items: string[];
}

interface SkillsProps {
    dict: {
        skills: {
            title: string;
            subtitle: string;
            categories: {
                backend: CategoryData;
                frontend: CategoryData;
                database: CategoryData;
                engineering: CategoryData;
                devops: CategoryData;
            };
        };
    };
}

export default function Skills({ dict }: SkillsProps) {
    const categoriesConfig = [
        {
            key: "backend",
            data: dict.skills.categories.backend,
            icon: "dns",
            color: "text-cyan-400",
            badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
        },
        {
            key: "frontend",
            data: dict.skills.categories.frontend,
            icon: "devices",
            color: "text-emerald-400",
            badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        },
        {
            key: "database",
            data: dict.skills.categories.database,
            icon: "database",
            color: "text-purple-400",
            badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        },
        {
            key: "engineering",
            data: dict.skills.categories.engineering,
            icon: "architecture",
            color: "text-cyan-400",
            badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
        },
        {
            key: "devops",
            data: dict.skills.categories.devops,
            icon: "deployed_code",
            color: "text-emerald-400",
            badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden" id="skills">
            <div className="max-w-300 mx-auto px-6">
                {/* Título da Seção Dinâmico */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-2">
                        Stack & Conhecimento
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        {dict.skills.title}
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-base mb-6">
                        {dict.skills.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"></div>
                </div>

                {/* Grid das Categorias de Habilidades */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoriesConfig.map((cat) => (
                        <div
                            key={cat.key}
                            className="p-6 rounded-3xl border border-cyan-500/15 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 group"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                                        <span className={`material-symbols-outlined text-2xl ${cat.color}`}>
                                            {cat.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                                        {cat.data.name}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {cat.data.items.map((item, index) => (
                                        <span
                                            key={index}
                                            className={`text-xs font-semibold px-3 py-1.5 rounded-xl border ${cat.badgeBg} hover:scale-105 transition-transform cursor-default`}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
