# 📄 Peridan.dev — Portfólio Online & Currículo

> Portfólio profissional bilíngue (PT/EN) desenvolvido com **Next.js (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS v4**. O projeto utiliza rotas dinâmicas e dicionários JSON para internacionalização, focando em alta performance, SEO e escalabilidade.

🌐 **Domínio:** `peridev.com.br`  
🚀 **Status:** Em desenvolvimento contínuo

## 🧠 Sobre o projeto

Este projeto nasceu com o objetivo de centralizar minha **apresentação profissional**. O grande diferencial técnico desta aplicação é o seu sistema de rotas dinâmicas, que gera páginas de projetos automaticamente a partir de uma base de dados local, eliminando a necessidade de criar arquivos rígidos para cada novo trabalho.

A ideia é manter um site **simples, performático e visualmente consistente**, priorizando a clareza para recrutadores e clientes.

## 🎯 Objetivos principais

- Servir como **currículo online bilíngue** (Inglês e Português).
- Apresentar projetos de forma automatizada e organizada.
- Consolidar minha identidade como desenvolvedor Full Stack.
- Aplicar conceitos modernos de Engenharia de Software (Server Components, SSR/SSG e acessibilidade no padrão WCAG AAA).

## 🛠️ Tecnologias utilizadas

### Front-end & Framework

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

### Funcionalidades Core

- **i18n (Internacionalização):** Sistema nativo sem dependências externas, carregando dicionários (`pt.json`, `en.json`) baseado na URL.
- **Dynamic Routes:** Geração de páginas de portfólio baseada em _slugs_ (`/projetos/[slug]`).
- **SEO Dinâmico & LLMs:** Meta tags configuradas dinamicamente para cada idioma e endpoints `/llms.txt` e `/llms-full.txt`.

## 🗂️ Estrutura do projeto

```text
src/
├── app/
│   ├── [lang]/
│   │   ├── curriculo/
│   │   ├── privacidade/
│   │   ├── projetos/
│   │   │   └── [slug]/
│   │   ├── sobre/
│   │   └── page.tsx
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/                   # Componentes modulares (Hero, Header, BentoGrid, Projects, AboutView)
├── dictionaries/                 # Base de dados de textos e projetos
│   ├── en.json
│   └── pt.json
└── lib/                          # Helpers e funções puras (site-url, locale)
```

## 💻 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/Peridan1/curriculo.git

# Entre na pasta
cd curriculo

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Rode o servidor de desenvolvimento (Turbopack nativo, ~6x mais rápido)
npm run dev

# (Opcional) Executar servidor em modo Webpack legada
npm run dev:webpack

# Executar suíte de testes com cobertura (Vitest)
npm run test:coverage

# Executar testes ponta a ponta e acessibilidade (Playwright + Axe)
npm run test:e2e

# Executar verificação completa de integridade do projeto
npm run verify

# Acesse no navegador: http://localhost:3000/pt
```

## 👤 Autor

**Daniel Satel Pereira (Peridan)** — Desenvolvedor Full Stack com foco em **Interfaces Modernas e Sistemas Escaláveis**

- LinkedIn: https://www.linkedin.com/in/daniel-satel-pereira/
- GitHub: https://github.com/DanielSatelPereira
- E-mail: danielsatelpereira@gmail.com
