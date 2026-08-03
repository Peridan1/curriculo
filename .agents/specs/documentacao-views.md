# Guia e Documentação de Views e Componentes (Twig)

Este documento descreve a estrutura de diretórios das views Twig da aplicação **Admin Conselhos**, o funcionamento do layout base, o mapeamento de seções e o catálogo de componentes reutilizáveis, incluindo parâmetros aceitos e exemplos práticos de uso.

---

## 1. Estrutura de Diretórios (`resources/views/`)

A camada de visualização é organizada nas seguintes pastas para maximizar a reutilização e o isolamento de escopo:

* **`layout/`**: Contém o esqueleto principal (`default.twig`), templates de erros e layouts auxiliares de carregamento de scripts (como `scripts_table.twig` e `scripts_forms.twig`).
* **`sections/`**: Partes estáticas, rodapés de formulários, menus e blocos compartilhados que compõem a interface comum (ex: `navbar.twig`, `sidebar.twig`, `footer.twig`, `form-submit.twig`, `endereco.twig`).
* **`components/`**: Elementos de controle atômicos e independentes de lógica de negócio (ex: inputs, dropdowns select, editores de texto, alertas e uploads).
* **`pages/`**: Páginas de visualização específicas dos módulos administrativos (ex: `dashboard.twig`, `login.twig`, `usuario/index.twig`, `edital/cadastrar.twig`).

---

## 2. Layouts Base e Auxiliares (`layout/`)

### 2.1. Layout Principal (`layout/default.twig`)
Fornece o esqueleto HTML5 padrão da aplicação, carregando folhas de estilo, fontes, biblioteca de ícones Icomoon, scripts core, modal de visualização de imagem, menu flutuante de acessibilidade e VLibras.

* **Exemplo de Uso**:
```twig
{% extends "layout/default.twig" %}

{% block title %}Título da Página{% endblock %}

{% block styles %}
    {# CSS adicional local da página #}
{% endblock %}

{% block content %}
    {# Conteúdo principal da página #}
{% endblock %}

{% block scripts %}
    {# JS adicional local da página #}
{% endblock %}
```

### 2.2. Importador de Scripts de Tabelas (`layout/scripts_table.twig`)
Efetua a importação em lote das bibliotecas JavaScript necessárias para a inicialização de tabelas interativas (Datatables), recursos de responsividade e botões de exportação (PDF, Excel, Csv).

* **Exemplo de Uso**:
```twig
{% block scripts %}
    {% include "layout/scripts_table.twig" %}
    <script>
        $(document).ready(function() {
            $('.datatable-responsive').DataTable();
        });
    </script>
{% endblock %}
```

### 2.3. Importador de Scripts de Formulários (`layout/scripts_forms.twig`)
Centraliza as importações necessárias para validação avançada de campos de formulário, switches interativos, touchspin, uniform styling e componentes wizard de etapas (steps).

---

## 3. Seções Compartilhadas (`sections/`)

### 3.1. Bloco de Endereço Cep-Rua-Bairro (`sections/endereco.twig`)
Renderiza um grid de formulário padronizado com campos de CEP, Logradouro, Número, Bairro, Complemento, Estado e Cidade. Os campos de Estado e Cidade são carregados e filtrados dinamicamente via requisição Ajax pelo app.js.

* **Parâmetros**:
  * `endereco` (objeto, opcional): Entidade ou objeto contendo dados de endereço previamente salvos.
  * `estados` (array): Lista de estados/UFs carregados do banco.
  * `cidades` (array): Lista de cidades carregadas do banco.

* **Exemplo de Uso**:
```twig
{{ include('sections/endereco.twig', {
    'endereco': entidade.endereco,
    'estados': lista_estados,
    'cidades': lista_cidades
}) }}
```

### 3.2. Rodapé de Envio do Formulário (`sections/form-submit.twig`)
Deve ser incluído no final de todos os formulários de cadastro e edição para garantir botões consistentes de salvar e cancelar alinhados via Flexbox.

* **Exemplo de Uso**:
```twig
<form action="..." method="post">
    ...
    {{ include('sections/form-submit.twig') }}
</form>
```

### 3.3. Barra de Navegação Superior (`sections/navbar.twig`)
Renderiza a barra superior fixa do painel contendo a logomarca principal, botões de alternância da barra lateral e o menu dropdown do usuário logado.

### 3.4. Menu Lateral Administrativo (`sections/sidebar.twig`)
Monta a barra lateral de navegação do painel, contendo o avatar e nome do usuário logado e a lista de links organizados de acordo com a hierarquia e módulos do sistema.

---

## 4. Catálogo de Componentes Reutilizáveis (`components/`)

### 4.1. Input de Formulário (`input.twig`)
Utilizado para entradas de texto simples, senhas, e-mails, números, etc.

* **Exemplo de Uso**:
```twig
{% include 'components/input.twig' with {
    'name': 'nome',
    'label': 'Nome do Usuário',
    'value': usuario.nome,
    'required': true,
    'placeholder': 'Digite o nome completo',
    'formText': 'Este nome será exibido nos relatórios oficiais.'
} %}
```

### 4.2. Dropdown Select (`select.twig`)
Utilizado para campos de seleção única baseados em locais de listas dinâmicas ou estáticas.

* **Exemplo de Uso**:
```twig
{% include 'components/select.twig' with {
    'name': 'idsituacao',
    'label': 'Situação do Registro',
    'options': [
        { 'value': 1, 'text': 'Ativo' },
        { 'value': 0, 'text': 'Inativo' }
    ],
    'selected': registro.idsituacao|default(1),
    'required': true,
    'placeholder': 'Selecione a situação...'
} %}
```

### 4.3. Textarea e Editor Rich Text (`textarea.twig`)
Utilizado para grandes blocos de texto ou campos de texto com formatação HTML avançada (Summernote).

* **Exemplo de Uso (Rich Text Editor)**:
```twig
{% include 'components/textarea.twig' with {
    'name': 'conteudo',
    'label': 'Texto da Notícia',
    'value': noticia.conteudo,
    'required': true,
    'inputClass': 'summernote'
} %}
```

### 4.4. Alertas de Feedback Temporário (`alert.twig`)
Renderiza mensagens de feedback enviadas via sessão do Slim Flash Messages. Deve ser incluído logo no início da área de conteúdo de todas as telas de listagem ou formulários.

### 4.5. Cabeçalho de Página e Breadcrumbs (`page-header.twig`)
Monta o título da página e a barra de caminhos (Breadcrumbs) de forma uniforme.

* **Exemplo de Uso**:
```twig
{% include 'components/page-header.twig' with {
    'title': 'Cadastrar Novo Curso',
    'active_label': 'Cadastrar',
    'parent_url': path_for('curso'),
    'parent_label': 'Curso'
} %}
```

### 4.6. Ações da Tabela (`table-actions.twig`)
Agrupa ações específicas de um registro de tabela em um dropdown consistente, evitando a duplicação de marcação HTML e preservando o estilo padrão do template.

* **Exemplo de Uso**:
```twig
{% include 'components/table-actions.twig' with {
    'actions': [
        { 
            'url': path_for('form-usuario', { 'id': usuario.idusuario }), 
            'icon': 'icon-pencil7', 
            'label': 'Editar' 
        },
        { 
            'url': '#', 
            'icon': 'icon-trash text-danger', 
            'label': 'Excluir', 
            'class': 'excluir-item', 
            'attrs': 'data-id="' ~ usuario.idusuario ~ '"' 
        }
    ]
} %}
```

### 4.7. Upload de Imagem com Preview (`image-upload.twig`)
Componente avançado que lida com o preview da imagem salva no banco, permite o download da imagem original, oferece checkbox de exclusão física no backend e renderiza o input file padrão.

* **Exemplo de Uso**:
```twig
{% include 'components/image-upload.twig' with {
    'label': 'Foto de Perfil',
    'name': 'url_imagem',
    'current_image': usuario.urlImagem,
    'upload_dir': 'usuario',
    'required': false,
    'shape': 'circle',
    'help_text': 'Formatos permitidos: JPG, PNG. Tamanho máximo: 2MB.'
} %}
```
