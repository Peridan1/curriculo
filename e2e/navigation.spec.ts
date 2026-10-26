import { test, expect } from "@playwright/test";

test.describe("Navegação, Menu Mobile e Temas", () => {
    test("troca de idioma via seletor do Header mantém a rota atual", async ({ page }) => {
        await page.goto("/pt/sobre");
        await expect(page.locator("h1")).toContainText("Sobre Mim");

        const langSelect = page.getByLabel("Selecionar Idioma");
        await langSelect.selectOption("en");

        await expect(page).toHaveURL(/\/en\/sobre/);
        await expect(page.locator("h1")).toContainText("About Me");
    });

    test("alternância entre tema claro e escuro altera a classe do elemento html", async ({ page }) => {
        await page.goto("/pt");

        const themeToggle = page.getByRole("button", { name: /Alternar para Modo/i });
        await expect(themeToggle).toBeVisible();

        const html = page.locator("html");
        const initialClass = await html.getAttribute("class");

        await themeToggle.click();
        const updatedClass = await html.getAttribute("class");

        expect(initialClass).not.toBe(updatedClass);
    });

    test("menu mobile abre e fecha corretamente no viewport mobile", async ({ page, isMobile }) => {
        if (!isMobile) {
            test.skip();
        }

        await page.goto("/pt");

        const menuBtn = page.getByRole("button", { name: /Abrir menu de navegação/i });
        await expect(menuBtn).toBeVisible();
        await expect(menuBtn).toHaveAttribute("aria-expanded", "false");

        // Abre o menu
        await menuBtn.click();
        await expect(menuBtn).toHaveAttribute("aria-expanded", "true");

        const mobileNav = page.locator("#mobile-navigation");
        await expect(mobileNav).toBeVisible();
        await expect(mobileNav.getByRole("link", { name: "Sobre" })).toBeVisible();

        // Fecha com tecla Escape
        await page.keyboard.press("Escape");
        await expect(menuBtn).toHaveAttribute("aria-expanded", "false");
        await expect(mobileNav).not.toBeVisible();

        // Abre novamente e navega para /sobre
        await menuBtn.click();
        await mobileNav.getByRole("link", { name: "Sobre" }).click();
        await expect(page).toHaveURL(/\/pt\/sobre/);
    });
});
