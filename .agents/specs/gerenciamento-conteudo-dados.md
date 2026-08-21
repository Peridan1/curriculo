# Estrutura e Gerenciamento de Conteúdo e Dados (Dicionários JSON)

Este documento define os padrões para manutenção, estruturação e adição de novos conteúdos nos dicionários de dados do projeto **Curriculo / Portfólio Peridan.dev**.

---

## 1. Fonte Única de Conteúdo (`src/dictionaries/`)

Como uma aplicação orientada a conteúdo estático e dinâmico via i18n, os dados biográficos, profissionais e de projetos são armazenados em:
* `src/dictionaries/pt.json` (Português do Brasil)
* `src/dictionaries/en.json` (Inglês)

---

## 2. Estrutura dos Módulos de Conteúdo

### A. Metadados e SEO (`seo`)
Define o título da aba do navegador, metatags de descrição e palavras-chave.
```json
"seo": {
    "title": "Daniel Satel Pereira | Full Stack Developer",
    "description": "Portfólio profissional de Daniel Satel Pereira..."
}
```

### B. Habilidades (`skills`)
Categorias técnicas (`backend`, `frontend`, `devops`, `database`, `tools`) com listas ordenadas de tecnologias.

### C. Trajetória Profissional (`experience`)
Array ordenado cronologicamente (do mais recente para o mais antigo) contendo:
* `role`: Cargo exercido
* `company`: Nome da empresa / instituição
* `period`: Período de atuação (ex: `2024 - Presente`)
* `description`: Descrição das responsabilidades e conquistas
* `techs`: Array de tecnologias aplicadas no cargo

### D. Formação Acadêmica (`education`)
Array de cursos e graduações com instituição, título, período e status.

### E. Vitrine e Detalhes de Projetos (`projectsSection` e `projectsList`)
* `projectsSection.projects`: Lista resumida exibida na página inicial.
* `projectsList`: Objeto indexado por slug (ex: `"curriculo-peridan"`) contendo detalhes profundos (desafios técnicos superados, links de repositório, imagem de capa e tags).

---

## 3. Regra de Ouro para Novos Cadastros

Sempre que um novo projeto, habilidade ou experiência for adicionado ou alterado, a edição deve ser replicada **obrigatoriamente em ambos os arquivos (`pt.json` e `en.json`)**, preservando as mesmas chaves e tipos de dados.
