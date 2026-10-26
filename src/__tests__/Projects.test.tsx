import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Projects from "../components/Projects";
import ptDict from "../dictionaries/pt.json";

describe("<Projects />", () => {
    it("renderiza a seção de projetos e os cards de destaque", () => {
        render(<Projects dict={ptDict} lang="pt" />);

        expect(screen.getByText(ptDict.projectsSection.title)).toBeInTheDocument();
        expect(screen.getByText("Brisamar Pescados • Catálogo & E-commerce")).toBeInTheDocument();
        expect(screen.getByText("JF Informática e Games • Assistência Técnica")).toBeInTheDocument();
    });

    it("exibe badges de status com rótulos do dicionário", () => {
        render(<Projects dict={ptDict} lang="pt" />);

        expect(screen.getAllByText(ptDict.projectsSection.status.live).length).toBeGreaterThan(0);
        expect(screen.getAllByText(ptDict.projectsSection.status.internal).length).toBeGreaterThan(0);
    });

    it("permite rolar horizontalmente através dos botões de controle", () => {
        render(<Projects dict={ptDict} lang="pt" />);

        const prevBtn = screen.getByRole("button", { name: /Rolar para a esquerda/i });
        const nextBtn = screen.getByRole("button", { name: /Rolar para a direita/i });

        expect(prevBtn).toBeInTheDocument();
        expect(nextBtn).toBeInTheDocument();

        fireEvent.click(nextBtn);
        fireEvent.click(prevBtn);
    });
});
