#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../../");

const targetDirs = ["src", ".agents", ".vscode"];
const targetFiles = [
    "README.md",
    "package.json",
    "tsconfig.json",
    "docker-compose.yml",
    "Dockerfile",
    "next.config.ts",
    "eslint.config.mjs",
    "postcss.config.mjs"
];

const allFiles = [];

function scanDirectory(dirPath) {
    const fullDir = path.join(rootDir, dirPath);
    if (!fs.existsSync(fullDir)) return;
    const entries = fs.readdirSync(fullDir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(fullDir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name === "node_modules" || entry.name === ".git" || entry.name === ".next") continue;
            scanDirectory(path.relative(rootDir, fullPath));
        } else if (/\.(md|ts|tsx|js|mjs|json|sh|css)$/.test(entry.name)) {
            allFiles.push(fullPath);
        }
    }
}

targetDirs.forEach(scanDirectory);
targetFiles.forEach(f => {
    const full = path.join(rootDir, f);
    if (fs.existsSync(full)) allFiles.push(full);
});

const wordSet = new Set();

// Lista base de termos técnicos e palavras comuns do projeto
const initialWords = [
    "Peridan",
    "peridan",
    "Peridandev",
    "peridandev",
    "UniALFA",
    "unialfa",
    "Mikrotik",
    "mikrotik",
    "Satel",
    "satel",
    "Turbopack",
    "turbopack",
    "TailwindCSS",
    "tailwindcss",
    "NextJS",
    "nextjs",
    "glassmorphism",
    "typecheck",
    "typechecking",
    "autoria",
    "postinstall",
    "subagente",
    "subagents",
    "Framer",
    "Lucide",
    "JSDoc",
    "jsdoc",
    "Docblock",
    "docblocks",
    "pt-BR",
    "PT-BR",
    "i18n",
    "slug",
    "slugs",
    "devops",
    "backend",
    "frontend",
    "fullstack",
    "Fullstack",
    "Umuarama",
    "umuarama",
    "curriculo",
    "Curriculo"
];

initialWords.forEach(w => wordSet.add(w));

allFiles.forEach(file => {
    const content = fs.readFileSync(file, "utf8");
    // Captura palavras que contêm letras (inclusive acentos PT-BR)
    const tokens = content.match(/[A-Za-zÀ-ÖØ-öø-ÿ]+/g) || [];
    tokens.forEach(token => {
        // Ignora tokens de 1 ou 2 caracteres genéricos
        if (token.length > 2) {
            wordSet.add(token);
        }
    });
});

const sortedWords = Array.from(wordSet).sort((a, b) => a.localeCompare(b, "pt-BR", { sensitivity: "base" }));

const dictionaryPath = path.join(rootDir, ".vscode/custom-dictionary.txt");
fs.writeFileSync(dictionaryPath, sortedWords.join("\n") + "\n", "utf8");

console.log(`[SUCESSO] Dicionário gerado com ${sortedWords.length} palavras em: .vscode/custom-dictionary.txt`);
