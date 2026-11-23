/**
 * TechAmbientBackground
 * 
 * Server Component puro (sem 'use client') para renderização de fundo tecnológico leve (< 5 KB),
 * acelerado por GPU e perfeitamente integrado aos temas claro e escuro via variáveis CSS nativas.
 * Possui 'print:hidden' para evitar artefatos ao imprimir o currículo e 'aria-hidden' para acessibilidade.
 */
export default function TechAmbientBackground() {
    return (
        <div
            className="fixed inset-0 pointer-events-none -z-10 overflow-hidden print:hidden select-none"
            aria-hidden="true"
        >
            <div className="tech-bg-container w-full h-full relative">
                <svg
                    className="w-full h-full object-cover"
                    viewBox="0 0 1440 900"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        {/* Gradientes sutis utilizando variáveis nativas do Design System */}
                        <linearGradient id="busLineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--cyan-neon)" stopOpacity="0.08" />
                            <stop offset="50%" stopColor="var(--emerald-neon)" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="var(--cyan-neon)" stopOpacity="0.02" />
                        </linearGradient>

                        <linearGradient id="busLineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="var(--purple-neon)" stopOpacity="0.06" />
                            <stop offset="100%" stopColor="var(--cyan-neon)" stopOpacity="0.02" />
                        </linearGradient>

                        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="var(--cyan-neon)" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* Trilhas de barramento / Circuit Traces */}
                    <g className="tech-traces" strokeWidth="1.2">
                        {/* Trilha Superior Esquerda */}
                        <path
                            d="M -50 180 L 220 180 L 310 270 L 520 270"
                            stroke="url(#busLineGrad1)"
                            strokeDasharray="6 4"
                        />
                        <circle cx="520" cy="270" r="3" fill="var(--cyan-neon)" opacity="0.3" />

                        {/* Trilha Superior Direita */}
                        <path
                            d="M 1490 120 L 1200 120 L 1090 230 L 890 230"
                            stroke="url(#busLineGrad2)"
                            strokeDasharray="8 6"
                        />
                        <circle cx="890" cy="230" r="3.5" fill="var(--emerald-neon)" opacity="0.3" />

                        {/* Trilha Central Inferior */}
                        <path
                            d="M 280 950 L 450 780 L 780 780 L 880 880 L 1150 880"
                            stroke="url(#busLineGrad1)"
                        />
                        <circle cx="780" cy="780" r="3" fill="var(--purple-neon)" opacity="0.25" />

                        {/* Linhas diagonais discretas */}
                        <path
                            d="M 120 700 L 260 840 L 400 840"
                            stroke="url(#busLineGrad2)"
                            strokeDasharray="4 4"
                        />
                        <path
                            d="M 1350 620 L 1220 750 L 1020 750"
                            stroke="url(#busLineGrad1)"
                            strokeDasharray="6 6"
                        />
                    </g>

                    {/* Glifos de Código & Notações Tecnológicas */}
                    <g
                        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                        fontWeight="700"
                        className="tech-glyphs"
                    >
                        {/* Glifo </> */}
                        <text
                            x="180"
                            y="340"
                            fontSize="28"
                            fill="var(--cyan-neon)"
                            className="tech-glyph-float-1"
                            opacity="0.12"
                        >
                            &lt;/&gt;
                        </text>

                        {/* Glifo { } */}
                        <text
                            x="1260"
                            y="420"
                            fontSize="32"
                            fill="var(--emerald-neon)"
                            className="tech-glyph-float-2"
                            opacity="0.10"
                        >
                            &#123; &#125;
                        </text>

                        {/* Glifo Binário 0101 */}
                        <text
                            x="820"
                            y="140"
                            fontSize="16"
                            letterSpacing="4"
                            fill="var(--cyan-neon)"
                            className="tech-glyph-pulse"
                            opacity="0.08"
                        >
                            01010011
                        </text>

                        {/* Glifo Terminal Prompt $ _ */}
                        <text
                            x="320"
                            y="680"
                            fontSize="24"
                            fill="var(--emerald-neon)"
                            className="tech-glyph-float-2"
                            opacity="0.10"
                        >
                            $ _
                        </text>

                        {/* Glifo Arrow Function => */}
                        <text
                            x="1100"
                            y="640"
                            fontSize="22"
                            fill="var(--purple-neon)"
                            className="tech-glyph-float-1"
                            opacity="0.10"
                        >
                            =&gt;
                        </text>

                        {/* Glifo Comentário de Código // */}
                        <text
                            x="640"
                            y="860"
                            fontSize="20"
                            fill="var(--cyan-neon)"
                            className="tech-glyph-pulse"
                            opacity="0.08"
                        >
                            {"// clean-code"}
                        </text>
                    </g>

                    {/* Nós de pulsação luminosa (Nodes) */}
                    <circle cx="310" cy="270" r="40" fill="url(#nodeGlow)" />
                    <circle cx="1090" cy="230" r="50" fill="url(#nodeGlow)" />
                </svg>
            </div>
        </div>
    );
}
