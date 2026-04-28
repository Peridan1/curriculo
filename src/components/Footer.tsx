// 1. Contrato com o TypeScript
interface FooterProps {
    dict: {
        footer: {
            copyright: string;
        };
    };
}

export default function Footer({ dict }: FooterProps) {
    return (
        <footer className="bg-charcoal py-12 border-t border-white/10">
            <div className="max-w-300 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logo Padronizada */}
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-sm">
                            terminal
                        </span>
                    </div>
                    <h2 className="text-pop-yellow text-lg font-bold">
                        Peridan<span className="text-white">.dev</span>
                    </h2>
                </div>

                {/* Texto de Copyright Dinâmico */}
                <p className="text-white/40 text-sm text-center">
                    {dict.footer.copyright}
                </p>

                {/* Links de Contato Reais */}
                <div className="flex items-center gap-6">
                    {/* E-mail */}
                    <a
                        className="text-pop-orange hover:text-pop-yellow transition-colors"
                        href="mailto:danielsatelpereira@gmail.com"
                        title="Enviar E-mail"
                    >
                        <span className="material-symbols-outlined">mail</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        className="text-pop-orange hover:text-pop-yellow transition-colors"
                        href="https://www.linkedin.com/in/daniel-satel-pereira/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <span className="material-symbols-outlined">work</span>
                    </a>

                    {/* Instagram */}
                    <a
                        className="text-pop-orange hover:text-pop-yellow transition-colors"
                        href="https://www.instagram.com/daniel_satel_pereira/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                    >
                        <span className="material-symbols-outlined">
                            photo_camera
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
