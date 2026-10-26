import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./vitest.setup.ts"],
        include: ["src/**/*.{test,spec}.{ts,tsx}"],
        exclude: ["node_modules", "e2e/**", "dist/**", ".next/**"],
        env: {
            NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
        },
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
            include: ["src/**/*.{ts,tsx}"],
            exclude: [
                "src/**/__tests__/**",
                "src/components/icons/**",
                "src/**/*.d.ts",
            ],
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
