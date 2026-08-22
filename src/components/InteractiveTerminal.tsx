"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TerminalIcon } from "./icons";

interface TerminalProps {
    lang: string;
    dict: {
        homePage: {
            terminal: {
                headerTitle: string;
                welcome: string;
                shortcutsLabel: string;
                inputPlaceholder: string;
                helpText: string;
                whoamiText: string;
                skillsText: string;
                stackText: string;
                projectsText: string;
                curriculoText: string;
                contactText: string;
                unknownCommand: string;
                triviaMenu?: string;
                triviaTech?: string;
                triviaMusic?: string;
                triviaMovies?: string;
                triviaGames?: string;
                triviaPlaylist?: string;
                easterEgg42?: string;
                easterEggPeace?: string;
                easterEggMatrix?: string;
                easterEggCoffee?: string;
                easterEggStarWars?: string;
                easterEggVim?: string;
                easterEggRickroll?: string;
                easterEggDeploy?: string;
            };
        };
    };
}

interface CommandHistoryItem {
    id: string;
    type: "input" | "output" | "system";
    text: string;
    linkUrl?: string;
    linkText?: string;
}

export default function InteractiveTerminal({ dict, lang }: TerminalProps) {
    const router = useRouter();
    const t = dict.homePage.terminal;

    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandHistoryItem[]>([
        {
            id: "welcome-1",
            type: "system",
            text: t.welcome,
        },
        {
            id: "welcome-2",
            type: "output",
            text: lang === "pt"
                ? "💡 Digite 'help' para ver os comandos ou 'curiosidades' para explorar hobbies e cultura pop!"
                : "💡 Type 'help' to see commands or 'curiosities' to explore hobbies & pop culture!",
        },
    ]);

    const terminalBodyRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Rola para o final do terminal ao adicionar histórico
    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [history]);

    const handleExecuteCommand = (rawCmd: string) => {
        const cmd = rawCmd.trim().toLowerCase();
        if (!cmd) return;

        const newEntries: CommandHistoryItem[] = [
            {
                id: `cmd-${Date.now()}`,
                type: "input",
                text: `$ ${rawCmd.trim()}`,
            },
        ];

        if (cmd === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        switch (cmd) {
            case "help":
            case "ajuda":
            case "man":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.helpText,
                });
                break;
            case "whoami":
            case "bio":
            case "sobre":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.whoamiText,
                });
                break;
            case "skills":
            case "habilidades":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.skillsText,
                });
                break;
            case "stack":
            case "tecnologias":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.stackText,
                });
                break;
            case "projects":
            case "projetos":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.projectsText,
                    linkUrl: `/${lang}/projetos`,
                    linkText: "👉 " + (lang === "pt" ? "Ir para o Hub de Projetos" : "Go to Projects Hub"),
                });
                break;
            case "curriculo":
            case "cv":
            case "resume":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.curriculoText,
                    linkUrl: `/${lang}/curriculo`,
                    linkText: "📄 " + (lang === "pt" ? "Abrir Currículo Completo" : "Open Full Resume"),
                });
                setTimeout(() => {
                    router.push(`/${lang}/curriculo`);
                }, 1000);
                break;
            case "contact":
            case "contato":
            case "social":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.contactText,
                });
                break;
            case "curiosidades":
            case "curiosities":
            case "trivia":
            case "hobbies":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.triviaMenu || "",
                });
                break;
            case "tech":
            case "curiosidades tech":
            case "curiosities tech":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.triviaTech || "",
                });
                break;
            case "musica":
            case "music":
            case "musicas":
            case "songs":
            case "curiosidades musica":
            case "curiosities music":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.triviaMusic || "",
                });
                break;
            case "filmes":
            case "movies":
            case "cinema":
            case "series":
            case "curiosidades filmes":
            case "curiosities movies":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.triviaMovies || "",
                });
                break;
            case "games":
            case "jogos":
            case "curiosidades games":
            case "curiosities games":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.triviaGames || "",
                });
                break;
            case "playlist":
            case "playlists":
            case "spotify":
            case "curiosidades playlist":
            case "curiosities playlist":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.triviaPlaylist || "",
                });
                break;
            case "42":
            case "universe":
            case "universo":
            case "mochileiro":
            case "towel":
            case "toalha":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.easterEgg42 || "",
                });
                break;
            case "viemos em paz":
            case "viemos empaz":
            case "we come in peace":
            case "peace":
            case "alien":
            case "et":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.easterEggPeace || "",
                });
                break;
            case "matrix":
            case "neo":
            case "morpheus":
            case "rabbit":
            case "pill":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.easterEggMatrix || "",
                });
                break;
            case "coffee":
            case "cafe":
            case "café":
            case "cafeina":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.easterEggCoffee || "",
                });
                break;
            case "starwars":
            case "star wars":
            case "yoda":
            case "force":
            case "jedi":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.easterEggStarWars || "",
                });
                break;
            case "vim":
            case "exit":
            case "quit":
            case ":q":
            case ":wq":
            case ":q!":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.easterEggVim || "",
                });
                break;
            case "rickroll":
            case "rick":
            case "astley":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.easterEggRickroll || "",
                });
                break;
            case "git push --force":
            case "git push -f":
            case "force-push":
            case "deploy":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.easterEggDeploy || "",
                });
                break;
            case "date":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: new Date().toLocaleString(lang === "pt" ? "pt-BR" : "en-US", {
                        timeZone: "America/Sao_Paulo",
                        dateStyle: "full",
                        timeStyle: "medium",
                    }),
                });
                break;
            case "sudo":
            case "su":
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: "🔒 peridan is not in the sudoers file. This incident will be reported to Santa Claus. 🎅",
                });
                break;
            default:
                newEntries.push({
                    id: `out-${Date.now()}`,
                    type: "output",
                    text: t.unknownCommand,
                });
                break;
        }

        setHistory((prev) => [...prev, ...newEntries]);
        setInput("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleExecuteCommand(input);
    };

    const shortcutChips = [
        { label: "whoami", cmd: "whoami" },
        { label: "skills", cmd: "skills" },
        { label: lang === "pt" ? "curiosidades" : "curiosities", cmd: lang === "pt" ? "curiosidades" : "curiosities" },
        { label: "projects", cmd: "projects" },
        { label: "curriculo", cmd: "curriculo" },
        { label: "contact", cmd: "contact" },
        { label: "42", cmd: "42" },
        { label: "clear", cmd: "clear" },
    ];

    return (
        <div className="w-full h-full rounded-3xl overflow-hidden border border-slate-300 dark:border-cyan-500/30 bg-slate-950 text-slate-100 shadow-2xl shadow-cyan-500/10 font-mono flex flex-col justify-between">
            {/* Barra Superior do Terminal */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between select-none shrink-0">
                <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="size-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="size-3 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <div className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                    <TerminalIcon className="size-4 text-cyan-400" />
                    {t.headerTitle}
                </div>
                <div className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    ONLINE
                </div>
            </div>

            {/* Corpo do Terminal (Histórico de Saída) */}
            <div
                ref={terminalBodyRef}
                className="grow p-5 overflow-y-auto min-h-60 max-h-80 lg:max-h-96 text-xs sm:text-sm space-y-3 leading-relaxed"
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((item) => {
                    if (item.type === "input") {
                        return (
                            <div key={item.id} className="text-cyan-400 font-bold">
                                {item.text}
                            </div>
                        );
                    }
                    if (item.type === "system") {
                        return (
                            <div key={item.id} className="text-purple-300 font-semibold">
                                {item.text}
                            </div>
                        );
                    }
                    return (
                        <div key={item.id} className="text-slate-300 whitespace-pre-line">
                            {item.text}
                            {item.linkUrl && item.linkText && (
                                <div className="mt-2">
                                    <a
                                        href={item.linkUrl}
                                        className="inline-flex items-center gap-1.5 text-emerald-400 font-bold hover:underline bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-500/30 transition-all hover:scale-105"
                                    >
                                        {item.linkText}
                                    </a>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Barra de Atalhos Rápidos */}
            <div className="bg-slate-900/90 border-t border-slate-800 px-4 py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
                <span className="text-[11px] font-bold text-slate-400 shrink-0 mr-1">
                    {t.shortcutsLabel}
                </span>
                {shortcutChips.map((chip) => (
                    <button
                        key={chip.cmd}
                        onClick={() => handleExecuteCommand(chip.cmd)}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-800 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-slate-700 hover:border-cyan-400/50 transition-all cursor-pointer shrink-0"
                    >
                        ${chip.label}
                    </button>
                ))}
            </div>

            {/* Linha de Comando / Input */}
            <form
                onSubmit={handleSubmit}
                className="bg-slate-950 p-4 border-t border-slate-800 flex items-center gap-2 shrink-0"
            >
                <span className="text-emerald-400 font-black text-sm sm:text-base select-none">
                    peridan@dev:~$
                </span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t.inputPlaceholder}
                    className="grow bg-transparent text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm font-mono outline-none border-none"
                    autoCapitalize="none"
                    autoComplete="off"
                    spellCheck="false"
                />
                <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs transition-all cursor-pointer shadow-md shadow-cyan-500/20 shrink-0"
                >
                    Exec
                </button>
            </form>
        </div>
    );
}
