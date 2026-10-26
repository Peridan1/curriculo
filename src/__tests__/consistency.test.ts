import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import ptDict from "../dictionaries/pt.json";
import enDict from "../dictionaries/en.json";
import sitemap from "../app/sitemap";
import { GET as getLlms } from "../app/llms.txt/route";
import { GET as getLlmsFull } from "../app/llms-full.txt/route";

describe("Testes de Consistência e Integridade do Projeto", () => {
    it("mantém 100% de simetria de chaves entre os dicionários pt.json e en.json", () => {
        function checkParity(objA: Record<string, any>, objB: Record<string, any>, currentPath = "") {
            for (const key of Object.keys(objA)) {
                const subPath = currentPath ? `${currentPath}.${key}` : key;
                expect(key in objB, `Chave ${subPath} presente no primeiro objeto mas ausente no segundo`).toBe(true);
                
                const valA = objA[key];
                const valB = objB[key];
                const typeA = Array.isArray(valA) ? "array" : typeof valA;
                const typeB = Array.isArray(valB) ? "array" : typeof valB;

                expect(typeA, `Tipo divergente na chave ${subPath}`).toBe(typeB);
                if (typeA === "object" && valA !== null && valB !== null) {
                    checkParity(valA, valB, subPath);
                }
            }
        }

        checkParity(ptDict, enDict);
        checkParity(enDict, ptDict);
    });

    it("garante que todo projeto em projectsData possui imagem física existente em public/images/projects", () => {
        const projectSlugs = Object.keys(ptDict.projectsData);
        expect(projectSlugs.length).toBe(11);

        for (const slug of projectSlugs) {
            const project = (ptDict.projectsData as Record<string, any>)[slug];
            if (project.image) {
                const relativePath = project.image.replace(/^\//, "");
                const fullPath = path.resolve(process.cwd(), "public", relativePath.replace(/^public\//, ""));
                expect(fs.existsSync(fullPath), `Imagem não encontrada para projeto ${slug}: ${fullPath}`).toBe(true);
            }
        }
    });

    it("garante que sitemap.ts inclui todas as rotas canônicas e todos os 11 slugs em ambos os idiomas", () => {
        const routes = sitemap();
        const urls = routes.map((r) => r.url);
        const slugs = Object.keys(ptDict.projectsData);

        // Rotas principais em PT e EN
        expect(urls.some((u) => u.endsWith("/pt"))).toBe(true);
        expect(urls.some((u) => u.endsWith("/en"))).toBe(true);
        expect(urls.some((u) => u.endsWith("/pt/sobre"))).toBe(true);
        expect(urls.some((u) => u.endsWith("/en/sobre"))).toBe(true);
        expect(urls.some((u) => u.endsWith("/pt/curriculo"))).toBe(true);
        expect(urls.some((u) => u.endsWith("/en/curriculo"))).toBe(true);
        expect(urls.some((u) => u.endsWith("/pt/projetos"))).toBe(true);
        expect(urls.some((u) => u.endsWith("/en/projetos"))).toBe(true);
        expect(urls.some((u) => u.endsWith("/pt/privacidade"))).toBe(true);
        expect(urls.some((u) => u.endsWith("/en/privacidade"))).toBe(true);

        // Todos os slugs de projetos nos dois idiomas
        for (const slug of slugs) {
            expect(urls.some((u) => u.endsWith(`/pt/projetos/${slug}`)), `Falta slug PT: ${slug}`).toBe(true);
            expect(urls.some((u) => u.endsWith(`/en/projetos/${slug}`)), `Falta slug EN: ${slug}`).toBe(true);
        }
    });

    it("garante que os route handlers /llms.txt e /llms-full.txt contêm todos os projetos e URLs dinâmicas", async () => {
        const resLlms = await getLlms();
        const textLlms = await resLlms.text();

        const resFull = await getLlmsFull();
        const textFull = await resFull.text();

        const slugs = Object.keys(ptDict.projectsData);
        for (const slug of slugs) {
            expect(textLlms.includes(`/pt/projetos/${slug}`), `llms.txt não cita projeto ${slug}`).toBe(true);
            expect(textFull.includes(`/pt/projetos/${slug}`), `llms-full.txt não cita projeto ${slug}`).toBe(true);
        }

        expect(textLlms.includes("/pt/sobre")).toBe(true);
        expect(textFull.includes("/pt/sobre")).toBe(true);
    });
});
