import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import CookieBanner from "../components/CookieBanner";
import ptDict from "../dictionaries/pt.json";

describe("<CookieBanner />", () => {
    beforeEach(() => {
        vi.useFakeTimers();
        localStorage.clear();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("aparece após o timeout inicial se não houver consentimento prévio", () => {
        render(<CookieBanner dict={ptDict} lang="pt" />);

        expect(screen.queryByRole("complementary", { name: /Aviso de Cookies/i })).not.toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(1500);
        });

        expect(screen.getByRole("complementary", { name: /Aviso de Cookies/i })).toBeInTheDocument();
        expect(screen.getByText(ptDict.cookieBanner.text)).toBeInTheDocument();
    });

    it("salva 'accepted' no localStorage e desaparece ao clicar no botão de aceitar", () => {
        render(<CookieBanner dict={ptDict} lang="pt" />);

        act(() => {
            vi.advanceTimersByTime(1500);
        });

        const acceptButton = screen.getByRole("button", { name: ptDict.cookieBanner.accept });
        fireEvent.click(acceptButton);

        expect(localStorage.getItem("cookie_consent")).toBe("accepted");
        expect(screen.queryByRole("complementary", { name: /Aviso de Cookies/i })).not.toBeInTheDocument();
    });

    it("não renderiza se 'cookie_consent' já estiver presente no localStorage", () => {
        localStorage.setItem("cookie_consent", "accepted");
        render(<CookieBanner dict={ptDict} lang="pt" />);

        act(() => {
            vi.advanceTimersByTime(2000);
        });

        expect(screen.queryByRole("complementary", { name: /Aviso de Cookies/i })).not.toBeInTheDocument();
    });
});
