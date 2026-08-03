# Regras de Banco de Dados e Exclusões - Admin Conselhos

Este documento define os padrões para tratamento de exclusões, inativações e persistência de dados no projeto **Admin Conselhos**.

---

## 1. Tratamento de Exclusões e Inativações

Para manter a integridade histórica dos dados (conselhos, atas, resoluções, editais):

- **Inativação Temporária:** Em vez de exclusão imediata, registros de tabelas como `Usuario` e `Categoria` utilizam uma coluna de situação (`idsituacao`).
- **Estados de Situação:**
  - `idsituacao = 1`: **Ativo** (visível para uso no sistema).
  - `idsituacao = 2`: **Inativo** (desabilitado para novos vínculos, mas mantido para histórico).

---

## 2. Diferença Lógica

| Situação | Comportamento no Sistema |
| :--- | :--- |
| **Ativo (`idsituacao = 1`)** | Disponível para exibição e vinculação em novos registros. |
| **Inativo (`idsituacao = 2`)** | Exibido nas listagens gerais de relatórios, mas indisponível/bloqueado em dropdowns de seleção em novos cadastros. |

---

## 3. Segurança em Consultas SQL

- **Prevenção de SQL Injection:** Sempre use queries preparadas (PDO bindings ou Query Builder seguro) ao buscar registros com filtros de entrada de usuário.
- **Consultas Seguras:** Nunca execute concatenação direta de dados de requisição em blocos SQL brutos (`raw query`).
