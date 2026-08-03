# smart-git-automation

Detecta e agrupa alterações de forma inteligente, gera nomes de branch automaticamente e simplifica o workflow de commit/PR.

## O que faz

- Detecta e agrupa alterações relacionadas de forma inteligente
- Gera automaticamente nomes descritivos de branch a partir das alterações
- Simplifica o workflow: scan → branch → commit → push → PR com menos prompts
- Gera mensagens de commit e descrições de PR a partir das alterações

## Quando usar

Use isso quando desejar um git workflow mais rápido e inteligente que agrupe alterações logicamente e reduza o overhead de confirmações manuais.

## Principais capacidades

- **Smart grouping**: Executa git status/diff em paralelo, agrupa arquivos por módulo/diretório ou edições relacionadas
- **Auto branch names**: Gera `<type>/<short-description>` em kebab-case a partir do padrão de alteração dominante (feature, fix, refactor, docs, test, chore)
- **Streamlined commit**: Adiciona arquivos agrupados ao stage, gera automaticamente mensagens de commit e solicita confirmação de palavra única
- **Push & PR**: Push opcional para o remote, depois PR opcional com título/corpo gerados automaticamente a partir das alterações
- **Fork handling**: Detecta remotes de forks e usa o remote correto para a criação de PRs

## Regras

- Gere nomes de branch a partir das alterações reais, não peça ao usuário para nomeá-las
- Reduza as confirmações para respostas de palavra única ou pontos únicos de confirmação
- Nunca faça commit de segredos, credenciais ou binários grandes
- Verifique se o repositório do GitHub existe antes de criar o PR
- Pule a etapa de PR se o usuário disser "não" em qualquer momento
- Se a branch já existir com alterações, ofereça fazer amend ou adicionar um novo commit
