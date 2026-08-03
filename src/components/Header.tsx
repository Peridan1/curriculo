"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
    dict: {
        header: {
            about: string;
            skills: string;
            experience: string;
            projects: string;
            contact: string;
        };
    };
}

export default function Header({ dict }: HeaderProps) {
    const pathname = usePathname();
    const router = useRouter();

    // Descobrir qual é o idioma atual a partir do URL (ex: "/pt/sobre" -> "pt")
    const currentLang = pathname.split("/")[1] || "en";

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
                {/* Logótipo */}
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">
                            terminal
                        </span>
                    </div>
                    <h2 className="text-pop-yellow text-xl font-bold tracking-tight">
                        Peridan<span className="text-white">.dev</span>
                    </h2>
                </div>

                {/* Menu de Navegação */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link
                        className="text-white/80 hover:text-pop-yellow transition-colors text-sm font-semibold"
                        href={`/${currentLang}/#about`}
                    >
                        {dict.header.about}
                    </Link>
                    <Link
                        className="text-white/80 hover:text-pop-yellow transition-colors text-sm font-semibold"
                        href={`/${currentLang}/#skills`}
                    >
                        {dict.header.skills}
                    </Link>
                    <Link
                        className="text-white/80 hover:text-pop-yellow transition-colors text-sm font-semibold"
                        href={`/${currentLang}/#experience`}
                    >
                        {dict.header.experience}
                    </Link>
                    <Link
                        className="text-white/80 hover:text-pop-yellow transition-colors text-sm font-semibold"
                        href={`/${currentLang}/projetos`}
                    >
                        {dict.header.projects}
                    </Link>
                </nav>

                {/* Botões: Seletores de Tema e Idioma + Contato */}
                <div className="flex items-center gap-4">
                    {/* Seletor de Tema */}
                    <ThemeToggle />

                    {/* Seletor de Idiomas Escalonável */}
                    <select
                        value={currentLang}
                        onChange={handleLanguageChange}
                        className="bg-transparent border border-white/10 hover:border-pop-yellow/50 text-white px-3 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105 cursor-pointer outline-none focus:border-pop-yellow appearance-none"
                        style={{
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                        }}
                    >
                        <option value="en" className="text-charcoal bg-slate-900">
                            🇺🇸 EN
                        </option>
                        <option value="pt" className="text-charcoal bg-slate-900">
                            🇧🇷 PT
                        </option>
                    </select>

                    <a
                        href="mailto:danielsatelpereira@gmail.com"
                        className="bg-primary hover:brightness-110 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:scale-105"
                    >
                        {dict.header.contact}
                    </a>
                </div>
            </div>
        </header>
    );
}

