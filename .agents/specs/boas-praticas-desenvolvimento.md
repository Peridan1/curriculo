# Especificação: Boas Práticas de Desenvolvimento

Este documento descreve os padrões recomendados de commits, escrita de código, comentários e princípios de design que devem ser seguidos por todos os desenvolvedores e agentes de IA no projeto.

---

## 1. Padrão de Commits (Conventional Commits em PT-BR)

Sempre adote o padrão **Conventional Commits** adaptado para a língua portuguesa (Português do Brasil). A estrutura geral deve seguir:

```text
<tipo>(<escopo>): <descrição curta em PT-BR>

[corpo detalhado se for uma alteração Normal ou Major]
```

### Tipos de Commit Permitidos:
*   `feat`: Nova funcionalidade para o usuário final.
*   `fix`: Correção de bug.
*   `docs`: Mudanças apenas na documentação.
*   `style`: Alterações que não afetam o significado do código (espaços em branco, formatação, CSS).
*   `refactor`: Alteração de código que não corrige um bug nem adiciona funcionalidade (refatoração).
*   `test`: Adição ou modificação de testes.
*   `chore`: Atualizações de tarefas de build, pacotes, helpers de IDE, gitignore, etc.

### Regras de Descrição por Escala de Mudança:
1.  **Mudanças Pequenas (Minor/Triviais):**
    *   Descrição curta na linha do título.
    *   Não necessita de corpo de texto detalhado.
    *   Exemplo: `fix(usuario): corrigir alinhamento do icone no botao de retorno`
2.  **Mudanças Normais e Grandes (Normal/Major):**
    *   Título curto e objetivo.
    *   **Obrigatório** incluir um corpo (body) de commit detalhando *o que* foi feito, *o porquê* e os arquivos principais afetados.
    *   Exemplo:
        ```text
        feat(usuario): unificar controle de cadastro com novos componentes de formulario

        - Cria suporte para novos inputs e selects reutilizáveis no cadastro de usuário.
        - Centraliza validações de CPF/CNPJ no helper local e redireciona rotas legadas.
        ```

---

## 2. Padrão de Comentários no Código

*   **Comentários Explicativos:** Comente sempre o código para explicar decisões complexas ou regras de negócio não óbvias.
*   **Comentários em Views (Twig):**
    *   **Nunca** utilize comentários em HTML (`<!-- comentário -->`) nas views Twig para documentar lógica interna. Comentários HTML são enviados ao navegador do cliente em produção.
    *   **Sempre** utilize comentários nativos do Twig (`{# comentário #}`). Esses comentários são removidos em tempo de compilação no servidor.

---

## 3. Princípios de Design de Código (Clean Code)

Ao criar novos códigos ou funcionalidades, sempre projete a arquitetura tendo em mente:

1.  **DRY (Don't Repeat Yourself):**
    *   Evite duplicação de lógica. Se o mesmo trecho de código ou layout visual se repetir, extraia para componentes Twig, Helpers ou Classes de Serviço compartilhadas.
2.  **Encapsulamento Eficiente:**
    *   Mantenha a lógica interna de funcionamento das classes oculta de quem as consome. Use modificadores de visibilidade corretos (`private`, `protected`).
3.  **Princípio da Responsabilidade Única (SRP):**
    *   Cada classe (Controller, Model, Service) deve ter apenas uma responsabilidade/motivo para mudar.
    *   Exemplo: Um Controller deve apenas receber a requisição, delegar para a lógica de negócio e retornar a resposta.
