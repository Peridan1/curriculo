#!/usr/bin/env node

/**
 * Script de Verificação de Integridade do Curriculo Peridan.dev
 * Multiplataforma (Node.js ESM) - substitui o verify-project.sh
 *
 * Etapas:
 * 1. Ambiente (Node.js >= 20, Next.js instalado, .env com NEXT_PUBLIC_SITE_URL)
 * 2. Validação i18n (validate-i18n.mjs)
 * 3. Typecheck TypeScript (tsc --noEmit)
 * 4. Testes de unidade e componentes com cobertura (vitest run --coverage)
 * 5. Sincronização do dicionário ortográfico (extract-dictionary-words.mjs)
 * 6. (Opcional) Testes E2E do Playwright via flag --e2e
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../../");

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
};

function log(type, message) {
  switch (type) {
    case "ok":
      console.log(`${colors.green}[OK]${colors.reset} ${message}`);
      break;
    case "warn":
      console.log(`${colors.yellow}[AVISO]${colors.reset} ${message}`);
      break;
    case "error":
      console.error(`${colors.red}[ERRO]${colors.reset} ${message}`);
      break;
    case "title":
      console.log(`\n${colors.cyan}${colors.bold}--- ${message} ---${colors.reset}`);
      break;
    default:
      console.log(message);
  }
}

function runStep(cmd, description) {
  log("title", description);
  try {
    execSync(cmd, { cwd: rootDir, stdio: "inherit" });
    log("ok", `${description} concluído com sucesso!`);
    return true;
  } catch {
    log("error", `Falha ao executar: ${description}`);
    return false;
  }
}

async function verify() {
  console.log(`${colors.cyan}${colors.bold}=== Verificação de Integridade: Curriculo Peridan.dev ===${colors.reset}\n`);

  // 1. Checagem de Ambiente
  const nodeMajor = parseInt(process.versions.node.split(".")[0], 10);
  if (nodeMajor < 20) {
    log("error", `Node.js >= 20 é obrigatório. Versão detectada: ${process.version}`);
    process.exit(1);
  }
  log("ok", `Node.js compatível: ${process.version}`);

  const nextBinPath = path.join(rootDir, "node_modules", ".bin", process.platform === "win32" ? "next.cmd" : "next");
  if (!fs.existsSync(nextBinPath)) {
    log("error", "Binário do Next.js não encontrado em node_modules/.bin. Execute 'npm install'.");
    process.exit(1);
  }
  log("ok", "Binário do Next.js localizado.");

  // Checagem de variáveis de ambiente
  const envPath = path.join(rootDir, ".env");
  const envLocalPath = path.join(rootDir, ".env.local");
  const envExamplePath = path.join(rootDir, ".env.example");

  if (!fs.existsSync(envPath) && !fs.existsSync(envLocalPath)) {
    if (fs.existsSync(envExamplePath)) {
      fs.copyFileSync(envExamplePath, envPath);
      log("warn", "Arquivo .env não existia; criado automaticamente a partir de .env.example.");
    }
  }

  const activeEnv = fs.existsSync(envLocalPath)
    ? fs.readFileSync(envLocalPath, "utf8")
    : fs.existsSync(envPath)
    ? fs.readFileSync(envPath, "utf8")
    : "";

  if (!activeEnv.includes("NEXT_PUBLIC_SITE_URL")) {
    log("warn", "NEXT_PUBLIC_SITE_URL não detectado explicitamente no .env / .env.local.");
  } else {
    log("ok", "NEXT_PUBLIC_SITE_URL configurado nas variáveis de ambiente.");
  }

  // 2. Validação i18n
  const i18nPassed = runStep("node .agents/scripts/validate-i18n.mjs", "Validando Dicionários i18n");
  if (!i18nPassed) process.exit(1);

  // 3. Typecheck TypeScript
  const typecheckPassed = runStep("npx tsc --noEmit", "Checando Tipagem TypeScript");
  if (!typecheckPassed) process.exit(1);

  // 4. Testes Vitest com Cobertura
  const testsPassed = runStep("npx vitest run --coverage", "Executando Testes Unitários e Componentes com Cobertura");
  if (!testsPassed) process.exit(1);

  // 5. Sincronização do Dicionário cSpell
  const dictPassed = runStep("node .agents/scripts/extract-dictionary-words.mjs", "Sincronizando Dicionário Ortográfico");
  if (!dictPassed) process.exit(1);

  // 6. Testes E2E Playwright (se solicitado via argumento --e2e)
  const runE2E = process.argv.includes("--e2e");
  if (runE2E) {
    const e2ePassed = runStep("npx playwright test", "Executando Testes E2E (Playwright)");
    if (!e2ePassed) process.exit(1);
  } else {
    log("warn", "Testes E2E pulados localmente (use 'npm run verify -- --e2e' ou 'npm run test:e2e' para executá-los).");
  }

  console.log(`\n${colors.green}${colors.bold}=== Projeto 100% Saudável e Pronto para Execução/Deploy! ===${colors.reset}\n`);
}

verify();
