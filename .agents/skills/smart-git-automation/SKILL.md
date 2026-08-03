---
name: smart-git-automation
version: 1.0.0
description: "Detecção inteligente de alterações, nomenclatura automática de branch e workflow simplificado de commit/PR"
risk: critical
source: community
source_type: community
source_repo: mskadu/opencode-agent-skills
license: MIT
license_source: "https://github.com/mskadu/opencode-agent-skills/blob/main/LICENSE"
date_added: "2026-06-05"
---

## O que eu faço
- Detecto e agrupo alterações relacionadas de forma inteligente
- Gera automaticamente nomes descritivos de branch a partir das alterações
- Simplifico o workflow: scan → branch → commit → push → PR com menos prompts

## Quando usar
Use isso quando desejar um git workflow mais rápido e inteligente que agrupe alterações logicamente e reduza o overhead de confirmações manuais.

## Passos do Workflow

### 1. Detecção Inteligente e Agrupamento (Smart Grouping)
Execute em paralelo:
- `git status` - verificar o que mudou
- `git diff --stat` - ver resumo de modificação de arquivos
- `git diff --name-only` - listar apenas arquivos alterados
- `git diff --staged --stat` - ver o que já está no stage

Analise as alterações para agrupá-las logicamente:
- Arquivos no mesmo módulo/diretório → provavelmente relacionados
- Arquivos modificados juntos em edições recentes → provavelmente relacionados
- Novos arquivos que se complementam → provavelmente relacionados

Apresente as alterações agrupadas em um formato claro, ex.:
```
📁 Grupo 1: UI Components
  - src/components/Button.tsx (modificado)
  - src/components/Button.test.tsx (modificado)

📁 Grupo 2: API Layer
  - src/api/client.ts (novo)
  - src/api/types.ts (modificado)
```

### 2. Geração Automática de Nome de Branch
Gere o nome da branch a partir do padrão de alteração dominante:
- Use o formato: `<type>/<short-description>`
- Tipos: `feature`, `fix`, `refactor`, `docs`, `test`, `chore`
- Derive a descrição a partir do arquivo/funcionalidade alterada mais significativa
- Converta para kebab-case, máximo de 50 caracteres
- Exemplos:
  - `feature/add-user-auth` (de arquivos relacionados a autenticação)
  - `fix/login-validation` (de alterações de validação)
  - `refactor/api-cleanup` (de refatoração de API)

Mostre o nome da branch sugerido e solicite confirmação de uma palavra (ou que digite uma alternativa).

### 3. Branch & Commit Simplificados
- Se não estiver na main/master: verifique se a branch atual corresponde ao nome proposto
  - Se sim: permaneça nela
  - Se não: peça para trocar ou criar uma nova
- Crie a branch somente após validar o nome da branch, então use `git checkout -b "$branch_name"`
- Adicione ao stage apenas pathspecs explícitos: `git add -- caminho/do/arquivo ...`
  - Se os caminhos dos arquivos forem gerados, mantenha-os delimitados por NUL (`git diff -z --name-only`) e passe-os como argumentos de pathspec.
  - Nunca concatene nomes de arquivos não confiáveis em um comando shell e nunca execute textos marcadores de posição (placeholders) literalmente.
- Gere a mensagem de commit automaticamente a partir das alterações:
  - Primeira linha: `<type>: <short description>` (máx 72 caracteres)
  - Corpo: alterações de arquivos agrupadas com descrições breves
- Faça o commit com a mensagem gerada, mostrando uma prévia antes
- Peça confirmação de uma palavra para prosseguir

### 4. Push & PR Opcional
- Após o commit, pergunte: "Fazer push para o remote? (yes/no/abort)"
- Se sim: `git push -u origin <branch-name>`
- Em seguida, pergunte: "Criar PR? (yes/no)"
- Se sim:
  - Verifique o remote: `git remote -v`
  - Se for um fork: use o remote do fork (ex: `mskadu/repo-name`)
  - Gere automaticamente a descrição do PR a partir das mensagens de commit
  - Use `gh pr create` com:
    - Título a partir do nome da branch
    - Corpo: resumo das alterações + detalhamento dos arquivos + notas de acompanhamento

## Regras Principais
- Agrupe arquivos relacionados automaticamente, mas permita que o usuário ajuste
- Gere nomes de branch a partir das alterações reais, não peça ao usuário para nomeá-las
- Reduza as confirmações: peça respostas de palavra única ou pontos de confirmação únicos
- Nunca faça commit de segredos, credenciais ou binários grandes
- Verifique se o repositório do GitHub existe antes de criar o PR
- Pule a etapa de PR se o usuário disser "não" em qualquer momento
- Se a branch já existir com alterações, ofereça fazer amend ou adicionar um novo commit

## Limitações

- Não ignore as regras de mantenedores específicas do repositório, políticas de branch ou gates de revisão exigidos.
- Confirme ações destrutivas ou de publicação explicitamente; esta skill deve simplificar o fluxo de rotina do Git, não eliminar a responsabilidade.
