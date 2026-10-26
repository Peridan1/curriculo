import { test, expect } from "@playwright/test";

test.describe("Rotas Principais e Redirecionamentos", () => {
    test("acesso à raiz '/' redireciona para '/pt' com locale padrão", async ({ page }) => {
        await page.goto("/");
        await expect(page).toHaveURL(/\/pt/);
    });

    test("carrega a Home Page em Português (/pt)", async ({ page }) => {
        await page.goto("/pt");
        await expect(page.locator("h1")).toContainText(/Daniel Satel Pereira/i);
    });

    test("carrega a Home Page em Inglês (/en)", async ({ page }) => {
        await page.goto("/en");
        await expect(page.locator("h1")).toContainText(/Daniel Satel Pereira/i);
    });

    test("carrega a Página Sobre (/pt/sobre)", async ({ page }) => {
        await page.goto("/pt/sobre");
        await expect(page.locator("h1")).toContainText("Sobre Mim");
        await expect(page.getByText(/Thiago Dalfito/i)).toBeVisible();
    });

    test("carrega a Página Sobre em Inglês (/en/sobre)", async ({ page }) => {
        await page.goto("/en/sobre");
        await expect(page.locator("h1")).toContainText("About Me");
    });

    test("carrega a página do Currículo (/pt/curriculo)", async ({ page }) => {
        await page.goto("/pt/curriculo");
        await expect(page.getByRole("heading", { name: "Currículo Profissional" })).toBeVisible();
    });

    test("carrega a galeria de projetos (/pt/projetos)", async ({ page }) => {
        await page.goto("/pt/projetos");
        await expect(page.locator("h1")).toContainText("Portfólio de Projetos");
    });

    test("carrega a página de privacidade (/pt/privacidade)", async ({ page }) => {
        await page.goto("/pt/privacidade");
        await expect(page.locator("h1")).toContainText(/Termos de Uso e Política de Privacidade/i);
    });

    test("carrega um projeto existente com sucesso (/pt/projetos/brisamar-pescados)", async ({ page }) => {
        await page.goto("/pt/projetos/brisamar-pescados");
        await expect(page.locator("h1")).toContainText(/Brisamar Pescados/i);
    });

    test("retorna status 404 para slug de projeto inexistente (/pt/projetos/slug-invalido-xyz)", async ({ page }) => {
        const response = await page.goto("/pt/projetos/slug-invalido-xyz");
        expect(response?.status()).toBe(404);
    });

    test("retorna status 404 para idioma inválido (/fr/sobre)", async ({ page }) => {
        const response = await page.goto("/fr/sobre");
        expect(response?.status()).toBe(404);
    });
});
