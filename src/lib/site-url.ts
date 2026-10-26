/**
 * Helper para obtenção e validação estrita da URL base do site.
 * 
 * Regras:
 * 1. Lê a variável pública NEXT_PUBLIC_SITE_URL.
 * 2. Lança erro se a variável não estiver definida ou estiver vazia.
 * 3. Valida se é uma URL válida (exige https:// em ambiente de produção).
 * 4. Remove barra final caso informada.
 * 5. Não possui fallback para domínios fora do controle do usuário.
 */
export function getSiteUrl(): string {
    const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

    if (!rawUrl) {
        throw new Error(
            "Variável de ambiente NEXT_PUBLIC_SITE_URL não definida. Configure uma URL válida (ex: https://peridev.com.br ou http://localhost:3000)."
        );
    }

    let parsed: URL;
    try {
        parsed = new URL(rawUrl);
    } catch {
        throw new Error(`NEXT_PUBLIC_SITE_URL inválida: "${rawUrl}". Deve ser uma URL completa.`);
    }

    if (process.env.NODE_ENV === "production" && parsed.protocol !== "https:") {
        throw new Error(
            `NEXT_PUBLIC_SITE_URL em produção deve utilizar o protocolo https://. Recebido: "${rawUrl}"`
        );
    }

    return rawUrl.replace(/\/+$/, "");
}
