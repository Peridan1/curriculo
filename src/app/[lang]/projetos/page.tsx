import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
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
        <main className="min-h-screen flex flex-col bg-charcoal">
            <Header dict={dict} />

            <section className="grow pt-32 pb-24 px-6 max-w-300 mx-auto w-full">
                <div className="flex flex-col items-center text-center mb-16">
                    <h1 className="text-pop-yellow text-4xl lg:text-5xl font-black mb-6">
                        {dict.projectsSection.hubTitle}
                    </h1>
                    <p className="text-white/60 max-w-2xl text-lg">
                        {dict.projectsSection.hubSubtitle}
                    </p>
                </div>

                {/* Grelha com TODOS os projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(dict.projectsData).map(
                        ([slug, project]) => (
                            <div
                                key={slug}
                                className="group bg-black/40 rounded-3xl overflow-hidden border border-white/10 hover:border-pop-yellow/50 transition-all flex flex-col"
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
                                    <p className="text-white/60 mb-6 leading-relaxed grow text-sm">
                                        {project.shortDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags
                                            .slice(0, 3)
                                            .map((tag, index) => (
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
                        ),
                    )}
                </div>
            </section>

            <Footer dict={dict} />
        </main>
    );
}
