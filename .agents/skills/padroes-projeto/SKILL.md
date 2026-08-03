---
name: padroes-projeto
description: Guia de desenvolvimento e validação de código PHP Slim, Views Twig, Controllers e Componentes com base nas especificações visuais do Admin Conselhos.
---

# Habilidade: Padrões de Projeto (Slim + Twig + Bootstrap 4)

Esta habilidade orienta a IA na criação, alteração e depuração de componentes CRUD (Controllers, Views, Componentes) dentro do projeto Admin Conselhos, assegurando aderência estrita aos padrões arquiteturais especificados.

## Quando Usar
Sempre que for solicitado a:
1. Criar um novo formulário ou listagem na área administrativa.
2. Refatorar views existentes, aplicando padronização visual em formulários, tabelas, modais ou botões.
3. Configurar scripts de inicialização de tabelas e formulários.

## Instruções de Execução

### 1. Pesquisa de Arquivos
Antes de realizar qualquer mudança, leia o guia visual oficial em `.agents/specs/padroes-arquiteturais.md`, o guia de estilo de anotações em `.agents/specs/padroes-anotacoes.md` e examine as views do projeto (por exemplo, `usuario/index.twig` e `usuario/cadastrar.twig`).

### 2. Geração de Formulários e Inputs
Certifique-se de que novos campos utilizem as views compartilhadas do projeto:
- Use `components/input.twig`, `components/select.twig`, `components/textarea.twig`.
- Sempre insira o rodapé do formulário via `{{ include('sections/form-submit.twig') }}`.

### 3. Tabelas de Dados e Ações
- Use sempre o componente `components/table-actions.twig` para renderizar a coluna de edição/ações, evitando duplicar a marcação do dropdown `.list-icons`.
- Evite larguras de colunas fixas via atributos HTML (`width`). Defina via CSS inline (`style="width: 150px;"`).
