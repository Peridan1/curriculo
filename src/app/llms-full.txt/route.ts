import { getSiteUrl } from "../../lib/site-url";
import ptDict from "../../dictionaries/pt.json";

export async function GET() {
    const siteUrl = getSiteUrl();

    const projectsDetailed = Object.entries(ptDict.projectsData)
        .map(([slug, proj]) => {
            const live = proj.liveUrl ? `\n- **Site no Ar**: ${proj.liveUrl}` : "";
            const repo = proj.repoUrl ? `\n- **Repositório**: ${proj.repoUrl}` : "";
            const tags = proj.tags ? proj.tags.join(", ") : "";
            return `### ${proj.title}
- **Página no Portfólio**: ${siteUrl}/pt/projetos/${slug}
- **Período / Contexto**: ${proj.period}
- **Tecnologias**: ${tags}
- **Descrição**: ${proj.description}
- **Desafios & Soluções**: ${proj.challenges}${live}${repo}`;
        })
        .join("\n\n");

    const content = `# Daniel Satel Pereira (Peridan) - Documentação Completa para LLMs

> Perfil profissional detalhado, histórico de carreira, projetos reais, competências e arquitetura de Daniel Satel Pereira.

## 1. Dados Pessoais e Resumo Profissional

- **Nome**: Daniel Satel Pereira
- **Nome Artístico / Nickname**: Peridan (Peridan.dev)
- **Localização**: Umuarama, Paraná, Brasil
- **Formação**: Sistemas para Internet na UniALFA (Faculdade Alfa Umuarama)
- **Status**: Disponível para oportunidades profissionais como Desenvolvedor Full Stack Júnior.
- **Contato**: danielsatelpereira@gmail.com | WhatsApp: +55 (041) 99952-1315
- **Links**:
  - Site Oficial: ${siteUrl}
  - Sobre Mim: ${siteUrl}/pt/sobre
  - GitHub Principal: https://github.com/Peridan1
  - LinkedIn: https://www.linkedin.com/in/daniel-satel-pereira/

## 2. Principais Competências e Stack Tecnológica

### Backend & Automação de Dados
- **PHP**: PHP 8.x, Programação Orientada a Objetos (POO), Arquitetura MVC, Slim Framework, Tratamento de Erros, Composer.
- **Laravel**: Framework completo, Eloquent ORM, Blade Templates, Migrations, Seeders, Middleware, Autenticação e APIs RESTful.
- **Python**: Automação de scripts, processamento de planilhas brutas com Pandas e OpenPyXL, análise estatística e geração de relatórios gerenciais.
- **Java**: Spring Boot, construção de APIs RESTful robustas e tipadas.
- **Node.js & TypeScript**: APIs assíncronas, Express/NestJS, tipagem estrita com TypeScript.
- **Bancos de Dados**: MySQL, PostgreSQL, modelagem relacional, normalização e queries otimizadas.

### Frontend & Mobile UI/UX
- **React 19 & Next.js 16**: App Router, Server Components, Client Components, Server Actions, Dynamic Routes, Internacionalização (i18n).
- **React Native**: Criação de interfaces reativas mobile para Android/iOS integradas a backends RESTful.
- **Tailwind CSS v4**: Design Systems, CSS Variables nativas, temas claro/escuro dinâmicos, GPU-accelerated micro-animations.
- **Acessibilidade & Performance**: Padrão WCAG AAA, First Contentful Paint otimizado, 60 FPS fluídos.

### DevOps & Infraestrutura
- **Docker & Docker Compose**: Criação de imagens multi-stage, isolamento de ambientes e paridade dev/prod.
- **Redes & Servidores**: Mikrotik RouterOS, Firewall, DNS, NAT, VLANs, Windows Server, Linux (Ubuntu/Debian).
- **Controle de Versão**: Git, GitHub, Conventional Commits, Semantic Versioning, Workflows e automações.

## 3. Detalhamento dos Projetos Reais e Portfólio

${projectsDetailed}

## 4. Experiência Profissional Cronológica

1. **Prefeitura Municipal de Umuarama — Setor de T.I.** (Nov/2025 - Presente) — *Estagiário de T.I.*
   - **Análise e Desenvolvimento de Sistemas** (Mar/2026 - Presente): mudança interna de frente dentro do mesmo setor de T.I., atuando no desenvolvimento e manutenção de sistemas internos em PHP (Laravel e Slim Framework, incluindo sistemas de Frotas e dos Conselhos Municipais), automações em Python e conteinerização com Docker.
   - **Suporte de T.I. e Desenvolvimento Inicial** (Nov/2025 - Mar/2026): suporte técnico presencial e remoto, redes/hardware e criação inicial do Sistema de Controle de Frotas (Laravel 12, MySQL, Docker) com automações de telemetria em Python.
2. **Colégio Geração Cima** (Mar/2025 - Out/2025) — *Técnico de Informática*
   - Suporte a laboratórios, configuração de projetores, Apple TV, Chromecast, rede e switches.
3. **Imppar Importadora Paranaense** (Out/2024 - Fev/2025) — *Assistente de Manutenção e Infraestrutura*
   - Mikrotik RouterOS, Windows Server, redes estruturadas e manutenção preventiva/corretiva.
4. **Professor Particular / Freelancer** (2019 - Presente) — *Professor e Tradutor de Inglês*
   - Aulas particulares de inglês (básico ao intermediário) e tradução de materiais técnicos.
`;

    return new Response(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
    });
}
