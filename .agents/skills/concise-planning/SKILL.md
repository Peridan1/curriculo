---
name: concise-planning
description: "Use quando um usuário pedir um plano para uma tarefa de código, para gerar um checklist claro, acionável e atômico."
risk: unknown
source: community
date_added: "2026-02-27"
---

# Concise Planning (Planejamento Conciso)

## Objetivo

Transformar uma solicitação do usuário em um **plano único e acionável** com etapas atômicas.

## Workflow

### 1. Escanear Contexto

- Leia o `README.md`, documentações e arquivos de código relevantes.
- Identifique restrições (linguagem, frameworks, testes).

### 2. Interação Mínima

- Faça **no máximo de 1 a 2 perguntas** e apenas se forem realmente bloqueantes.
- Faça suposições razoáveis para incógnitas não bloqueantes.

### 3. Gerar Plano

Use a seguinte estrutura:

- **Abordagem (Approach)**: 1 a 3 frases sobre o que e por quê.
- **Escopo (Scope)**: Tópicos para "Dentro" (In) e "Fora" (Out).
- **Itens de Ação (Action Items)**: Uma lista de 6 a 10 tarefas atômicas e ordenadas (iniciando com Verbo).
- **Validação (Validation)**: Pelo menos um item para testes.

## Modelo de Plano (Plan Template)

```markdown
# Plano

<Abordagem de alto nível>

## Escopo

- Dentro:
- Fora:

## Itens de Ação

[ ] <Passo 1: Descoberta>
[ ] <Passo 2: Implementação>
[ ] <Passo 3: Implementação>
[ ] <Passo 4: Validação/Teste>
[ ] <Passo 5: Rollout/Commit>

## Perguntas em Aberto

- <Pergunta 1 (máx 3)>
```

## Diretrizes do Checklist

- **Atômico**: Cada etapa deve ser uma unidade lógica única de trabalho.
- **Iniciando com Verbo**: "Adicionar...", "Refatorar...", "Verificar...".
- **Concreto**: Nomeie arquivos ou módulos específicos quando possível.

## Quando usar
Esta skill é aplicável para executar o workflow ou as ações descritas na visão geral.

## Limitações
- Use esta skill apenas quando a tarefa corresponder claramente ao escopo descrito acima.
- Não trate o resultado como um substituto para validação específica do ambiente, testes ou revisão especializada.
- Pare e peça esclarecimentos se os dados de entrada necessários, permissões, limites de segurança ou critérios de sucesso estiverem ausentes.
