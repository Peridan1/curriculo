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
    // 1. Transformamos os seus dados num Array para facilitar a duplicação
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

                {/* Cinturão Infinito */}
                {/* O mask-image cria o degradê transparente nas laterais (esquerda e direita) */}
                <div className="flex w-full overflow-hidden group mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
                    {/* Fita 1 - Original */}
                    <div className="flex shrink-0 animate-marquee gap-6 py-4 pr-6 group-hover:[animation-play-state:paused]">
                        {skillsList.map((skill) => (
                            <div
                                key={`original-${skill.id}`}
                                className="w-64 bg-charcoal p-6 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-pop-yellow/30 transition-all text-left"
                            >
                                <div className="size-14 shrink-0 bg-white/5 rounded-xl flex items-center justify-center text-pop-yellow transition-transform">
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

                    {/* Fita 2 - Cópia (aria-hidden impede leitores de tela de lerem tudo duas vezes) */}
                    <div
                        aria-hidden="true"
                        className="flex shrink-0 animate-marquee gap-6 py-4 pr-6 group-hover:[animation-play-state:paused]"
                    >
                        {skillsList.map((skill) => (
                            <div
                                key={`copy-${skill.id}`}
                                className="w-64 bg-charcoal p-6 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-pop-yellow/30 transition-all text-left"
                            >
                                <div className="size-14 shrink-0 bg-white/5 rounded-xl flex items-center justify-center text-pop-yellow transition-transform">
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
            </div>
        </section>
    );
}
