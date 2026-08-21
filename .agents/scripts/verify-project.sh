#!/bin/bash

# Script de verificação de integridade do ambiente e do projeto Curriculo Peridan.dev

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}=== Verificação de Integridade: Curriculo Peridan.dev ===${NC}\n"

# 1. Checa versão do Node.js
NODE_VERSION=$(node -v 2>/dev/null)
if [ $? -eq 0 ]; then
    echo -e "${GREEN}[OK]${NC} Node.js instalado: $NODE_VERSION"
else
    echo -e "${RED}[ERRO]${NC} Node.js não foi encontrado no PATH."
    exit 1
fi

# 2. Checa executável do Next.js no node_modules
if [ -x "node_modules/.bin/next" ]; then
    echo -e "${GREEN}[OK]${NC} Binário 'next' presente e executável em node_modules/.bin/next"
else
    echo -e "${RED}[ERRO]${NC} Binário 'next' não é executável ou não existe. Execute 'rm -rf node_modules/.bin && npm i' para corrigir."
    exit 1
fi

# 3. Checa existência do arquivo .env
if [ -f ".env" ]; then
    echo -e "${GREEN}[OK]${NC} Arquivo de ambiente .env encontrado."
else
    echo -e "${YELLOW}[AVISO]${NC} Arquivo .env não encontrado. Copiando de .env.example se existir."
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo -e "${GREEN}[OK]${NC} .env criado a partir de .env.example."
    fi
fi

# 4. Executa validação de paridade de i18n
echo -e "\n${CYAN}--- Verificando Dicionários i18n ---${NC}"
node .agents/scripts/validate-i18n.mjs
if [ $? -ne 0 ]; then
    echo -e "${RED}[FALHA]${NC} Verificação de dicionários i18n falhou."
    exit 1
fi

# 5. Executa typecheck do TypeScript
echo -e "\n${CYAN}--- Verificando Tipagem TypeScript ---${NC}"
npx tsc --noEmit
if [ $? -eq 0 ]; then
    echo -e "${GREEN}[OK]${NC} Typecheck do TypeScript concluído sem erros!"
else
    echo -e "${RED}[FALHA]${NC} O TypeScript encontrou erros de tipagem."
    exit 1
fi

# 6. Atualiza dicionário de palavras do projeto para o corretor ortográfico (cSpell)
echo -e "\n${CYAN}--- Atualizando Dicionário Ortográfico do Projeto ---${NC}"
node .agents/scripts/extract-dictionary-words.mjs
if [ $? -eq 0 ]; then
    echo -e "${GREEN}[OK]${NC} Dicionário ortográfico sincronizado com sucesso!"
fi

echo -e "\n${GREEN}=== Projeto e Ambiente 100% Saudáveis e Prontos para Execução! ===${NC}"
exit 0
