import { getSiteUrl } from "../../lib/site-url";
import ptDict from "../../dictionaries/pt.json";

export async function GET() {
    const siteUrl = getSiteUrl();

    const content = `# Daniel Satel Pereira (Peridan) - Portfólio & Currículo

> Portfólio e currículo profissional de Daniel Satel Pereira (Peridan). Desenvolvedor Full Stack Júnior e estudante de Sistemas para Internet na UniALFA, com foco em React 19, Next.js 16 (App Router), TypeScript, PHP 8+ (Laravel), Python (Automação de Dados), Java (Spring Boot), React Native, Node.js e Docker.

## Visão Geral & Páginas Principais

- [Página Inicial (PT)](${siteUrl}/pt): Apresentação interativa com terminal web, bento grid de habilidades e links rápidos.
- [Home Page (EN)](${siteUrl}/en): Interactive portfolio presentation with web terminal, bento grid of skills, and highlights.
- [Sobre Mim (PT)](${siteUrl}/pt/sobre): História profissional, jornada de aprendizado, universo pessoal, hobbies e matriz de tecnologias.
- [About Me (EN)](${siteUrl}/en/sobre): Professional story, learning journey, personal universe, hobbies, and tech matrix.
- [Currículo Formal (PT)](${siteUrl}/pt/curriculo): Experiência profissional completa, formação acadêmica, habilidades e certificações formatadas para visualização e impressão.
- [Formal Resume (EN)](${siteUrl}/en/curriculo): Complete professional experience, academic background, skills, and certifications.
- [Galeria de Projetos (PT)](${siteUrl}/pt/projetos): Hub com todos os sistemas, aplicações e repositórios desenvolvidos.
- [Projects Gallery (EN)](${siteUrl}/en/projetos): Hub showcasing all systems, applications, and developed repositories.
- [Política de Privacidade](${siteUrl}/pt/privacidade): Termos de uso, privacidade e informações de conformidade.

## Projetos em Destaque

${Object.entries(ptDict.projectsData)
    .map(([slug, proj]) => {
        const liveInfo = proj.liveUrl ? ` (No ar: ${proj.liveUrl})` : "";
        return `- [${proj.title}](${siteUrl}/pt/projetos/${slug}): ${proj.shortDescription}${liveInfo}`;
    })
    .join("\n")}

## Competências Técnicas

- **Linguagens**: PHP (8+), TypeScript, JavaScript (ES6+), Python, Java, SQL, HTML5, CSS3.
- **Frameworks & Bibliotecas**: Laravel, React 19, Next.js 16 (App Router, Server Components), React Native, Spring Boot, Node.js, Express, Tailwind CSS v4, Pandas, OpenPyXL, Alpine.js.
- **Bancos de Dados**: MySQL, PostgreSQL, Modelagem Relacional e Otimização de Queries.
- **DevOps & Infraestrutura**: Docker, Docker Compose, Git/GitHub (Conventional Commits), Linux (Ubuntu/Debian), Mikrotik RouterOS, Windows Server.
- **Arquitetura & Qualidade**: Clean Code, MVC, RESTful APIs, SOLID, SSR/SSG, WCAG AAA Acessibilidade.

## Contato & Redes Sociais

- [GitHub Peridan1](https://github.com/Peridan1): Repositórios de código aberto e projetos.
- [LinkedIn](https://www.linkedin.com/in/daniel-satel-pereira/): Perfil profissional e histórico de carreira.
- [WhatsApp](https://wa.me/5541999521315): Canal direto para contato e contratações.
- [E-mail](mailto:danielsatelpereira@gmail.com): danielsatelpereira@gmail.com
`;

    return new Response(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
    });
}
