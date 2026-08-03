---
name: nextjs-react-expert
description: Especialista em Next.js 16 (App Router), React 19, TypeScript e Server/Client Components. Use esta skill para criar ou refatorar páginas, componentes e rotas dinâmicas.
---

# Next.js & React Expert - Guia de Desenvolvimento

## Diretrizes Gerais
1. **Server vs. Client Components**:
   - Mantenha componentes como Server Components por padrão.
   - Use `"use client"` apenas quando o componente exigir estado (`useState`), efeitos (`useEffect`), ouvintes de evento ou APIs do navegador.
2. **TypeScript Estrito**:
   - Defina interfaces claras para as `props` dos componentes.
   - Tipagem completa para dicionários de internacionalização (`dict`).
3. **Internacionalização (i18n)**:
   - Estrutura baseada em rotas com parâmetro `[lang]`.
   - Adicione novos textos em `src/dictionaries/pt.json` e `src/dictionaries/en.json` simultaneamente.
4. **Arquitetura de Componentes**:
   - Localize componentes reutilizáveis em `src/components/`.
   - Evite acoplamento direto de lógica de apresentação com busca de dados.
