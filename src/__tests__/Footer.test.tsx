import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import ptDict from "../dictionaries/pt.json";

describe("<Footer />", () => {
    it("renderiza o copyright e os links rápidos com o idioma correto", () => {
        render(<Footer dict={ptDict} lang="pt" />);

        expect(screen.getByText(ptDict.footer.copyright)).toBeInTheDocument();
        expect(screen.getByText(ptDict.footer.quickLinks)).toBeInTheDocument();

        const privacyLink = screen.getByRole("link", { name: ptDict.footer.privacy });
        expect(privacyLink).toHaveAttribute("href", "/pt/privacidade");

        const sobreLink = screen.getByRole("link", { name: "Sobre" });
        expect(sobreLink).toHaveAttribute("href", "/pt/sobre");
    });

    it("ajusta o link de privacidade para /en/privacidade quando lang for 'en'", () => {
        render(<Footer dict={ptDict} lang="en" />);

        const privacyLink = screen.getByRole("link", { name: ptDict.footer.privacy });
        expect(privacyLink).toHaveAttribute("href", "/en/privacidade");
    });
});
