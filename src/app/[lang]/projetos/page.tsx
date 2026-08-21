import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CookieBanner from "../../../components/CookieBanner";
import Link from "next/link";

const dictionaries = {
    en: () =>
        import("../../../dictionaries/en.json").then(
            (module) => module.default,
        ),
    pt: () =>
        import("../../../dictionaries/pt.json").then(
            (module) => module.default,
        ),
};

export default async function ProjectsHub({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const resolvedParams = await params;
    const lang =
        resolvedParams.lang === "pt" || resolvedParams.lang === "en"
            ? resolvedParams.lang
            : "en";
    const dict = await dictionaries[lang]();

    return (
        <main className="min-h-screen flex flex-col">
            <Header dict={dict} />

            <section className="grow pt-32 pb-24 px-6 max-w-300 mx-auto w-full">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-xs font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2">
                        Galeria de Sistemas
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 bg-linear-to-r from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                        {dict.projectsSection.hubTitle}
                    </h1>
                    <p className="text-slate-700 dark:text-slate-300 max-w-2xl text-base sm:text-lg mb-6 font-medium">
                        {dict.projectsSection.hubSubtitle}
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-emerald-400 rounded-full"></div>
                </div>

                {/* Grade com TODOS os projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(dict.projectsData).map(
                        ([slug, project]) => (
                            <div
                                key={slug}
                                className="group bg-white dark:bg-slate-900/70 rounded-3xl overflow-hidden border border-slate-200 dark:border-cyan-500/15 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all flex flex-col backdrop-blur-xl shadow-sm"
                            >
                                <div
                                    className="aspect-video bg-cover bg-center overflow-hidden relative bg-slate-200 dark:bg-slate-800"
                                    style={{
                                        backgroundImage: `url('${project.image}')`,
                                    }}
                                >
                                    <div className="w-full h-full bg-slate-950/20 dark:bg-slate-950/40 group-hover:bg-transparent transition-all duration-500"></div>
                                </div>

                                <div className="p-6 lg:p-8 flex flex-col grow justify-between">
                                    <div>
                                        <h2 className="text-2xl font-black mb-3 text-slate-950 dark:text-slate-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-slate-800 dark:text-slate-300 text-sm mb-6 leading-relaxed font-normal">
                                            {project.shortDescription}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {project.tags
                                                .slice(0, 4)
                                                .map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="text-[11px] font-bold px-2.5 py-1 bg-cyan-100/80 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-300 rounded-lg border border-cyan-300 dark:border-cyan-500/20"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                        </div>

                                        <Link
                                            className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-400 font-bold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors text-sm mt-auto"
                                            href={`/${lang}/projetos/${slug}`}
                                        >
                                            {dict.projectsSection.explore}{" "}
                                            <span className="material-symbols-outlined text-base">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </section>

            <Footer dict={dict} />
            <CookieBanner dict={dict} lang={lang} />
        </main>
    );
}
