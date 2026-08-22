#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../../");

const ptPath = path.join(rootDir, "src/dictionaries/pt.json");
const enPath = path.join(rootDir, "src/dictionaries/en.json");

console.log("\x1b[36m=== Validando Paridade dos Dicionários de Internacionalização (i18n) ===\x1b[0m\n");

if (!fs.existsSync(ptPath)) {
    console.error(`\x1b[31m[ERRO]\x1b[0m Dicionário PT não encontrado: ${ptPath}`);
    process.exit(1);
}

if (!fs.existsSync(enPath)) {
    console.error(`\x1b[31m[ERRO]\x1b[0m Dicionário EN não encontrado: ${enPath}`);
    process.exit(1);
}

let ptData, enData;
try {
    ptData = JSON.parse(fs.readFileSync(ptPath, "utf-8"));
    enData = JSON.parse(fs.readFileSync(enPath, "utf-8"));
} catch (err) {
    console.error(`\x1b[31m[ERRO]\x1b[0m Erro ao ler JSONs de tradução: ${err.message}`);
    process.exit(1);
}

let errors = [];

function compareObjects(ptObj, enObj, currentPath = "") {
    const ptKeys = Object.keys(ptObj);
    const enKeys = Object.keys(enObj);

    // Chaves que estão em PT mas faltam em EN
    for (const key of ptKeys) {
        const fullKey = currentPath ? `${currentPath}.${key}` : key;
        if (!(key in enObj)) {
            errors.push(`Chave ausente em EN: \x1b[33m${fullKey}\x1b[0m`);
            continue;
        }

        const ptVal = ptObj[key];
        const enVal = enObj[key];
        const ptType = Array.isArray(ptVal) ? "array" : typeof ptVal;
        const enType = Array.isArray(enVal) ? "array" : typeof enVal;

        if (ptType !== enType) {
            errors.push(`Tipo incompatível em \x1b[33m${fullKey}\x1b[0m: PT é ${ptType} e EN é ${enType}`);
        } else if (ptType === "object" && ptVal !== null && enVal !== null) {
            compareObjects(ptVal, enVal, fullKey);
        }
    }

    // Chaves que estão em EN mas faltam em PT
    for (const key of enKeys) {
        const fullKey = currentPath ? `${currentPath}.${key}` : key;
        if (!(key in ptObj)) {
            errors.push(`Chave extra em EN não presente em PT: \x1b[33m${fullKey}\x1b[0m`);
        }
    }
}

compareObjects(ptData, enData);

if (errors.length > 0) {
    console.log(`\x1b[31m[FALHA]\x1b[0m Encontradas ${errors.length} divergências entre pt.json e en.json:\n`);
    errors.forEach((err, idx) => console.log(`  ${idx + 1}. ${err}`));
    process.exit(1);
} else {
    console.log(`\x1b[32m[SUCESSO]\x1b[0m Todos os dicionários (PT e EN) estão com 100% de paridade estrutural!`);
    process.exit(0);
}
