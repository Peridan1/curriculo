# Padrões Arquiteturais e Estrutura de Código (Next.js 16 + React 19)

Este documento especifica a arquitetura técnica, divisão de responsabilidades e convenções de código adotadas no projeto **Curriculo / Portfólio Peridan.dev**.

---

## 1. Arquitetura Base (Next.js 16 App Router)

A aplicação utiliza o **Next.js 16 (App Router)** com **React 19** e **TypeScript**, estruturada sob a pasta `src/`:

```text
src/
├── app/
│   ├── [lang]/                  # Rotas internacionalizadas
│   │   ├── page.tsx             # Página inicial (Hero, Skills, Experience, Education, Projects)
│   │   ├── projetos/
│   │   │   ├── page.tsx         # Listagem completa de projetos
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Detalhes individuais do projeto
│   │   └── layout.tsx           # Layout com Header, Footer e ThemeProvider
│   ├── globals.css              # Variáveis CSS semânticas e TailwindCSS v4
│   └── favicon.ico
├── components/                  # Componentes reutilizáveis de UI
│   ├── Header.tsx               # Barra de navegação e controles
│   ├── Hero.tsx                 # Seção principal de introdução
│   ├── Skills.tsx               # Grade de habilidades técnicas
│   ├── Experience.tsx           # Linha do tempo profissional
│   ├── Education.tsx            # Formação acadêmica e certificações
│   ├── Projects.tsx             # Vitrine de projetos em destaque
│   ├── ThemeToggle.tsx          # Botão alternador de tema (claro/escuro)
│   ├── ThemeProvider.tsx        # Provedor do next-themes
│   └── Footer.tsx               # Rodapé com redes e copyright
├── dictionaries/                # Dicionários de tradução JSON
│   ├── pt.json                  # Português do Brasil
│   └── en.json                  # Inglês
└── proxy.ts                     # Middleware/Proxy para detecção de idioma
```

---

## 2. Server Components vs. Client Components

* **Server Components (Padrão)**:
  * Todas as páginas (`page.tsx`, `layout.tsx`) e a maioria dos componentes de exibição de dados devem ser Server Components.
  * Vantagens: Zero impacto no bundle JS do cliente, renderização ultra-rápida no servidor e SEO otimizado.
  * Atenção ao Next.js 16: Em rotas dinâmicas, `params` é uma **Promise** assíncrona (`const { lang } = await params;`).

* **Client Components (`"use client"`)**:
  * Utilizados apenas quando há necessidade de hooks (`useState`, `useEffect`, `usePathname`), eventos de interação direta do usuário (`onClick`, `onChange`) ou bibliotecas de tema (`useTheme` do `next-themes`).
  * Exemplos no projeto: `ThemeToggle.tsx`, `ThemeProvider.tsx`, interações específicas de filtros ou carrosséis.

---

## 3. Fluxo de Dados e Internacionalização (i18n)

1. **Detecção e Redirecionamento**: `src/proxy.ts` intercepta requisições na raiz `/` e redireciona para `/[lang]` baseado no cabeçalho `accept-language`.
2. **Carregamento do Dicionário**: As páginas leem o dicionário correspondente ao `lang` da URL e repassam os blocos de dados necessários para os componentes filhos via `props`.
3. **Simetria de Dados**: Chaves e estruturas de objetos em `pt.json` e `en.json` devem ser 100% idênticas.

---

## 4. Otimização e SEO

* **Metadados Dinâmicos**: As páginas exportam funções `generateMetadata` tipadas com títulos, descrições e OpenGraph adaptados ao idioma ativo.
* **Componente Image**: Sempre utilize `next/image` para imagens de projetos e perfil, configurando `width`, `height`, `alt` e `loading="lazy"` (ou `priority` para o Hero).
