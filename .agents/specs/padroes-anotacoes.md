# Padrões de Anotações, Comentários e Tipagem TypeScript

Este guia define as especificações formais de tipagem, documentação JSDoc e estilo de comentários no código do projeto **Curriculo / Portfólio Peridan.dev**.

---

## 1. Diretrizes Gerais de Comentários

* **Língua**: Todos os comentários e documentações devem ser escritos estritamente em **Português do Brasil (PT-BR)**.
* **Termos Técnicos em Inglês**: Mantenha os termos técnicos universais em inglês (ex: *Server Component*, *Client Component*, *Props*, *Hooks*, *Payload*, *Middleware*, *Hydration*, *Bundle*, *Tree-shaking*).
* **Foco no "Porquê"**: Comentários não devem narrar o que a sintaxe óbvia já mostra. Eles devem justificar **o motivo** de uma decisão arquitetural, escolhas de CSS aceleradas por GPU, contornos de comportamento de navegadores ou lógica de i18n.
* **Proibição de Código Morto**: Trechos de código comentados (*commented-out code*) ou anotações obsoletas são proibidos.

---

## 2. Padrões de Tipagem TypeScript

### Contratos de Props em Componentes React
Todos os componentes devem definir interfaces claras para suas propriedades:

```tsx
// Exemplo de contrato de componente com dados do dicionário
export interface HeroProps {
    dict: {
        badge: string;
        greeting: string;
        title: string;
        subtitle: string;
        description: string;
        projectsBtn: string;
        personalInfo: {
            email: string;
            location: string;
        };
    };
    lang: string;
}
```

### JSDoc em Funções Utilitárias e Helpers
Para funções de formatação, manipulação de rotas ou resolução de dicionários, utilize JSDoc explicativo em PT-BR:

```ts
/**
 * Recupera o dicionário de traduções correspondente ao idioma solicitado.
 * @param lang - Código do idioma ('pt' ou 'en')
 * @returns Promessa com o conteúdo completo do dicionário JSON
 */
export async function getDictionary(lang: string) {
    // Implementação...
}
```

---

## 3. Comentários em Folhas de Estilo (CSS)

* Comentários em `src/app/globals.css` devem explicar o papel das variáveis semânticas do tema (modo claro e escuro) e classes utilitárias personalizadas:

```css
/* Paleta semântica do modo claro: tons limpos e contraste balanceado */
:root {
  --bg-dynamic: #f8fafc;
  --text-dynamic: #0f172a;
}

/* Paleta semântica do modo escuro: tons profundos com alto contraste */
.dark {
  --bg-dynamic: #0a0e17;
  --text-dynamic: #f1f5f9;
}
```
