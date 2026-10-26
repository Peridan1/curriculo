import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLocaleFromHeader } from "./lib/locale";

const locales = ["pt", "en"];

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
    // descobre qual o idioma preferido do usuário respeitando o peso q
    const locale = getLocaleFromHeader(request.headers.get("accept-language"));
    
    // Redireciona adicionando o idioma na frente (ex: "/" vira "/pt" ou "/en")
    request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    // Ignora TODAS as rotas de API, recursos internos do Next (_next), robôs/sitemaps e arquivos estáticos com extensão
    matcher: ['/((?!api|_next|robots\\.txt|sitemap\\.xml|manifest\\.webmanifest|.*\\..*).*)']
};
