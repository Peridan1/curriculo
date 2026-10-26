/**
 * Função pura para detecção de preferência de idioma a partir do cabeçalho Accept-Language.
 * 
 * Regras:
 * 1. Respeita a ordem de preferência e os pesos ponderados 'q' (ex: q=0.9).
 * 2. Suporta pt, pt-BR, en, en-US, etc.
 * 3. Retorna 'pt' como padrão caso o cabeçalho não exista ou nenhum idioma suportado seja encontrado.
 */
export function getLocaleFromHeader(acceptLanguage: string | null | undefined): "pt" | "en" {
    if (!acceptLanguage || !acceptLanguage.trim()) {
        return "pt";
    }

    // Processa os itens separados por vírgula
    const entries = acceptLanguage
        .split(",")
        .map((item) => {
            const parts = item.trim().split(";");
            const langCode = parts[0].trim().toLowerCase();
            let q = 1.0;

            for (let i = 1; i < parts.length; i++) {
                const param = parts[i].trim();
                if (param.startsWith("q=")) {
                    const parsedQ = parseFloat(param.slice(2));
                    if (!isNaN(parsedQ)) {
                        q = parsedQ;
                    }
                }
            }

            return { lang: langCode, q };
        })
        .filter((entry) => entry.lang.length > 0)
        // Ordena de forma decrescente pelo peso q
        .sort((a, b) => b.q - a.q);

    for (const entry of entries) {
        if (entry.lang === "pt" || entry.lang.startsWith("pt-")) {
            return "pt";
        }
        if (entry.lang === "en" || entry.lang.startsWith("en-")) {
            return "en";
        }
    }

    return "pt";
}
