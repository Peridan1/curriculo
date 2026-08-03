#!/bin/bash

# Script para verificar se a pasta compartilhada entre o container do Laravel
# e o do Python Worker está acessível e com permissões adequadas de escrita/leitura.

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0;3m' # No Color

STORAGE_PATH="./storage/app/public"
TEST_FILE="$STORAGE_PATH/connection_test_$(date +%s).tmp"

echo -e "${YELLOW}=== Verificando Diretório de Armazenamento Compartilhado ===${NC}"

# 1. Verifica se a pasta existe localmente
if [ -d "$STORAGE_PATH" ]; then
    echo -e "${GREEN}[OK]${NC} Diretório público do storage encontrado: $STORAGE_PATH"
else
    echo -e "${RED}[ERRO]${NC} Diretório público do storage NÃO encontrado: $STORAGE_PATH"
    echo -e "Certifique-se de executar este script na raiz do projeto Laravel."
    exit 1
fi

# 2. Testa permissão de escrita
echo "Criando arquivo de teste de permissões..."
if touch "$TEST_FILE" 2>/dev/null; then
    echo -e "${GREEN}[OK]${NC} Permissão de escrita confirmada no diretório."
else
    echo -e "${RED}[ERRO]${NC} Falha na permissão de escrita no diretório público."
    echo -e "Execute: chmod -R 775 $STORAGE_PATH && chown -R www-data:www-data $STORAGE_PATH"
    exit 1
fi

# 3. Testa permissão de leitura e exclusão
if [ -f "$TEST_FILE" ]; then
    echo -e "${GREEN}[OK]${NC} Arquivo de teste lido com sucesso."
    rm "$TEST_FILE"
    echo -e "${GREEN}[OK]${NC} Arquivo temporário removido."
else
    echo -e "${RED}[ERRO]${NC} Falha ao ler ou excluir o arquivo de teste."
    exit 1
fi

echo -e "${GREEN}=== Verificação concluída com sucesso! ===${NC}"
exit 0
