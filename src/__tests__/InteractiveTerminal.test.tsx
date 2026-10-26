import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import InteractiveTerminal from "../components/InteractiveTerminal";
import ptDict from "../dictionaries/pt.json";

function executeCmd(input: HTMLElement, cmd: string) {
    fireEvent.change(input, { target: { value: cmd } });
    fireEvent.submit(input.closest("form")!);
}

describe("<InteractiveTerminal />", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("renderiza a mensagem de boas-vindas e o input", () => {
        render(<InteractiveTerminal dict={ptDict} lang="pt" />);

        expect(screen.getByText(ptDict.homePage.terminal.welcome)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(ptDict.homePage.terminal.inputPlaceholder)).toBeInTheDocument();
    });

    it("executa o comando 'help' ao submeter o formulário", () => {
        render(<InteractiveTerminal dict={ptDict} lang="pt" />);

        const input = screen.getByPlaceholderText(ptDict.homePage.terminal.inputPlaceholder);
        executeCmd(input, "help");

        expect(screen.getByText(/Comandos disponíveis/i)).toBeInTheDocument();
    });

    it("executa o comando 'whoami' e seus aliases ('bio', 'sobre')", () => {
        render(<InteractiveTerminal dict={ptDict} lang="pt" />);

        const input = screen.getByPlaceholderText(ptDict.homePage.terminal.inputPlaceholder);
        executeCmd(input, "whoami");

        expect(screen.getByText(/Daniel Satel Pereira \(Peridan\)/i)).toBeInTheDocument();
    });

    it("executa o comando 'projects' e renderiza link para hub de projetos", () => {
        render(<InteractiveTerminal dict={ptDict} lang="pt" />);

        const input = screen.getByPlaceholderText(ptDict.homePage.terminal.inputPlaceholder);
        executeCmd(input, "projects");

        expect(screen.getByText(/Principais projetos em destaque/i)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Ir para o Hub de Projetos/i })).toBeInTheDocument();
    });

    it("executa o comando 'curriculo' e agenda redirecionamento com timer", () => {
        render(<InteractiveTerminal dict={ptDict} lang="pt" />);

        const input = screen.getByPlaceholderText(ptDict.homePage.terminal.inputPlaceholder);
        executeCmd(input, "curriculo");

        expect(screen.getByText(ptDict.homePage.terminal.curriculoText)).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(1200);
        });
    });

    it("executa atalhos clicáveis rápidos (ex: skills)", () => {
        render(<InteractiveTerminal dict={ptDict} lang="pt" />);

        const skillsShortcut = screen.getByRole("button", { name: "$skills" });
        fireEvent.click(skillsShortcut);

        expect(screen.getByText(/Backend: PHP 8\+/i)).toBeInTheDocument();
    });

    it("exibe menu de curiosidades ao digitar 'curiosidades' ou 'trivia'", () => {
        render(<InteractiveTerminal dict={ptDict} lang="pt" />);

        const input = screen.getByPlaceholderText(ptDict.homePage.terminal.inputPlaceholder);
        executeCmd(input, "curiosidades");

        expect(screen.getByText(/CURIOSIDADES & UNIVERSO PESSOAL/i)).toBeInTheDocument();
    });

    it("exibe easter egg ao digitar '42'", () => {
        render(<InteractiveTerminal dict={ptDict} lang="pt" />);

        const input = screen.getByPlaceholderText(ptDict.homePage.terminal.inputPlaceholder);
        executeCmd(input, "42");

        expect(screen.getByText(/A Resposta Fundamental para a Vida/i)).toBeInTheDocument();
    });

    it("exibe mensagem de comando desconhecido ao digitar comando inválido", () => {
        render(<InteractiveTerminal dict={ptDict} lang="pt" />);

        const input = screen.getByPlaceholderText(ptDict.homePage.terminal.inputPlaceholder);
        executeCmd(input, "comando_inexistente_xyz");

        expect(screen.getByText(ptDict.homePage.terminal.unknownCommand)).toBeInTheDocument();
    });

    it("limpa o terminal ao executar o comando 'clear'", () => {
        render(<InteractiveTerminal dict={ptDict} lang="pt" />);

        const input = screen.getByPlaceholderText(ptDict.homePage.terminal.inputPlaceholder);
        executeCmd(input, "clear");

        expect(screen.queryByText(ptDict.homePage.terminal.welcome)).not.toBeInTheDocument();
    });
});
