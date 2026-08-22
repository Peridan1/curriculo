"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { TerminalIcon, CurriculumIcon, MailIcon } from "./icons";

interface HeaderProps {
    dict: {
        header: {
            home?: string;
            about?: string;
            skills?: string;
            education?: string;
            experience?: string;
            projects: string;
            curriculum?: string;
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
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav shadow-xs dark:shadow-none print:hidden">
            <div className="max-w-300 mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logotipo */}
                <Link
                    href={`/${currentLang}`}
                    className="flex items-center gap-3 group"
                >
                    <div className="size-10 bg-linear-to-br from-cyan-400 to-emerald-500 rounded-xl flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                        <TerminalIcon className="size-5" />
                    </div>
                    <h2 className="text-cyan-700 dark:text-cyan-400 text-xl font-black tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        Peridan<span className="text-slate-950 dark:text-slate-100">.dev</span>
                    </h2>
                </Link>

                {/* Menu de Navegação Principal */}
                <nav className="hidden md:flex items-center gap-7">
                    <Link
                        className="text-slate-950 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-sm font-black tracking-tight"
                        href={`/${currentLang}`}
                    >
                        {dict.header.home || "Início"}
                    </Link>

                    <Link
                        className="text-slate-950 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-sm font-black tracking-tight"
                        href={`/${currentLang}/projetos`}
                    >
                        {dict.header.projects}
                    </Link>

                    {/* Link para o Currículo com destaque visual */}
                    <Link
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-300 border-2 border-cyan-400 dark:border-cyan-500/30 hover:bg-cyan-200 dark:hover:bg-cyan-500/20 transition-all text-xs font-black shadow-xs hover:scale-105"
                        href={`/${currentLang}/curriculo`}
                    >
                        <CurriculumIcon className="size-4" />
                        {dict.header.curriculum || "Currículo"}
                    </Link>
                </nav>

                {/* Botões: Seletores de Tema e Idioma + Contato */}
                <div className="flex items-center gap-3">
                    {/* Seletor de Tema */}
                    <ThemeToggle />

                    {/* Seletor de Idiomas */}
                    <select
                        value={currentLang}
                        onChange={handleLanguageChange}
                        className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/30 hover:border-cyan-600 text-slate-950 dark:text-slate-100 px-2.5 py-2 rounded-xl text-xs font-black transition-all hover:scale-105 cursor-pointer outline-none focus:border-cyan-600 appearance-none shadow-xs"
                        style={{
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                        }}
                        aria-label="Selecionar Idioma"
                    >
                        <option value="pt" className="text-slate-900 bg-white dark:text-slate-100 dark:bg-slate-900">
                            🇧🇷 PT
                        </option>
                        <option value="en" className="text-slate-900 bg-white dark:text-slate-100 dark:bg-slate-900">
                            🇺🇸 EN
                        </option>
                    </select>

                    {/* Botão de Contato */}
                    <a
                        href="mailto:danielsatelpereira@gmail.com"
                        className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white dark:text-slate-950 px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-lg shadow-cyan-600/20 hover:scale-105 hidden sm:inline-flex items-center gap-1.5"
                    >
                        <MailIcon className="size-4" />
                        {dict.header.contact}
                    </a>
                </div>
            </div>
        </header>
    );
}
