import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt", "en"];
const defaultLocale = "pt"; // Idioma de segurança caso o navegador não informe nenhum

function getLocale(request: NextRequest): string {
    // Busca o idioma preferido do navegador do usuário pelo cabeçalho HTTP
    const acceptLanguage = request.headers.get("accept-language");
    
    if (acceptLanguage) {
        // Checa se a preferência do usuário inclui PT ou EN
        if (acceptLanguage.toLowerCase().includes("pt")) return "pt";
        if (acceptLanguage.toLowerCase().includes("en")) return "en";
    }
    
    return defaultLocale;
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Checa se a URL já possui a sigla do idioma (/pt ou /en)
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // Se já tiver (ex: /pt/projetos), deixa passar sem fazer nada
    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    // Se NÃO tiver idioma na URL (ex: acessou apenas "/" ou "/projetos"),
    // descobre qual o idioma do navegador do usuário
    const locale = getLocale(request);
    
    // Redireciona adicionando o idioma na frente (ex: "/" vira "/pt" ou "/en")
    request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    // Ignora TODAS as rotas de API, recursos internos do Next (_next) e arquivos estáticos com extensão (como .png, .js, .css)
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
