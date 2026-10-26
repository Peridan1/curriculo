import { describe, it, expect } from "vitest";
import { getLocaleFromHeader } from "../lib/locale";

describe("getLocaleFromHeader", () => {
    it("retorna 'pt' como padrão se o cabeçalho for nulo, indefinido ou vazio", () => {
        expect(getLocaleFromHeader(null)).toBe("pt");
        expect(getLocaleFromHeader(undefined)).toBe("pt");
        expect(getLocaleFromHeader("")).toBe("pt");
        expect(getLocaleFromHeader("   ")).toBe("pt");
    });

    it("retorna 'en' quando en tem prioridade mais alta pelo peso q", () => {
        expect(getLocaleFromHeader("en-US,en;q=0.9,pt;q=0.8")).toBe("en");
    });

    it("retorna 'pt' quando pt tem prioridade mais alta pelo peso q", () => {
        expect(getLocaleFromHeader("en;q=0.7,pt-BR;q=0.9,pt;q=0.8")).toBe("pt");
    });

    it("retorna o idioma que aparece primeiro se os pesos forem iguais", () => {
        expect(getLocaleFromHeader("pt-BR,pt;q=0.9,en-US;q=0.9")).toBe("pt");
        expect(getLocaleFromHeader("en-US,en;q=0.9,pt-BR;q=0.9")).toBe("en");
    });

    it("retorna 'pt' como fallback quando o idioma requisitado não for suportado", () => {
        expect(getLocaleFromHeader("fr-FR,fr;q=0.9,de;q=0.8")).toBe("pt");
        expect(getLocaleFromHeader("es-ES,es;q=0.9,it;q=0.8")).toBe("pt");
    });

    it("lida corretamente com formatos malformados de peso q sem quebrar", () => {
        expect(getLocaleFromHeader("en;q=invalid,pt;q=0.5")).toBe("en");
        expect(getLocaleFromHeader("pt;q=notanumber,en;q=0.2")).toBe("pt");
    });

    it("reconhece variantes regionais como pt-PT e en-GB", () => {
        expect(getLocaleFromHeader("pt-PT;q=1.0")).toBe("pt");
        expect(getLocaleFromHeader("en-GB;q=1.0")).toBe("en");
    });
});
