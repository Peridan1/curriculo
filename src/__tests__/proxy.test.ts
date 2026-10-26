import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { proxy } from "../proxy";

describe("proxy middleware", () => {
    it("permite a requisição passar quando a URL já possui o prefixo de idioma /pt/", () => {
        const req = new NextRequest("http://localhost:3000/pt/projetos");
        const res = proxy(req);
        expect(res.headers.get("location")).toBeNull();
    });

    it("permite a requisição passar quando a URL é exatamente /pt ou /en", () => {
        const reqPt = new NextRequest("http://localhost:3000/pt");
        expect(proxy(reqPt).headers.get("location")).toBeNull();

        const reqEn = new NextRequest("http://localhost:3000/en");
        expect(proxy(reqEn).headers.get("location")).toBeNull();
    });

    it("redireciona a raiz '/' para '/pt' por padrão quando não há cabeçalho de idioma", () => {
        const req = new NextRequest("http://localhost:3000/");
        const res = proxy(req);
        expect(res.status).toBe(307);
        expect(res.headers.get("location")).toBe("http://localhost:3000/pt");
    });

    it("redireciona a raiz '/' para '/en' quando o cabeçalho Accept-Language prioriza inglês", () => {
        const req = new NextRequest("http://localhost:3000/", {
            headers: {
                "accept-language": "en-US,en;q=0.9,pt;q=0.8",
            },
        });
        const res = proxy(req);
        expect(res.status).toBe(307);
        expect(res.headers.get("location")).toBe("http://localhost:3000/en");
    });

    it("redireciona rotas sem idioma preservando o caminho da página (ex: /projetos -> /pt/projetos)", () => {
        const req = new NextRequest("http://localhost:3000/projetos");
        const res = proxy(req);
        expect(res.status).toBe(307);
        expect(res.headers.get("location")).toBe("http://localhost:3000/pt/projetos");
    });

    it("redireciona para /en/projetos quando idioma preferido for inglês", () => {
        const req = new NextRequest("http://localhost:3000/projetos", {
            headers: {
                "accept-language": "en-US,en;q=0.9",
            },
        });
        const res = proxy(req);
        expect(res.status).toBe(307);
        expect(res.headers.get("location")).toBe("http://localhost:3000/en/projetos");
    });
});
