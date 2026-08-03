// 1. Atualizamos o contrato com as novas variáveis do seu perfil
interface HeroProps {
    dict: {
        hero: {
            badge: string;
            greeting: string;
            title: string;
            subtitle: string;
            description: string;
            projectsBtn: string;
            linkedinBtn: string;
            floatingBadgeLabel: string;
            floatingBadgeValue: string;
        };
    };
}

export default function Hero({ dict }: HeroProps) {
    return (
        <section className="hero-bg pt-32 pb-20 lg:pt-48 lg:pb-32" id="about">
            <div className="max-w-300 mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col gap-8">
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-pop-orange/20 text-pop-orange text-sm font-bold uppercase tracking-wider border border-pop-orange/30">
                                {dict.hero.badge}
                            </span>

                            <h1 className="text-white text-3xl lg:text-4xl font-bold">
                                {dict.hero.greeting} <br />
                                <span className="text-pop-yellow text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                                    {dict.hero.title}
                                </span>
                            </h1>

                            <h2 className="text-pop-orange text-xl lg:text-2xl font-bold">
                                {dict.hero.subtitle}
                            </h2>

                            <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-xl">
                                {dict.hero.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {/* Botão para os Projetos */}
                            <a
                                href="#projects"
                                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-center"
                            >
                                {dict.hero.projectsBtn}
                            </a>

                            {/* Botão para o seu LinkedIn real */}
                            <a
                                href="https://www.linkedin.com/in/daniel-satel-pereira/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 border-2 border-pop-yellow/20 text-pop-yellow px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                {dict.hero.linkedinBtn}
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-pop-orange rounded-2xl"></div>
                            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-pop-orange shadow-2xl">
                                {/* Dica: Quando tiver uma boa foto sua, substitua o src aqui! */}
                                <img
                                    alt="Daniel (Peridan) - Portrait"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    src="https://lh3.googleusercontent.com/a/ACg8ocKA38c3_AAu3Yq_pxnO-CO1FQX_T5NcvTUZjjuGmn02FFyORv8hHQ=s288-c-no"
                                />
                            </div>

                            {/* Badge Flutuante Atualizado para UniALFA */}
                            <div className="absolute -bottom-6 -right-6 bg-charcoal p-4 rounded-xl shadow-2xl border border-pop-yellow/20">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-pop-yellow/10 rounded-full flex items-center justify-center text-pop-yellow">
                                        <span className="material-symbols-outlined">
                                            school
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white/50 uppercase">
                                            {dict.hero.floatingBadgeLabel}
                                        </p>
                                        <p className="text-sm font-black text-pop-yellow">
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
