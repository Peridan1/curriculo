"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
    dict: {
        header: {
            about: string;
            skills: string;
            education?: string;
            experience: string;
            projects: string;
            contact: string;
        };
    };
}

export default function Header({ dict }: HeaderProps) {
    const pathname = usePathname();
    const router = useRouter();

    // Descobrir qual é o idioma atual a partir do URL (ex: "/pt/projetos" -> "pt")
    const currentLang = pathname.split("/")[1] || "pt";

    // Função que lida com a mudança no <select>
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        const segments = pathname.split("/");
        segments[1] = newLang; // Substitui o idioma antigo pelo novo

        // Redireciona para o novo URL
        router.push(segments.join("/"));
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
            <div className="max-w-300 mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logotipo Futurista */}
                <Link
                    href={`/${currentLang}`}
                    className="flex items-center gap-3 group"
                >
                    <div className="size-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-xl flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-xl">
                            terminal
                        </span>
                    </div>
                    <h2 className="text-cyan-400 text-xl font-black tracking-tight group-hover:text-emerald-400 transition-colors">
                        Peridan<span className="text-slate-100">.dev</span>
                    </h2>
                </Link>

                {/* Menu de Navegação */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link
                        className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-semibold"
                        href={`/${currentLang}/#about`}
                    >
                        {dict.header.about}
                    </Link>
                    <Link
                        className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-semibold"
                        href={`/${currentLang}/#skills`}
                    >
                        {dict.header.skills}
                    </Link>
                    <Link
                        className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-semibold"
                        href={`/${currentLang}/#education`}
                    >
                        {dict.header.education || "Formação"}
                    </Link>
                    <Link
                        className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-semibold"
                        href={`/${currentLang}/#experience`}
                    >
                        {dict.header.experience}
                    </Link>
                    <Link
                        className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-semibold"
                        href={`/${currentLang}/projetos`}
                    >
                        {dict.header.projects}
                    </Link>
                </nav>

                {/* Botões: Seletores de Tema e Idioma + Contato */}
                <div className="flex items-center gap-3">
                    {/* Seletor de Tema */}
                    <ThemeToggle />

                    {/* Seletor de Idiomas Escalonável */}
                    <select
                        value={currentLang}
                        onChange={handleLanguageChange}
                        className="bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 text-slate-100 px-2.5 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 cursor-pointer outline-none focus:border-cyan-400 appearance-none shadow-sm"
                        style={{
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                        }}
                        aria-label="Selecionar Idioma"
                    >
                        <option value="pt" className="text-slate-100 bg-slate-900">
                            🇧🇷 PT
                        </option>
                        <option value="en" className="text-slate-100 bg-slate-900">
                            🇺🇸 EN
                        </option>
                    </select>

                    {/* Botão de Contato com Gradiente Futurista */}
                    <a
                        href="mailto:danielsatelpereira@gmail.com"
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-lg shadow-cyan-500/20 hover:scale-105 hidden sm:inline-flex items-center gap-1.5"
                    >
                        <span className="material-symbols-outlined text-base">
                            mail
                        </span>
                        {dict.header.contact}
                    </a>
                </div>
            </div>
        </header>
    );
}
