# Especificação: Validações, Travas e Tratamento de Erros

Este documento define as diretrizes obrigatórias para validação de dados, aplicação de regras de negócios no backend e tratamento de erros no sistema **Admin Conselhos**.

---

## 1. Camadas de Validação

### A. Frontend (jQuery Validate)
*   Formulários devem utilizar a classe `.form-validate-jquery` para ativar a validação via jQuery Validate.
*   Mensagens de erro são inseridas dinamicamente com a classe `.validation-invalid-label` (definida no layout do template Limitless).
*   Evitar inline styles para mensagens de erro; utilizar a formatação automática fornecida pelo JavaScript do template (`public/assets/js/pages/form_validation.js`).

### B. Backend (Slim Controllers)
*   **Validação de Parâmetros:** Validar se os campos obrigatórios estão preenchidos antes de chamar a persistência.
*   **Segurança:** Validar a tipagem (ex: se IDs enviados são inteiros válidos) e sanitizar dados de entrada para evitar brechas de segurança.

---

## 2. Padrão de Mensagens de Feedback

Toda falha de validação ou erro de operação deve resultar em uma mensagem clara e estruturada para o usuário, respeitando as seguintes convenções:

1.  **Sem Jargões Técnicos:** É proibido exibir mensagens de erro brutas do banco de dados (ex: `SQLSTATE[23000]: Integrity constraint violation`). O sistema deve capturar esses erros e traduzi-los para uma linguagem amigável.
2.  **Mensagens Orientadas à Ação:** A mensagem deve explicar de forma simples o que deu errado e o que o usuário deve fazer para corrigir.
3.  **Idioma:** Todas as mensagens de erro ou feedback devem ser apresentadas em Português do Brasil (PT-BR).
4.  **Feedback via Sessão Flash:** Utilizar o sistema de flash messages para expor mensagens de sucesso ou erro nas telas:
    *   Erro: `$this->flash->addMessage('error', 'Mensagem explicativa.');`
    *   Sucesso: `$this->flash->addMessage('success', 'Operação realizada com sucesso.');`
5.  **Exibição nas Views:** A view deve incluir `components/alert.twig` (ou bloco equivalente) para exibir os alertas de forma destacada e estilizada no topo da página.

---

## 3. Resiliência de Conexões e Serviços

*   **Try/Catch Obrigatório:** Qualquer chamada de banco de dados ou integração externa (ex: upload de arquivo) que possa lançar exceções deve estar envolvida em blocos `try-catch`.
*   **Fallback Gracioso:** Em caso de exceção de banco de dados, redirecionar o usuário para a página anterior com uma mensagem flash amigável em vez de permitir que a aplicação trave ou exiba um erro 500 sem estilo.
