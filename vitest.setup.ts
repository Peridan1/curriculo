import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Mock de localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: vi.fn((key: string) => store[key] || null),
        setItem: vi.fn((key: string, value: string) => {
            store[key] = value.toString();
        }),
        removeItem: vi.fn((key: string) => {
            delete store[key];
        }),
        clear: vi.fn(() => {
            store = {};
        }),
    };
})();

Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
    writable: true,
});

// Mock de matchMedia
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

// Mock de scrollBy e scrollTo para JSDOM
Element.prototype.scrollBy = vi.fn();
Element.prototype.scrollTo = vi.fn();

// Mock de next/navigation
const mockRouter = {
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
};

vi.mock("next/navigation", () => ({
    useRouter: () => mockRouter,
    usePathname: () => "/pt",
    useSearchParams: () => new URLSearchParams(),
    notFound: vi.fn(() => {
        throw new Error("NEXT_NOT_FOUND");
    }),
}));

// Mock de next-themes
vi.mock("next-themes", () => ({
    useTheme: () => ({
        theme: "dark",
        resolvedTheme: "dark",
        setTheme: vi.fn(),
    }),
    ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));
