---
name: padroes-projeto
description: Guia de desenvolvimento, padrões arquiteturais e validação de código Next.js 16, React 19, TypeScript, TailwindCSS v4 e Internacionalização (i18n) para o portfólio Peridan.dev.
---

# Habilidade: Padrões de Projeto (Next.js 16 + React 19 + TailwindCSS v4 + i18n)

Esta habilidade orienta a IA na criação, manutenção e evolução de páginas, componentes, estilos e dicionários de internacionalização no projeto **Curriculo / Portfólio Peridan.dev**, assegurando aderência estrita aos padrões arquiteturais e de alta performance.

## Quando Usar
Sempre que for solicitado a:
1. Criar ou refatorar componentes visuais em `src/components/`.
2. Adicionar novas rotas ou páginas dinâmicas em `src/app/[lang]/`.
3. Atualizar ou incluir novos conteúdos nos dicionários de internacionalização (`src/dictionaries/pt.json` e `src/dictionaries/en.json`).
4. Implementar novos efeitos visuais, transições ou estilizações com TailwindCSS v4 e variáveis CSS nativas.
5. Garantir consistência de tipagem TypeScript e contratos de props.

## Diretrizes de Execução

### 1. Arquitetura de Componentes
* **Server Components por Padrão**: Mantenha componentes como Server Components para máxima performance de renderização no servidor e menor bundle JavaScript no cliente.
* **Client Components (`"use client"`)**: Utilize apenas quando for estritamente necessário (hooks de estado `useState`, `useEffect`, interatividade de clique/tema `next-themes`, animações interativas).
* **Contratos de Tipagem**: Todo componente deve exportar ou utilizar interfaces TypeScript explícitas para suas `props`, incluindo a passagem do dicionário `dict` tipado.

### 2. Internacionalização (i18n)
* Qualquer novo texto visível para o usuário deve ser cadastrado obrigatoriamente em **ambos** os dicionários:
  * `src/dictionaries/pt.json` (Português do Brasil)
  * `src/dictionaries/en.json` (Inglês)
* Mantenha a simetria exata da árvore JSON entre os dois idiomas.

### 3. Estilização e Design System (TailwindCSS v4)
* Utilize as variáveis de cores semânticas definidas em `src/app/globals.css` (`--bg-dynamic`, `--text-dynamic`, `--pop-dynamic`, `--card-glass`).
* Priorize transições nativas CSS aceleradas por GPU (`will-change: transform`, `transform: translateZ(0)`).
* Garanta suporte completo aos modos claro e escuro e responsividade mobile-first.

### 4. Checklist de Validação
Antes de concluir qualquer modificação:
- [ ] Executar typechecking com `npx tsc --noEmit` ou `npm run build`.
- [ ] Verificar paridade dos dicionários `pt.json` e `en.json`.
- [ ] Validar renderização em telas mobile e desktop.
