"use client";

interface SkillsProps {
    dict: {
        skills: {
            title: string;
            js: string;
            react: string;
            php: string;
            java: string;
            node: string;
            db: string;
            web: string;
            tools: string;
        };
    };
}

export default function Skills({ dict }: SkillsProps) {
    const skillsList = [
        { id: "js", icon: "javascript", name: dict.skills.js },
        { id: "react", icon: "code", name: dict.skills.react },
        { id: "php", icon: "php", name: dict.skills.php },
        { id: "java", icon: "local_cafe", name: dict.skills.java },
        { id: "node", icon: "terminal", name: dict.skills.node },
        { id: "db", icon: "database", name: dict.skills.db },
        { id: "web", icon: "html", name: dict.skills.web },
        { id: "tools", icon: "deployed_code", name: dict.skills.tools },
    ];

    return (
        <section className="bg-black/20 py-24 overflow-hidden" id="skills">
            <div className="max-w-300 mx-auto px-6">
                {/* Título da Seção Dinâmico */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-pop-yellow text-3xl lg:text-4xl font-black mb-4">
                        {dict.skills.title}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                </div>

                {/* Grid Responsivo e Leve */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skillsList.map((skill) => (
                        <div
                            key={skill.id}
                            className="w-full p-6 rounded-2xl border flex items-center gap-4 hover:border-pop-yellow/50 transition-all duration-300 hover:-translate-y-1 text-left cursor-default group"
                            style={{
                                backgroundColor: "var(--card-glass)",
                                borderColor: "var(--card-border)",
                            }}
                        >
                            <div className="size-14 shrink-0 bg-white/5 rounded-xl flex items-center justify-center text-pop-yellow group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">
                                    {skill.icon}
                                </span>
                            </div>
                            <h3 className="font-bold text-pop-yellow text-sm leading-tight">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

