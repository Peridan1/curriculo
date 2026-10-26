import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./e2e",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ["list"],
        ["html", { outputFolder: "playwright-report", open: "never" }],
    ],
    use: {
        baseURL: "http://localhost:3000",
        locale: "pt-BR",
        trace: "on-first-retry",
    },
    projects: [
        {
            name: "Desktop Chrome",
            use: { ...devices["Desktop Chrome"] },
        },
        {
            name: "Mobile Chrome (Pixel 5)",
            use: { ...devices["Pixel 5"] },
        },
    ],
    webServer: {
        command: "npm run dev",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
        env: {
            NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
        },
    },
});
