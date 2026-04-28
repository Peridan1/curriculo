// 1. Contrato com o TypeScript
interface ExperienceProps {
    dict: {
        experience: {
            title: string;
            job1: {
                role: string;
                company: string;
                date: string;
                description: string;
            };
            job2: {
                role: string;
                company: string;
                date: string;
                description: string;
            };
            job3: {
                role: string;
                company: string;
                date: string;
                description: string;
            };
        };
    };
}

export default function Experience({ dict }: ExperienceProps) {
    return (
        <section className="py-24 max-w-300 mx-auto px-6" id="experience">
            <div className="flex flex-col mb-16">
                <h2 className="text-pop-yellow text-3xl lg:text-4xl font-black mb-4">
                    {dict.experience.title}
                </h2>
                <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-pop-orange/30 before:to-transparent">
                {/* Item 1: Estágio Prefeitura */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-charcoal bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <span className="material-symbols-outlined text-sm">
                            laptop_mac
                        </span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-pop-orange/30 transition-colors">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 mb-2">
                            <div className="font-bold text-pop-yellow text-lg">
                                {dict.experience.job1.role}
                            </div>
                            <time className="font-display text-xs font-bold text-pop-orange bg-pop-orange/10 px-3 py-1 rounded-full w-fit">
                                {dict.experience.job1.date}
                            </time>
                        </div>
                        <div className="text-pop-orange/80 font-semibold text-sm mb-3">
                            {dict.experience.job1.company}
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {dict.experience.job1.description}
                        </p>
                    </div>
                </div>

                {/* Item 2: Técnico Colégio */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-charcoal bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <span className="material-symbols-outlined text-sm">
                            router
                        </span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-pop-orange/30 transition-colors">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 mb-2">
                            <div className="font-bold text-pop-yellow text-lg">
                                {dict.experience.job2.role}
                            </div>
                            <time className="font-display text-xs font-bold text-pop-orange bg-pop-orange/10 px-3 py-1 rounded-full w-fit">
                                {dict.experience.job2.date}
                            </time>
                        </div>
                        <div className="text-pop-orange/80 font-semibold text-sm mb-3">
                            {dict.experience.job2.company}
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {dict.experience.job2.description}
                        </p>
                    </div>
                </div>

                {/* Item 3: Assistente Imppar */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-charcoal bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <span className="material-symbols-outlined text-sm">
                            build
                        </span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-pop-orange/30 transition-colors">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 mb-2">
                            <div className="font-bold text-pop-yellow text-lg">
                                {dict.experience.job3.role}
                            </div>
                            <time className="font-display text-xs font-bold text-pop-orange bg-pop-orange/10 px-3 py-1 rounded-full w-fit">
                                {dict.experience.job3.date}
                            </time>
                        </div>
                        <div className="text-pop-orange/80 font-semibold text-sm mb-3">
                            {dict.experience.job3.company}
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {dict.experience.job3.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
