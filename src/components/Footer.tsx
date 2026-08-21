import Link from "next/link";

interface FooterProps {
    dict: {
        footer: {
            copyright: string;
            location?: string;
            quickLinks?: string;
            contactMe?: string;
            privacy?: string;
            available?: string;
        };
    };
}

export default function Footer({ dict }: FooterProps) {
    return (
        <footer className="bg-slate-200/80 dark:bg-slate-950/80 py-16 border-t border-slate-300/80 dark:border-cyan-500/15 relative overflow-hidden" id="contact">
            {/* Linha de Neon Superior */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent"></div>

            <div className="max-w-300 mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    {/* Logo e Apresentação */}
                    <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="size-9 bg-linear-to-br from-cyan-400 to-emerald-500 rounded-xl flex items-center justify-center text-slate-950 font-black shadow-md shadow-cyan-500/20">
                                <span className="material-symbols-outlined text-base">
                                    terminal
                                </span>
                            </div>
                            <h2 className="text-cyan-700 dark:text-cyan-400 text-xl font-black">
                                Peridan<span className="text-slate-950 dark:text-slate-100">.dev</span>
                            </h2>
                        </div>
                        <p className="text-slate-700 dark:text-slate-400 text-xs max-w-sm leading-relaxed font-medium">
                            Daniel Satel Pereira • Desenvolvedor Full Stack Júnior
                            <br />
                            Umuarama/PR – Brasil
                        </p>
                    </div>

                    {/* Links de Contato e Redes Sociais */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {/* E-mail */}
                        <a
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/20 text-slate-900 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all text-xs font-bold shadow-xs hover:shadow-cyan-500/10"
                            href="mailto:danielsatelpereira@gmail.com"
                            title="Enviar E-mail"
                        >
                            <span className="material-symbols-outlined text-sm text-cyan-700 dark:text-cyan-400">
                                mail
                            </span>
                            danielsatelpereira@gmail.com
                        </a>

                        {/* WhatsApp */}
                        <a
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-emerald-500/20 text-slate-900 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-500 transition-all text-xs font-bold shadow-xs hover:shadow-emerald-500/10"
                            href="https://wa.me/5541999521315"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="WhatsApp"
                        >
                            <span className="material-symbols-outlined text-sm text-emerald-700 dark:text-emerald-400">
                                chat
                            </span>
                            (041) 9 9952-1315
                        </a>

                        {/* GitHub */}
                        <a
                            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/20 text-slate-900 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all shadow-xs hover:shadow-cyan-500/10"
                            href="https://github.com/DanielSatelPereira"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                        >
                            <span className="material-symbols-outlined text-base">
                                code
                            </span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-cyan-500/20 text-slate-900 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all shadow-xs hover:shadow-cyan-500/10"
                            href="https://www.linkedin.com/in/daniel-satel-pereira/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                        >
                            <span className="material-symbols-outlined text-base">
                                work
                            </span>
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-300/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                    {/* Texto de Copyright e Link para Termos/Privacidade */}
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
                        <p>{dict.footer.copyright}</p>
                        <span>•</span>
                        <Link
                            href="/pt/privacidade"
                            className="text-cyan-800 dark:text-cyan-400 hover:underline font-bold"
                        >
                            {dict.footer.privacy || "Termos & Privacidade"}
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-cyan-800 dark:text-cyan-400 font-bold">
                        <span className="size-2 rounded-full bg-emerald-500 animate-ping"></span>
                        {dict.footer.available || "Disponível para novos projetos e oportunidades"}
                    </div>
                </div>
            </div>
        </footer>
    );
}
