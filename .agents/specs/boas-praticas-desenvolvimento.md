# Especificação: Boas Práticas de Desenvolvimento

Este documento descreve os padrões recomendados de commits, escrita de código, arquitetura limpa e princípios de desenvolvimento seguidos no projeto **Curriculo / Portfólio Peridan.dev**.

---

## 1. Padrão de Commits (Conventional Commits em PT-BR)

Sempre adote o padrão **Conventional Commits** adaptado para a língua portuguesa (Português do Brasil). A estrutura geral deve seguir:

```text
<tipo>(<escopo>): <descrição curta em PT-BR>

[corpo detalhado se for uma alteração relevante]
```

### Tipos de Commit Permitidos:
* `feat`: Nova funcionalidade para o usuário final (ex: nova seção, nova página de projeto).
* `fix`: Correção de bug visual, tipagem ou erro de execução.
* `docs`: Mudanças apenas na documentação ou nas specs em `.agents/`.
* `style`: Formatação, espaçamento ou ajustes cosméticos sem alteração de lógica.
* `refactor`: Refatoração de código que não altera o comportamento visual ou funcional.
* `perf`: Otimizações de performance (ex: aceleração GPU, redução de bundle, imagens otimizadas).
* `test`: Adição ou correção de scripts de teste/validação.
* `chore`: Atualização de tarefas de build, pacotes, variáveis ou ambiente.

---

## 2. Princípios de Engenharia e Clean Code

1. **DRY (Don't Repeat Yourself)**: Componentes reutilizáveis (botões, badges, cards, ícones) devem ser centralizados em `src/components/` em vez de duplicar marcações JSX.
2. **SRP (Single Responsibility Principle)**: Cada componente ou módulo deve ter uma única responsabilidade clara (ex: `ThemeToggle` controla apenas a alternância de tema).
3. **KISS (Keep It Simple, Stupid)**: Dê preferência a soluções simples, diretas e com CSS nativo antes de introduzir bibliotecas pesadas de JavaScript.
4. **Tipagem Estrita (Strict TypeScript)**: NUNCA utilize `any`. Todas as props, parâmetros e dicionários de internacionalização devem ter interfaces TypeScript bem definidas.

---

## 3. Fluxo de Git e Ramificações (Branches)

* **Sempre** trabalhe em branches de tópicos separadas a partir da `main` (ex: `feat/nova-secao-contato`, `fix/ajuste-tema-mobile`).
* Valide a compilação com `npm run build` e typecheck antes de submeter alterações.
