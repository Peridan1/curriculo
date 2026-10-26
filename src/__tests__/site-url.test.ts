import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getSiteUrl } from "../lib/site-url";

describe("getSiteUrl", () => {
    const originalEnv = process.env;

    beforeEach(() => {
        process.env = { ...originalEnv };
    });

    afterEach(() => {
        process.env = originalEnv;
    });

    it("lança erro se NEXT_PUBLIC_SITE_URL não estiver definida", () => {
        delete process.env.NEXT_PUBLIC_SITE_URL;
        expect(() => getSiteUrl()).toThrowError(/NEXT_PUBLIC_SITE_URL não definida/);
    });

    it("lança erro se NEXT_PUBLIC_SITE_URL for string vazia ou apenas espaços", () => {
        process.env.NEXT_PUBLIC_SITE_URL = "   ";
        expect(() => getSiteUrl()).toThrowError(/NEXT_PUBLIC_SITE_URL não definida/);
    });

    it("lança erro se NEXT_PUBLIC_SITE_URL não for uma URL válida", () => {
        process.env.NEXT_PUBLIC_SITE_URL = "not-a-valid-url";
        expect(() => getSiteUrl()).toThrowError(/NEXT_PUBLIC_SITE_URL inválida/);
    });

    it("remove a barra final da URL se informada", () => {
        process.env.NEXT_PUBLIC_SITE_URL = "https://peridev.com.br/";
        expect(getSiteUrl()).toBe("https://peridev.com.br");
    });

    it("retorna a URL sem alteração quando não tem barra final", () => {
        process.env.NEXT_PUBLIC_SITE_URL = "https://peridev.com.br";
        expect(getSiteUrl()).toBe("https://peridev.com.br");
    });

    it("permite http://localhost em ambiente de desenvolvimento", () => {
        (process.env as Record<string, string | undefined>).NODE_ENV = "development";
        process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000";
        expect(getSiteUrl()).toBe("http://localhost:3000");
    });

    it("lança erro se usar http:// em produção", () => {
        (process.env as Record<string, string | undefined>).NODE_ENV = "production";
        process.env.NEXT_PUBLIC_SITE_URL = "http://peridev.com.br";
        expect(() => getSiteUrl()).toThrowError(/deve utilizar o protocolo https:\/\//);
    });

    it("permite https:// em ambiente de produção", () => {
        (process.env as Record<string, string | undefined>).NODE_ENV = "production";
        process.env.NEXT_PUBLIC_SITE_URL = "https://peridev.com.br";
        expect(getSiteUrl()).toBe("https://peridev.com.br");
    });
});
