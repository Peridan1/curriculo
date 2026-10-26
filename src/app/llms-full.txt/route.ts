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
- **Formação**: Sistemas para Internet na UniALFA (Centro Universitário Campo Real / Alfa Umuarama)
- **Status**: Disponível para oportunidades profissionais como Desenvolvedor Full Stack Júnior.
- **Contato**: danielsatelpereira@gmail.com | WhatsApp: +55 (041) 99952-1315
- **Links**:
  - Site Oficial: ${siteUrl}
  - Sobre Mim: ${siteUrl}/pt/sobre
  - GitHub Principal: https://github.com/DanielSatelPereira
  - GitHub Secundário/Organizações: https://github.com/Peridan1
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

1. **Prefeitura Municipal de Umuarama / Casa dos Conselhos** (Mar/2026 - Presente)
   - Desenvolvimento web e manutenção de sistemas em PHP (Slim Framework e Laravel), automações com Python e suporte operacional.
2. **Prefeitura Municipal de Umuarama / Divisão de Frotas** (Fev/2025 - Mar/2026)
   - Criação e implantação do Sistema de Controle de Frotas (Laravel 12, MySQL, Docker) e robô Python para integração de telemetria veicular.
3. **Colégio Geração Cima** (Mar/2025 - Out/2025)
   - Técnico de Informática: suporte a laboratórios, configuração de projetores, Apple TV, rede e switches.
4. **Imppar** (Out/2024 - Fev/2025)
   - Assistente de Manutenção: Mikrotik RouterOS, Windows Server e redes estruturadas.
`;

    return new Response(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
    });
}
