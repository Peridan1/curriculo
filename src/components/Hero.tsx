import {
    TerminalIcon,
    ProjectIcon,
    LinkedInIcon,
    GitHubIcon,
    WhatsAppIcon,
    SchoolIcon,
} from "./icons";

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
            {/* Luzes de Fundo Ambientais (Apenas no Modo Escuro para não lavar o contraste no modo claro) */}
            <div className="hidden dark:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="hidden dark:block absolute top-1/3 right-10 w-87.5 h-87.5 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="max-w-300 mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Coluna de Texto e Apresentação */}
                    <div className="w-full lg:w-7/12 order-2 lg:order-1 flex flex-col gap-6">
                        <div className="space-y-4">
                            {/* Badges de Destaque com Fundo Sólido e Alto Contraste */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/90 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-400 text-xs lg:text-sm font-black uppercase tracking-wider border border-cyan-300 dark:border-cyan-500/30 shadow-xs">
                                    <span className="size-2 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-pulse"></span>
                                    {dict.hero.badge}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-100 text-xs font-black border border-slate-300 dark:border-white/15 shadow-xs">
                                    📍 {dict.hero.personalInfo.location}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-100 text-xs font-black border border-slate-300 dark:border-white/15 shadow-xs">
                                    🎂 {dict.hero.personalInfo.age}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-100 text-xs font-black border border-slate-300 dark:border-white/15 shadow-xs">
                                    🇧🇷 {dict.hero.personalInfo.status}
                                </span>
                            </div>

                            <h1 className="text-slate-950 dark:text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                                {dict.hero.greeting} <br />
                                <span className="bg-linear-to-r from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight block mt-1">
                                    {dict.hero.title}
                                </span>
                                <span className="text-purple-700 dark:text-purple-400 text-2xl sm:text-3xl font-black tracking-normal">
                                    {dict.hero.nickname}
                                </span>
                            </h1>

                            <h2 className="text-emerald-800 dark:text-emerald-400 text-base sm:text-lg lg:text-xl font-bold tracking-wide flex items-center gap-2">
                                <TerminalIcon className="size-5 text-cyan-700 dark:text-cyan-400 shrink-0" />
                                {dict.hero.subtitle}
                            </h2>

                            {/* Parágrafo de Apresentação com Máxima Legibilidade e Alto Contraste */}
                            <p className="text-slate-950 dark:text-slate-200 text-base lg:text-lg leading-relaxed max-w-2xl font-medium">
                                {dict.hero.description}
                            </p>
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            {/* Ver Projetos */}
                            <a
                                href="#projects"
                                className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white dark:text-slate-950 px-6 py-3.5 rounded-xl font-black text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-600/30 flex items-center gap-2"
                            >
                                <ProjectIcon className="size-5" />
                                {dict.hero.projectsBtn}
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/daniel-satel-pereira"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-slate-900 border border-cyan-500/40 text-cyan-900 dark:text-cyan-300 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:border-cyan-600 transition-all flex items-center gap-2 shadow-xs group"
                            >
                                <LinkedInIcon className="size-4.5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                                {dict.hero.linkedinBtn}
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/DanielSatelPereira"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/15 text-slate-950 dark:text-slate-200 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 transition-all flex items-center gap-2 shadow-xs group"
                            >
                                <GitHubIcon className="size-4.5 text-slate-900 dark:text-white group-hover:scale-110 transition-transform" />
                                {dict.hero.githubBtn}
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/5541999521315"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-slate-900 border border-emerald-500/40 text-emerald-900 dark:text-emerald-400 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:border-emerald-600 transition-all flex items-center gap-2 shadow-xs group"
                            >
                                <WhatsAppIcon className="size-4.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                                {dict.hero.whatsappBtn}
                            </a>
                        </div>
                    </div>

                    {/* Coluna da Imagem e Informações Flutuantes */}
                    <div className="w-full lg:w-5/12 order-1 lg:order-2 flex justify-center">
                        <div className="relative group">
                            {/* Aura de Neon Traseira */}
                            <div className="absolute -inset-1.5 bg-linear-to-r from-cyan-500 to-purple-600 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>

                            {/* Frame da Foto */}
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-900 border-2 border-cyan-500/30 shadow-2xl">
                                <img
                                    alt="Daniel Satel Pereira (Peridan)"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/a/ACg8ocKA38c3_AAu3Yq_pxnO-CO1FQX_T5NcvTUZjjuGmn02FFyORv8hHQ=s288-c-no"
                                />
                            </div>

                            {/* Badge Flutuante - UniALFA */}
                            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-900/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-slate-300 dark:border-cyan-500/30 max-w-64">
                                <div className="flex items-center gap-3">
                                    <div className="size-11 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0 border border-cyan-500/20">
                                        <SchoolIcon className="size-6" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1.5 mb-0.5">
                                            <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-ping"></span>
                                            <p className="text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                                {dict.hero.floatingBadgeLabel}
                                            </p>
                                        </div>
                                        <p className="text-xs sm:text-sm font-black text-cyan-800 dark:text-cyan-300">
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
