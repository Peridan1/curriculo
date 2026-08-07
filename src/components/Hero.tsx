"use client";

interface HeroProps {
    dict: {
        hero: {
            badge: string;
            greeting: string;
            title: string;
            nickname: string;
            subtitle: string;
            description: string;
            projectsBtn: string;
            linkedinBtn: string;
            githubBtn: string;
            whatsappBtn: string;
            floatingBadgeLabel: string;
            floatingBadgeValue: string;
            personalInfo: {
                age: string;
                status: string;
                location: string;
                email: string;
                phone: string;
                website: string;
            };
        };
    };
}

export default function Hero({ dict }: HeroProps) {
    return (
        <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden" id="about">
            {/* Luzes de Fundo Ambientais (Glow Futurista) */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="max-w-300 mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Coluna de Texto e Apresentação */}
                    <div className="w-full lg:w-7/12 order-2 lg:order-1 flex flex-col gap-6">
                        <div className="space-y-4">
                            {/* Badges de Destaque Futuristas */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs lg:text-sm font-extrabold uppercase tracking-wider border border-cyan-500/30 shadow-sm shadow-cyan-500/20">
                                    <span className="size-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                    {dict.hero.badge}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold border border-white/10 backdrop-blur-sm">
                                    📍 {dict.hero.personalInfo.location}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold border border-white/10 backdrop-blur-sm">
                                    🎂 {dict.hero.personalInfo.age}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold border border-white/10 backdrop-blur-sm">
                                    🇧🇷 {dict.hero.personalInfo.status}
                                </span>
                            </div>

                            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                                {dict.hero.greeting} <br />
                                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight block mt-1">
                                    {dict.hero.title}
                                </span>
                                <span className="text-purple-400 text-2xl sm:text-3xl font-extrabold tracking-normal">
                                    {dict.hero.nickname}
                                </span>
                            </h1>

                            <h2 className="text-emerald-400 text-base sm:text-lg lg:text-xl font-bold tracking-wide flex items-center gap-2">
                                <span className="material-symbols-outlined text-cyan-400 text-lg">
                                    terminal
                                </span>
                                {dict.hero.subtitle}
                            </h2>

                            <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                                {dict.hero.description}
                            </p>
                        </div>

                        {/* Botões de Ação com Estilo Futurista */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            {/* Ver Projetos (Botão Principal com Glow Ciano) */}
                            <a
                                href="#projects"
                                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 px-6 py-3.5 rounded-xl font-black text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25 flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-lg font-bold">
                                    deployed_code
                                </span>
                                {dict.hero.projectsBtn}
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/daniel-satel-pereira"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 border border-cyan-500/20 text-cyan-300 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-cyan-500/10 hover:border-cyan-400 transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-lg">
                                    work
                                </span>
                                {dict.hero.linkedinBtn}
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/DanielSatelPereira"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 border border-white/15 text-slate-200 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-lg">
                                    code
                                </span>
                                {dict.hero.githubBtn}
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/5541999521315"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 border border-emerald-500/20 text-emerald-400 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-emerald-500/10 hover:border-emerald-400 transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-lg">
                                    chat
                                </span>
                                {dict.hero.whatsappBtn}
                            </a>
                        </div>
                    </div>

                    {/* Coluna da Imagem e Informações Flutuantes */}
                    <div className="w-full lg:w-5/12 order-1 lg:order-2 flex justify-center">
                        <div className="relative group">
                            {/* Aura de Neon Traseira */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>

                            {/* Frame da Foto */}
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-slate-900 border-2 border-cyan-500/30 shadow-2xl">
                                <img
                                    alt="Daniel Satel Pereira (Peridan)"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/a/ACg8ocKA38c3_AAu3Yq_pxnO-CO1FQX_T5NcvTUZjjuGmn02FFyORv8hHQ=s288-c-no"
                                />
                            </div>

                            {/* Badge Flutuante - UniALFA com Luz Verde Matrix */}
                            <div className="absolute -bottom-5 -right-5 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-cyan-500/30 max-w-64">
                                <div className="flex items-center gap-3">
                                    <div className="size-11 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                                        <span className="material-symbols-outlined text-2xl">
                                            school
                                        </span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1.5 mb-0.5">
                                            <span className="size-2 rounded-full bg-emerald-400 animate-ping"></span>
                                            <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                                                {dict.hero.floatingBadgeLabel}
                                            </p>
                                        </div>
                                        <p className="text-xs sm:text-sm font-black text-cyan-300">
                                            {dict.hero.floatingBadgeValue}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
