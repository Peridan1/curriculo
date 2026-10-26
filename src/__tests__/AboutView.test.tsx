import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutView from "../components/AboutView";
import ptDict from "../dictionaries/pt.json";

describe("<AboutView />", () => {
    it("renderiza o cabeçalho, história e homenagem a Thiago Dalfito", () => {
        render(<AboutView dict={ptDict} lang="pt" />);

        expect(screen.getByText("Sobre Mim")).toBeInTheDocument();
        expect(screen.getByText(ptDict.aboutPage.story.tributeTitle)).toBeInTheDocument();
        expect(screen.getByText(new RegExp(ptDict.aboutPage.story.tributeText))).toBeInTheDocument();
    });

    it("renderiza os itens da jornada tecnológica com as âncoras correspondentes", () => {
        const { container } = render(<AboutView dict={ptDict} lang="pt" />);

        expect(container.querySelector("#tech-hardware")).toBeInTheDocument();
        expect(container.querySelector("#tech-php")).toBeInTheDocument();
        expect(container.querySelector("#tech-docker")).toBeInTheDocument();
        expect(container.querySelector("#tech-frontend")).toBeInTheDocument();
        expect(container.querySelector("#tech-python")).toBeInTheDocument();
        expect(container.querySelector("#tech-tailwind")).toBeInTheDocument();
    });

    it("renderiza a seção de hobbies e o link externo para a playlist no YouTube Music", () => {
        render(<AboutView dict={ptDict} lang="pt" />);

        expect(screen.getByText("Hobbies & Universo Pessoal")).toBeInTheDocument();
        expect(screen.getByText("League of Legends")).toBeInTheDocument();
        expect(screen.getByText("Hollow Knight")).toBeInTheDocument();

        const playlistLink = screen.getByRole("link", { name: new RegExp(ptDict.aboutPage.hobbies.music.playlistButton) });
        expect(playlistLink).toHaveAttribute("href", ptDict.aboutPage.hobbies.music.playlistUrl);
        expect(playlistLink).toHaveAttribute("target", "_blank");
    });

    it("renderiza a matriz tecnológica conectando projetos e tags", () => {
        render(<AboutView dict={ptDict} lang="pt" />);

        expect(screen.getByText("Matriz de Projetos & Tecnologias")).toBeInTheDocument();
        expect(screen.getAllByRole("link", { name: new RegExp(ptDict.aboutPage.techMatrix.viewProject) }).length).toBeGreaterThan(0);
    });
});
