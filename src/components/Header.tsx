"use client";

import { useState, useEffect } from "react";
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

function MenuIcon({ className = "size-6" }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    );
}

function CloseIcon({ className = "size-6" }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

export default function Header({ dict }: HeaderProps) {
    const pathname = usePathname();
    const router = useRouter();
    // Armazena a rota onde o menu foi aberto; ao mudar de rota, fecha automaticamente sem setState em effect
    const [openedMenuPathname, setOpenedMenuPathname] = useState<string | null>(null);
    const isMobileMenuOpen = openedMenuPathname === pathname;

    // Descobrir qual é o idioma atual a partir da URL (ex: "/pt/projetos" -> "pt")
    const currentLang = pathname.split("/")[1] || "pt";

    const closeMobileMenu = () => setOpenedMenuPathname(null);
    const toggleMobileMenu = () =>
        setOpenedMenuPathname((prev) => (prev === pathname ? null : pathname));

    // Fecha o menu mobile com a tecla Escape
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpenedMenuPathname(null);
            }
        };

        if (isMobileMenuOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    // Função que lida com a mudança no <select> de idioma
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        const segments = pathname.split("/");
        segments[1] = newLang; // Substitui o idioma antigo pelo novo
        router.push(segments.join("/"));
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav shadow-xs dark:shadow-none print:hidden">
            <div className="max-w-300 mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logotipo */}
                <Link
                    href={`/${currentLang}`}
                    className="flex items-center gap-3 group"
                    onClick={closeMobileMenu}
                >
                    <div className="size-10 bg-linear-to-br from-cyan-400 to-emerald-500 rounded-xl flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                        <TerminalIcon className="size-5" />
                    </div>
                    <h2 className="text-cyan-700 dark:text-cyan-400 text-xl font-black tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        Peridan<span className="text-slate-950 dark:text-slate-100">.dev</span>
                    </h2>
                </Link>

                {/* Menu de Navegação Principal (Desktop) */}
                <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
                    <Link
                        className="text-slate-950 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-sm font-black tracking-tight"
                        href={`/${currentLang}`}
                    >
                        {dict.header.home || "Início"}
                    </Link>

                    <Link
                        className="text-slate-950 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-sm font-black tracking-tight"
                        href={`/${currentLang}/sobre`}
                    >
                        {dict.header.about || "Sobre"}
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

                {/* Ações: Seletores de Tema e Idioma + Contato + Botão Hambúrguer Mobile */}
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

                    {/* Botão de Contato (Desktop) */}
                    <a
                        href="mailto:danielsatelpereira@gmail.com"
                        className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white dark:text-slate-950 px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-lg shadow-cyan-600/20 hover:scale-105 hidden sm:inline-flex items-center gap-1.5"
                    >
                        <MailIcon className="size-4" />
                        {dict.header.contact}
                    </a>

                    {/* Botão Hambúrguer para Menu Mobile */}
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                        className="md:hidden size-10 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/30 text-slate-900 dark:text-slate-100 flex items-center justify-center hover:border-cyan-500 transition-colors cursor-pointer"
                    >
                        {isMobileMenuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
                    </button>
                </div>
            </div>

            {/* Menu Dropdown Mobile */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="md:hidden border-b border-slate-300/80 dark:border-cyan-500/20 bg-slate-100/95 dark:bg-slate-950/95 backdrop-blur-2xl px-6 py-6 animate-in slide-in-from-top-4 duration-200"
                >
                    <nav className="flex flex-col gap-4" aria-label="Navegação mobile">
                        <Link
                            href={`/${currentLang}`}
                            onClick={closeMobileMenu}
                            className="text-base font-black text-slate-950 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 py-1 transition-colors"
                        >
                            {dict.header.home || "Início"}
                        </Link>
                        <Link
                            href={`/${currentLang}/sobre`}
                            onClick={closeMobileMenu}
                            className="text-base font-black text-slate-950 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 py-1 transition-colors"
                        >
                            {dict.header.about || "Sobre"}
                        </Link>
                        <Link
                            href={`/${currentLang}/projetos`}
                            onClick={closeMobileMenu}
                            className="text-base font-black text-slate-950 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 py-1 transition-colors"
                        >
                            {dict.header.projects}
                        </Link>
                        <Link
                            href={`/${currentLang}/curriculo`}
                            onClick={closeMobileMenu}
                            className="inline-flex items-center gap-2 text-base font-black text-cyan-800 dark:text-cyan-400 hover:text-emerald-600 dark:hover:text-emerald-300 py-1 transition-colors"
                        >
                            <CurriculumIcon className="size-4.5" />
                            {dict.header.curriculum || "Currículo"}
                        </Link>
                        <div className="pt-3 border-t border-slate-300 dark:border-slate-800 flex flex-col gap-3">
                            <a
                                href="mailto:danielsatelpereira@gmail.com"
                                className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-cyan-600 to-blue-600 text-white dark:text-slate-950 py-3 rounded-xl text-sm font-extrabold shadow-md"
                            >
                                <MailIcon className="size-4" />
                                {dict.header.contact}
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
