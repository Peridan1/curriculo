# Padrões Arquiteturais e Padrão de Código (Admin Conselhos)

Este documento especifica os padrões de design de código, arquitetura de visualizações (Twig) e convenções visuais adotados no projeto Admin Conselhos.

---

## 1. Padrão de Listagem de Dados (Views Twig)

As telas de listagem de registros (ex: `index.twig`) devem seguir uma estrutura visual unificada baseada no Bootstrap 4 e Limitless Admin Template.

### Estrutura do Layout
- **Layout Base**: Estender `{% extends "layout/default.twig" %}` e definir `{% block title %} Nome do Recurso {% endblock %}`.
- **Scripts**: Incluir os scripts necessários na seção de scripts (ex: `{% include "layout/scripts_table.twig" %}`).
- **Cabeçalho da Página**: Utilizar a estrutura de Page Header do Limitless:
  ```html
  <div class="page-header page-header-light">
      <div class="page-header-content header-elements-md-inline">
          <div class="page-title d-flex">
              <h4><span class="font-weight-semibold">Relatório de [Recurso]</span></h4>
          </div>
      </div>
      <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
          <div class="d-flex">
              <div class="breadcrumb">
                  <a class="breadcrumb-item" href="{{ path_for('home') }}"><i class="icon-home2 mr-2"></i> Home</a>
                  <span class="breadcrumb-item active">[Recurso]</span>
              </div>
          </div>
      </div>
  </div>
  ```

### Estrutura da Tabela e Ações
- **Container**: Envolto em uma `.card`.
- **Tabela**:
  ```html
  <table class="table table-bordered table-hover datatable-button-html5-columns">
      <thead>
          <tr>
              <th>Coluna 1</th>
              <th style="width: 100px;">Ações</th>
          </tr>
      </thead>
      <tbody>
          {% for item in itens %}
              <tr>
                  <td>{{ item.coluna1 }}</td>
                  <td class="text-center">
                      {# Renderização das Ações (dropdown) #}
                      {% include 'components/table-actions.twig' with {
                          'actions': [
                              { 'url': path_for('form-[recurso]', { 'id': item.id }), 'icon': 'icon-pencil7', 'label': 'Editar' }
                          ]
                      } %}
                  </td>
              </tr>
          {% endfor %}
      </tbody>
  </table>
  ```

---

## 2. Padrão de Formulários (Views Twig)

As telas de cadastro/edição (ex: `cadastrar.twig`) devem priorizar os componentes reutilizáveis.

### Componentes de Entrada
* **Campos de Texto**: Usar `{% include 'components/input.twig' with { ... } %}`.
* **Seleções**: Usar `{% include 'components/select.twig' with { ... } %}`.
* **Caixas de Texto**: Usar `{% include 'components/textarea.twig' with { ... } %}`.
* **Rodapé do Formulário**: Usar `{{ include('sections/form-submit.twig') }}` para consistência nos botões de envio.

---

## 3. Padrão de Controllers (PHP Slim)

Os controllers do Slim Framework devem seguir o fluxo MVC padrão:

- **Estrutura**: Receber `$request`, `$response` e `$args` nos métodos de rota.
- **Tratamento de Dados**: Utilizar models ou repositórios para executar a lógica de persistência e validações de banco.
- **Mensagens de Sessão (Flash)**: Setar mensagens de sucesso ou erro usando `$this->flash->addMessage('success', 'Mensagem')` ou `$this->flash->addMessage('error', 'Mensagem')`.
- **Renderização**: Retornar a renderização da view correspondente via Twig:
  ```php
  return $this->view->render($response, 'pages/usuario/index.twig', $data);
  ```
