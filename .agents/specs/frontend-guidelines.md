# Diretrizes de Frontend e Design System (TailwindCSS v4)

Este documento especifica os padrões de design visual, cores semânticas, temas dinâmicos (claro/escuro), responsividade e boas práticas de UI/UX no projeto **Curriculo / Portfólio Peridan.dev**.

---

## 1. Design System e Paleta de Cores Dinâmica

O projeto utiliza **TailwindCSS v4** com tema configurado em `src/app/globals.css` via variáveis CSS dinâmicas e `@theme`:

### Variáveis Principais
| Variável | Modo Escuro (Default) | Modo Claro (`.light`) | Uso Principal |
| :--- | :--- | :--- | :--- |
| `--bg-dynamic` | `#07090e` (Obsidian Cósmico) | `#f1f5f9` (Ice Clean) | Fundo principal da página |
| `--bg-surface` | `#0e121a` | `#ffffff` | Fundo de cards elevados |
| `--text-dynamic` | `#f8fafc` (Ice White) | `#0a0f1d` (Azul Noite) | Texto principal de leitura |
| `--text-muted` | `#94a3b8` | `#475569` | Textos secundários e metadados |
| `--cyan-neon` | `#00f0ff` (Ciano Elétrico) | `#0284c7` (Azul Elétrico) | Destaques principais, badges e links |
| `--emerald-neon` | `#00ff9d` (Verde Matrix) | `#059669` (Esmeralda) | Tags de sucesso e status |
| `--purple-neon` | `#a855f7` (Violeta Cyber) | `#7c3aed` | Gradientes e acentos secundários |
| `--card-glass` | `rgba(14, 18, 27, 0.75)` | `rgba(255, 255, 255, 0.85)` | Efeito de glassmorphism translúcido |

---

## 2. Tipografia e Efeitos Visuais

* **Fonte Principal**: `Lexend, sans-serif` (configurada para leitura moderna e fluida).
* **Glassmorphism com Blur**:
  * Utilize a classe utilitária `.glass-nav` no cabeçalho e `.card-glass` em cartões de destaque.
  * Sempre acompanhada de `transform: translateZ(0)` e `will-change: transform` para forçar renderização acelerada por hardware na GPU.
* **Bordas e Brilhos Neon**:
  * Utilize `.neon-border` e `.neon-glow` para criar ênfase visual interativa em cards e botões no hover.

---

## 3. Responsividade e Mobile-First

* **Breakpoints**: Utilize as convenções do Tailwind (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
* **Containers**: Mantenha o conteúdo centralizado com espaçamento lateral seguro (`px-4 sm:px-6 lg:px-8` e `max-w-6xl` / `max-w-7xl`).
* **Acessibilidade**:
  * Elementos interativos (botões, links, toggles) devem ter área mínima de toque de **44x44px** em dispositivos móveis.
  * Respeite a preferência de redução de movimento `@media (prefers-reduced-motion: reduce)`.
