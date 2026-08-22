# Guia e Documentação de Componentes (React 19)

Este documento cataloga todos os componentes de interface da aplicação **Curriculo / Portfólio Peridan.dev**, detalhando seu tipo (Server vs. Client Component), props recebidas e responsabilidades.

---

## 1. Estrutura de Componentes (`src/components/`)

| Componente | Tipo | Responsabilidade | Props Principais |
| :--- | :--- | :--- | :--- |
| **`Header.tsx`** | Client Component (`"use client"`) | Barra de navegação fixa com efeito `.glass-nav`, links de âncoras para as seções, seletor dinâmico de idiomas (`pt`/`en`) e alternador de tema. | `dict: { header: { ... } }` |
| **`Hero.tsx`** | Server Component | Apresentação principal, foto de perfil, badges de destaque ("Full Stack"), resumo biográfico, links sociais (LinkedIn, GitHub, WhatsApp) e informações de contato. | `dict: { hero: { ... } }` |
| **`Skills.tsx`** | Server Component | Grade de tecnologias e competências categorizadas (Back-end, Front-end, DevOps, Bancos de Dados, Ferramentas). | `dict: { skills: { ... } }` |
| **`Experience.tsx`** | Server Component | Linha do tempo de trajetória profissional e experiências no setor público e privado. | `dict: { experience: { ... } }` |
| **`Education.tsx`** | Server Component | Formação acadêmica (Sistemas para Internet / UniALFA), certificações e cursos técnicos. | `dict: { education: { ... } }` |
| **`Projects.tsx`** | Server Component | Vitrine dos principais projetos em destaque com tags tecnológicas, resumos e links para repositórios / detalhes. | `dict: { projectsSection: { ... } }` |
| **`ThemeToggle.tsx`** | Client Component (`"use client"`) | Botão animado para alternância entre temas Claro (`light`) e Escuro (`dark`) via `next-themes`. | Nenhuma (consome hook `useTheme`) |
| **`ThemeProvider.tsx`** | Client Component (`"use client"`) | Provedor de contexto do `next-themes` (`ThemeProvider` com `attribute="class"`). | `children: React.ReactNode` |
| **`Footer.tsx`** | Server Component | Rodapé com links de redes sociais, créditos de autoria e indicação de tecnologias utilizadas. | `dict: { footer: { ... } }` |

---

## 2. Padrões de Criação de Novos Componentes

Ao criar novos componentes de UI em `src/components/`:
1. **Defina Interfaces TypeScript**: Exporte explicitamente a interface das props no próprio arquivo.
2. **Priorize Server Components**: Só declare `"use client"` se houver interação do usuário com estado local, hooks ou eventos do navegador.
3. **Consuma Dicionários**: NUNCA utilize textos fixos (*hardcoded*); sempre receba os dados traduzidos via `dict`.
4. **Adote Classes do Design System**: Utilize as variáveis de `globals.css` e utilitários do TailwindCSS v4.
