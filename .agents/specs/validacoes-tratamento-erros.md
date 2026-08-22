# Especificação: Validações, Resiliência e Tratamento de Erros

Este documento define as diretrizes obrigatórias de validação de dados, integridade de rotas, fallbacks de internacionalização e tratamento de erros no projeto **Curriculo / Portfólio Peridan.dev**.

---

## 1. Tratamento de Rotas e Slugs Dinâmicos

* **Validação de Slugs de Projetos**: Ao acessar `/[lang]/projetos/[slug]`, o sistema verifica se a chave do projeto existe no dicionário `dict.projectsList[slug]`.
* **Disparo de 404 Not Found**: Se o slug for inválido ou não existir para o idioma selecionado, deve-se invocar `notFound()` imediatamente para renderizar a página 404 nativa do Next.js sem quebrar a execução:

```tsx
const project = dict.projectsList ? dict.projectsList[slug] : null;

if (!project) {
    notFound();
}
```

---

## 2. Resiliência de Idiomas e Fallback de Internacionalização

* **Idiomas Válidos**: Apenas `pt` e `en` são aceitos nas rotas `/[lang]`.
* **Sanitização de Idioma**: Caso o parâmetro informado não pertença à lista de idiomas válidos, adote o fallback seguro para `"pt"`:

```ts
const safeLang = lang === "pt" || lang === "en" ? lang : "pt";
```

* **Integridade Estrutural dos Dicionários**: Todos os objetos e nós presentes em `src/dictionaries/pt.json` devem existir com a mesma tipagem e estrutura em `src/dictionaries/en.json`.

---

## 3. Tipagem e Validação em Tempo de Build

* **Verificação Estrita**: O projeto adota `strict: true` no `tsconfig.json`. Qualquer erro de tipo bloqueia o build (`npm run build`).
* **Proteção contra Propriedades Opcionais**: Ao renderizar propriedades que podem não existir em projetos mais simples (ex: `project.challengesTitle` ou `project.tags`), utilize encadeamento opcional e renderização condicional (`project.tags && project.tags.length > 0 && ...`).
