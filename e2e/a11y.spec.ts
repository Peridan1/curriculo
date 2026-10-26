import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Testes E2E de Acessibilidade (A11y) com AxeBuilder
 *
 * Avalia páginas principais nos temas claro e escuro,
 * garantindo zero violações de impacto grave (serious) ou crítico (critical).
 */

const testRoutes = [
  { path: "/pt", name: "Home PT" },
  { path: "/en", name: "Home EN" },
  { path: "/pt/sobre", name: "Sobre PT" },
  { path: "/en/sobre", name: "Sobre EN" },
  { path: "/pt/projetos", name: "Projetos PT" },
  { path: "/pt/curriculo", name: "Currículo PT" },
];

for (const { path, name } of testRoutes) {
  test.describe(`Acessibilidade - ${name} (${path})`, () => {
    test("deve possuir zero violações graves ou críticas no tema claro", async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState("domcontentloaded");

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const criticalOrSerious = results.violations.filter(
        (v) => v.impact === "critical" || v.impact === "serious"
      );

      expect(criticalOrSerious, JSON.stringify(criticalOrSerious, null, 2)).toEqual([]);
    });

    test("deve possuir zero violações graves ou críticas no tema escuro", async ({ page }) => {
      await page.emulateMedia({ colorScheme: "dark" });
      await page.goto(path);
      await page.waitForLoadState("domcontentloaded");

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const criticalOrSerious = results.violations.filter(
        (v) => v.impact === "critical" || v.impact === "serious"
      );

      expect(criticalOrSerious, JSON.stringify(criticalOrSerious, null, 2)).toEqual([]);
    });
  });
}
