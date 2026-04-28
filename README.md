# 📄 Peridan.dev — Portfólio Online & Currículo

> Portfólio profissional bilíngue (PT/EN) desenvolvido com **Next.js (App Router)**, **TypeScript** e **Tailwind CSS v4**. O projeto utiliza rotas dinâmicas e dicionários JSON para internacionalização, focando em alta performance, SEO e escalabilidade.

🌐 **Domínio:** `peridandev.com.br`  
🚀 **Status:** Em desenvolvimento contínuo

## 🧠 Sobre o projeto

Este projeto nasceu com o objetivo de centralizar minha **apresentação profissional**. O grande diferencial técnico desta aplicação é o seu sistema de rotas dinâmicas, que gera páginas de projetos automaticamente a partir de uma base de dados local, eliminando a necessidade de criar arquivos rígidos para cada novo trabalho.

A ideia é manter um site **simples, performático e visualmente consistente**, priorizando a clareza para recrutadores e clientes.

## 🎯 Objetivos principais

- Servir como **currículo online bilíngue** (Inglês e Português).
- Apresentar projetos de forma automatizada e organizada.
- Consolidar minha identidade como desenvolvedor Full Stack.
- Aplicar conceitos modernos de Engenharia de Software (Componentização e SSR com Next.js).

## 🛠️ Tecnologias utilizadas

### Front-end & Framework

- Next.js 15+ (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

### Funcionalidades Core

- **i18n (Internacionalização):** Sistema nativo sem dependências externas, carregando dicionários (`pt.json`, `en.json`) baseado na URL.
- **Dynamic Routes:** Geração de páginas de portfólio baseada em _slugs_ (`/projetos/[slug]`).
- **SEO Dinâmico:** Meta tags configuradas dinamicamente para cada idioma e página.

## 🗂️ Estrutura do projeto

```text
src/
├── app/
│   ├── [lang]/
│   │   ├── projetos/
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Rota dinâmica dos projetos
│   │   ├── layout.tsx
│   │   └── page.tsx              # Home principal
├── components/                   # Componentes modulares (Hero, Header, Skills)
└── dictionaries/                 # Base de dados de textos e projetos
    ├── en.json
    └── pt.json
```

## 💻 Como rodar o projeto localmente

```Bash

# Clone o repositório

git clone https://github.com/Peridan1/curriculo.git

# Entre na pasta

cd seu-repo-portfolio

# Instale as dependências

npm install

# Rode o servidor de desenvolvimento

npm run dev

# Acesse no navegador: http://localhost:3000/pt
```

## 👤 Autor

**Daniel Satel Pereira (Peridan)** Desenvolvedor Full Stack com foco em **Interfaces Modernas e Sistemas Escaláveis**

LinkedIn: https://www.linkedin.com/in/daniel-satel-pereira/

GitHub: https://github.com/DanielSatelPereira

Email: danielsatelpereira@gmail.com
