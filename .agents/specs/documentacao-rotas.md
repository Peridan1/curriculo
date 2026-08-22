# Catálogo e Documentação de Rotas (Next.js 16 App Router)

Este documento descreve a arquitetura de roteamento, rotas dinâmicas, middleware de internacionalização e parâmetros de URL do projeto **Curriculo / Portfólio Peridan.dev**.

---

## 1. Mapeamento de Rotas da Aplicação

| Rota | Tipo | Arquivo de Origem | Propósito | Idiomas Suportados |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Redirecionamento (Proxy) | `src/proxy.ts` | Detecta o idioma do navegador (`Accept-Language`) e redireciona para `/[lang]`. | `pt`, `en` (fallback: `pt`) |
| `/[lang]` | Server Component | `src/app/[lang]/page.tsx` | Página inicial completa (Hero, Skills, Experience, Education, Projects, Footer). | `pt`, `en` |
| `/[lang]/projetos` | Server Component | `src/app/[lang]/projetos/page.tsx` | Hub/Galeria completa com todos os projetos do desenvolvedor. | `pt`, `en` |
| `/[lang]/projetos/[slug]` | Server Component Dinâmico | `src/app/[lang]/projetos/[slug]/page.tsx` | Página de detalhes técnicos aprofundados de um projeto específico. | `pt`, `en` |

---

## 2. Middleware / Proxy de Idioma (`src/proxy.ts`)

* **Funcionamento**: Intercepta requisições HTTP antes da renderização.
* **Critério de Redirecionamento**: Se a rota não iniciar com `/pt` ou `/en`, insere o prefixo correspondente à preferência do usuário.
* **Matcher**: Ignora rotas de API, arquivos estáticos de imagem/fontes (`.png`, `.svg`, `.ico`) e chunks internos do Next.js (`_next`).

```ts
export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
```

---

## 3. Resolução Assíncrona de Parâmetros (Next.js 16)

No Next.js 16, os `params` de páginas e layouts são Promises assíncronas:

```tsx
export default async function Page({
    params,
}: {
    params: Promise<{ lang: string; slug?: string }>;
}) {
    const { lang, slug } = await params;
    const activeLang = lang === "pt" || lang === "en" ? lang : "pt";
    // ...
}
```

---

## 4. Tratamento de Rotas Inexistentes (404)

* Quando um slug de projeto não existe no dicionário correspondente (`dict.projectsList[slug]`), a função `notFound()` do `next/navigation` é invocada imediatamente, renderizando a página `_not-found`.
