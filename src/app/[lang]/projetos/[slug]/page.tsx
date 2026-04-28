import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

const dictionaries = {
    en: () =>
        import("../../../../dictionaries/en.json").then(
            (module) => module.default,
        ),
    pt: () =>
        import("../../../../dictionaries/pt.json").then(
            (module) => module.default,
        ),
};

export default async function ProjectTemplate({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const resolvedParams = await params;
    const lang =
        resolvedParams.lang === "pt" || resolvedParams.lang === "en"
            ? resolvedParams.lang
            : "en";
    const slug = resolvedParams.slug;
    const dict = await dictionaries[lang]();

    // Procurar o projeto na nossa "Base de Dados" (o ficheiro JSON)
    // Utilizar type assertion simples para evitar avisos do TypeScript se as chaves forem dinâmicas
    const projectData = (dict as any).projectsData[slug];

    // Se a pessoa tentar aceder a um URL que não existe (ex: /projetos/projeto-fantasma), o Next.js mostra a página 404
    if (!projectData) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col">
            <Header dict={dict} />

            {/* Esqueleto Dinâmico do Projeto */}
            <section className="grow pt-32 pb-24 px-6 max-w-200 mx-auto w-full">
                {/* Botão Dinâmico de Voltar */}
                <Link
                    href={`/${lang}/#projects`}
                    className="inline-flex items-center gap-2 text-pop-orange hover:text-pop-yellow transition-colors mb-8 font-bold"
                >
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                    {projectData.backButton}
                </Link>

                {/* Título e Período */}
                <h1 className="text-pop-yellow text-4xl lg:text-5xl font-black mb-4">
                    {projectData.title}
                </h1>
                <p className="text-white/60 mb-8">{projectData.period}</p>

                {/* Imagem de Destaque (Placeholder - futuramente pode adicionar a chave 'image' no JSON) */}
                <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-2xl mb-10 flex items-center justify-center">
                    <span className="text-white/40">
                        Coloque um Print ou Carrossel de {projectData.title}{" "}
                        Aqui!
                    </span>
                </div>

                {/* Descrições Dinâmicas */}
                <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                    <p>{projectData.description}</p>
                    <h3 className="text-2xl font-bold text-pop-yellow mt-8">
                        {projectData.challengesTitle}
                    </h3>
                    <p>{projectData.challenges}</p>
                </div>

                {/* Link Dinâmico para o Repositório */}
                <div className="mt-12">
                    <a
                        href={projectData.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-charcoal border-2 border-pop-orange/50 hover:border-pop-orange text-pop-orange px-8 py-4 rounded-xl font-bold transition-all"
                    >
                        <span className="material-symbols-outlined">code</span>
                        {lang === "pt"
                            ? "Ver Repositório no GitHub"
                            : "View GitHub Repository"}
                    </a>
                </div>
            </section>

            <Footer dict={dict} />
        </main>
    );
}
