import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import ptDict from "../dictionaries/pt.json";

describe("<Header />", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renderiza a logo e os links de navegação principais no desktop", () => {
        render(<Header dict={ptDict} />);

        expect(screen.getByText("Peridan")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Início" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Sobre" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Projetos" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Currículo/i })).toBeInTheDocument();
    });

    it("abre o menu mobile ao clicar no botão hambúrguer", () => {
        render(<Header dict={ptDict} />);

        const menuButton = screen.getByRole("button", { name: /Abrir menu de navegação/i });
        expect(menuButton).toHaveAttribute("aria-expanded", "false");

        // Clica para abrir
        fireEvent.click(menuButton);
        expect(menuButton).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByRole("navigation", { name: /Navegação mobile/i })).toBeInTheDocument();
    });

    it("fecha o menu mobile ao pressionar a tecla Escape", () => {
        render(<Header dict={ptDict} />);

        const menuButton = screen.getByRole("button", { name: /Abrir menu de navegação/i });
        fireEvent.click(menuButton);
        expect(menuButton).toHaveAttribute("aria-expanded", "true");

        // Pressiona Escape
        fireEvent.keyDown(window, { key: "Escape" });
        expect(menuButton).toHaveAttribute("aria-expanded", "false");
    });

    it("fecha o menu mobile ao clicar em um link interno", () => {
        render(<Header dict={ptDict} />);

        const menuButton = screen.getByRole("button", { name: /Abrir menu de navegação/i });
        fireEvent.click(menuButton);

        const mobileNav = screen.getByRole("navigation", { name: /Navegação mobile/i });
        const sobreLink = mobileNav.querySelector("a[href='/pt/sobre']");
        expect(sobreLink).toBeInTheDocument();

        if (sobreLink) {
            fireEvent.click(sobreLink);
        }

        expect(menuButton).toHaveAttribute("aria-expanded", "false");
    });

    it("permite selecionar outro idioma através do select chamando router.push", () => {
        const router = useRouter();
        render(<Header dict={ptDict} />);

        const select = screen.getByLabelText("Selecionar Idioma");
        expect(select).toBeInTheDocument();

        fireEvent.change(select, { target: { value: "en" } });
        expect(router.push).toHaveBeenCalledWith("/en");
    });
});
