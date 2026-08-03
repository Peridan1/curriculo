# Catálogo e Documentação de Rotas do Sistema

Este documento descreve todas as rotas ativas da aplicação **Admin Conselhos**, mapeando seus métodos HTTP, caminhos de URL, classes controladoras correspondentes e nomes internos no framework Slim.

---

## 1. Rotas Públicas (Sem Autenticação)

Rotas de acesso inicial e controle de autenticação do usuário.

| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/login` | `LoginAdmin::class` | `login` | Renderiza a tela de login do painel administrativo. |
| **POST** | `/login` | `LoginAdmin::class:login` | `login-submit` | Processa e valida as credenciais de login informadas. |

---

## 2. Painel Administrativo (Autenticado)

Grupo de rotas restritas protegidas por token e middleware (`ValidaToken::class`). A ordenação reflete exatamente a disposição dos itens na sidebar lateral.

### 2.1. Geral / Dashboard
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/` | `Dashboard::class` | `home` | Renderiza a página inicial (Dashboard) com contadores e atalhos. |
| **GET** | `/logoff` | `Logoff::class` | `logoff` | Encerra a sessão administrativa atual e redireciona para o login. |

### 2.2. Módulo: Sobre
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/sobre` | `SobreController::class` | `sobre` | Lista os tópicos da página informativa "Sobre". |
| **POST** | `/sobre/salvar` | `SobreController::class` | `salvar-sobre` | Salva alterações em tópicos da página informativo. |
| **POST** | `/sobre/remover/{idsobretopico}` | `SobreController::class:removerTopico` | `remover-topico` | Remove um tópico da página informativa. |

### 2.3. Módulo: Banners
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/banner` | `BannerPesquisar::class` | `banner` | Exibe a lista de banners cadastrados no sistema. |
| **GET** | `/banner/cadastrar[/{id}]` | `BannerManutencao::class` | `form-banner` | Abre o formulário de cadastro/edição de banner. |
| **POST** | `/banner/salvar` | `BannerManutencao::class` | `salvar-banner` | Salva o registro do banner e processa o upload de imagem. |

### 2.4. Módulo: Doações
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/doacao` | `Doacao::class` | `doacao` | Exibe o relatório de doações e boletos emitidos. |

### 2.5. Módulo: Resoluções
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/resolucao` | `ResolucaoPesquisar::class` | `resolucao` | Lista todas as resoluções de conselhos cadastradas. |
| **GET** | `/resolucao/cadastrar[/{id}]` | `ResolucaoManutencao::class` | `form-resolucao` | Abre o formulário de cadastro/edição de resolução. |
| **POST** | `/resolucao/salvar` | `ResolucaoManutencao::class` | `salvar-resolucao` | Salva as informações da resolução (título, deliberação, mes/ano). |

### 2.6. Módulo: Cursos
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/curso` | `CursoPesquisar::class` | `curso` | Exibe a listagem de cursos ofertados. |
| **GET** | `/curso/cadastrar[/{id}]` | `CursoManutencao::class` | `form-curso` | Abre formulário de cadastro/edição de curso. |
| **POST** | `/curso/salvar` | `CursoManutencao::class` | `salvar-curso` | Salva as informações e uploads do curso. |
| **GET** | `/curso/inscricao[/{id}]` | `CursoInscricaoManutencao::class` | `form-inscricao` | Abre formulário de inscrição em um curso. |
| **POST** | `/curso/inscricao/salvar` | `CursoInscricaoManutencao::class` | `salvar-inscricao` | Processa a inscrição de um participante em um curso. |
| **GET** | `/curso/inscrito` | `CursoInscricaoPesquisar::class` | `curso-inscrito` | Exibe relatório de inscritos em cursos. |

### 2.7. Módulo: Editais e Inscrições
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/edital` | `EditalPesquisar::class` | `edital` | Lista os editais cadastrados. |
| **GET** | `/edital/cadastrar[/{id}]` | `EditalManutencao::class` | `form-edital` | Abre o formulário de cadastro/edição de edital. |
| **POST** | `/edital/salvar` | `EditalManutencao::class` | `salvar-edital` | Salva o edital e processa o upload de arquivos PDF. |
| **PUT** | `/edital/excluir` | `ArquivoEditalExluir::class` | `excluir-edital` | Remove fisicamente um arquivo associado ao edital. |
| **GET** | `/edital/inscricao/conselheiro[/{id}]` | `ConselheiroManutencao::class` | `form-conselheiro` | Abre formulário de inscrição para conselheiro. |
| **POST** | `/edital/inscricao/conselheiro/salvar` | `ConselheiroManutencao::class` | `salvar-conselheiro` | Processa e valida inscrição de conselheiro. |
| **PUT** | `/edital/inscricao/conselheiro/excluir` | `ConselheiroDocumentoExluir::class` | `excluir-documento-conselheiro` | Exclui documento enviado pelo candidato a conselheiro. |
| **GET** | `/edital/inscricao/eleitor[/{id}]` | `EleitorManutencao::class` | `form-eleitor` | Abre formulário de credenciamento de eleitor. |
| **POST** | `/edital/inscricao/eleitor/salvar` | `EleitorManutencao::class` | `salvar-eleitor` | Processa e valida o credenciamento de eleitor. |
| **GET** | `/edital/inscricao/eleitor/comprovante` | `Comprovante::class` | `comprovante-eleitor` | Emite o comprovante em PDF do credenciamento do eleitor. |
| **GET** | `/edital/inscrito/conselheiro` | `ConselheiroPesquisar::class` | `conselheiro` | Exibe o relatório de conselheiros inscritos em editais. |
| **GET** | `/edital/inscrito/eleitor` | `EleitorPesquisar::class` | `eleitor` | Exibe o relatório de eleitores credenciados em editais. |

### 2.8. Módulo: Tipos de Documento (Editais)
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/tipo-documento` | `TipoDocumentoPesquisar::class` | `tipodocumento` | Lista as definições de tipos de documentos exigidos. |
| **GET** | `/tipo-documento/cadastrar[/{id}]` | `TipoDocumentoManutencao::class` | `form-tipodocumento` | Abre o formulário de definição do tipo de documento. |
| **POST** | `/tipo-documento/salvar` | `TipoDocumentoManutencao::class` | `salvar-tipodocumento` | Grava o tipo de documento. |

### 2.9. Módulo: Notícias e Categorias
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/noticia` | `NoticiaPesquisar::class` | `noticia` | Exibe a lista de notícias cadastradas. |
| **GET** | `/noticia/cadastrar[/{id}]` | `NoticiaManutencao::class` | `form-noticia` | Abre o formulário de cadastro/edição de notícia. |
| **POST** | `/noticia/salvar` | `NoticiaManutencao::class` | `salvar-noticia` | Grava a notícia e faz upload da foto principal/galeria. |
| **GET** | `/categoria` | `CategoriaPesquisar::class` | `categoria` | Lista as categorias temáticas para notícias. |
| **GET** | `/categoria/cadastrar[/{id}]` | `CategoriaManutencao::class` | `form-categoria` | Abre formulário de cadastro/edição de categoria. |
| **POST** | `/categoria/salvar` | `CategoriaManutencao::class` | `salvar-categoria` | Grava a categoria. |

### 2.10. Módulo: Entidades
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/entidade` | `EntidadePesquisar::class` | `entidade` | Lista as entidades sociais cadastradas no portal. |
| **GET** | `/entidade/cadastrar[/{id}]` | `EntidadeManutencao::class` | `form-entidade` | Abre formulário de cadastro/edição de entidade. |
| **POST** | `/entidade/salvar` | `EntidadeManutencao::class` | `salvar-entidade` | Grava dados da entidade e processa fotos. |

### 2.11. Módulo: Projetos
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/projetos` | `ProjetoPesquisar::class` | `projeto` | Lista os projetos sociais vinculados às entidades. |
| **GET** | `/projetos/cadastrar[/{id}]` | `ProjetoManutencao::class` | `form-projeto` | Abre formulário de cadastro/edição de projeto. |
| **POST** | `/projetos/salvar` | `ProjetoManutencao::class` | `salvar-projeto` | Grava dados do projeto. |

### 2.12. Módulo: Contatos
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/contato` | `ContatoPesquisar::class` | `contato` | Exibe o relatório de mensagens enviadas via "Fale Conosco". |

### 2.13. Módulo: Usuários e Perfis de Acesso
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/usuario` | `UsuarioPesquisar::class` | `usuario` | Lista as contas dos usuários administradores. |
| **GET** | `/usuario/cadastrar[/{id}]` | `UsuarioManutencao::class` | `form-usuario` | Abre formulário de cadastro/edição de usuário admin. |
| **POST** | `/usuario/salvar` | `UsuarioManutencao::class` | `salvar-usuario` | Grava o usuário e processa a foto de perfil. |
| **GET** | `/perfil` | `PerfilPesquisar::class` | `perfil` | Lista os perfis de acesso administrativo (ex: Admin, Operador). |
| **GET** | `/perfil/cadastrar[/{id}]` | `PerfilManutencao::class` | `form-perfil` | Abre formulário de definição do perfil de acesso. |
| **POST** | `/perfil/salvar` | `PerfilManutencao::class` | `salvar-perfil` | Grava o perfil de acesso. |

### 2.14. Manipulação de Imagens
| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **PUT** | `/imagem/excluir` | `DeleteFile::class` | - | Exclui fisicamente um arquivo de imagem do servidor (S3/Local). |
| **POST** | `/imagem/principal` | `UpdatePrincipal::class` | - | Seta qual foto é considerada a principal em uma galeria. |

---

## 3. Serviços de Cron / Segundo Plano

Serviços chamados por robôs ou agendamentos do servidor.

| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/service/boleto` | `BoletoAtualizarSituacao::class` | `service-boleto` | Varre o banco em busca de boletos pendentes e sincroniza com a Caixa. |

---

## 4. API REST Pública (`/api`)

Endpoints abertos utilizados pelo portal público e por integrações externas de terceiros.

| Método HTTP | URL | Controller / Ação | Nome da Rota (Slim) | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **POST** | `/api/validarcpfcnpj` | `ValidarCpfCnpj::class` | `validarcpfcnpj` | Valida CPFs e CNPJs retornando formatação e status do dígito. |
| **GET** | `/api/banner[/{id}]` | `Banner::class` | - | Retorna os banners ativos em formato JSON para o portal. |
| **GET** | `/api/resolucao[/{id}]` | `Resolucao::class` | - | Retorna as resoluções públicas ativas em formato JSON. |
| **GET** | `/api/categoria/noticia` | `Categoria::class` | - | Retorna categorias das notícias do portal. |
| **GET** | `/api/categoria[/{id}]` | `Categoria::class` | - | Retorna uma categoria específica e suas notícias. |
| **GET** | `/api/cep[/{cep}]` | `Cep::class` | `api-cep` | Efetua a busca de endereço via serviço do Correios/ViaCEP. |
| **POST** | `/api/contato/enviar` | `ContatoGravar::class` | - | Recebe e processa envios de mensagens do portal público. |
| **GET** | `/api/cidade/filtro` | `Cidade::class:cidadeEndereco` | - | Retorna lista filtrada de cidades por estado. |
| **GET** | `/api/cidade[/{id}]` | `Cidade::class` | `api-cidade` | Retorna os dados cadastrais da cidade informada. |
| **POST** | `/api/conselheiro/enviar` | `ConselheiroSalvar::class:salvar` | - | Recebe e inicia a inscrição de conselheiro pelo portal. |
| **POST** | `/api/conselheiro/arquivo` | `ConselheiroSalvar::class:salvarArquivo` | - | Recebe e salva uploads de documentos da inscrição de conselheiros. |
| **GET** | `/api/conselheiro[/{id}]` | `Conselheiro::class` | `api-conselheiro` | Retorna dados cadastrais da inscrição do conselheiro. |
| **POST** | `/api/curso/inscricao/enviar` | `CursoInscricaoManutencao::class:salvar` | - | Processa inscrição em cursos realizada pelo portal externo. |
| **GET** | `/api/curso[/{id}]` | `Curso::class` | - | Retorna dados de um curso ativo. |
| **GET** | `/api/curso/pagina/{pagina}/limite/{limite}` | `Curso::class:buscareditalpaginado` | - | Retorna lista paginada de cursos ativos. |
| **GET** | `/api/edital/pagina/{pagina}/limite/{limite}[/buscar/{busca}]` | `Edital::class:buscareditalpaginado` | - | Retorna lista de editais ativos paginada e com filtros de busca. |
| **GET** | `/api/edital/total` | `Edital::class:totaledital` | - | Retorna a contagem total de editais ativos no sistema. |
| **GET** | `/api/edital[/{id}]` | `Edital::class` | - | Retorna os dados completos e arquivos em PDF de um edital. |
| **POST** | `/api/eleitor/enviar` | `EleitorSalvar::class:salvar` | - | Recebe dados de credenciamento de eleitor pelo portal. |
| **POST** | `/api/eleitor/arquivo` | `EleitorSalvar::class:salvarArquivo` | - | Recebe arquivos de credenciamento de eleitor pelo portal. |
| **GET** | `/api/eleitor/edital` | `Eleitor::class:datainscricao` | - | Retorna datas de inscrições de eleitores. |
| **GET** | `/api/eleitor[/{id}]` | `Eleitor::class` | `api-eleitor` | Retorna dados cadastrais de credenciamento de eleitor. |
| **GET** | `/api/entidade[/{id}]` | `Entidade::class` | - | Retorna as entidades de utilidade pública ativas para o portal. |
| **GET** | `/api/estado[/{id}]` | `Estado::class` | `api-estado` | Retorna a lista ou dados específicos de Unidades Federativas. |
| **GET** | `/api/inscrito[/{id}]` | `CursoInscricao::class` | `api-inscrito` | Consulta dados da inscrição informada. |
| **GET** | `/api/noticia/buscar[/{busca}]` | `NoticiaBuscar::class` | - | Busca notícias rápidas no portal. |
| **GET** | `/api/noticia/pagina/{pagina}/limite/{limite}[/buscar/{busca}]` | `NoticiaBuscar::class:buscarnoticiapaginado` | - | Retorna listagem de notícias paginada para o portal público. |
| **GET** | `/api/noticia/imagem[/{id}]` | `NoticiaImagem::class` | - | Retorna imagens/galerias associadas à notícia informada. |
| **GET** | `/api/noticia[/{id}]` | `Noticia::class` | - | Retorna a notícia e seu texto integral. |
| **GET** | `/api/sobre` | `Sobre::class` | - | Retorna a estrutura institucional do portal público. |
| **GET** | `/api/tipo-documento[/{id}]` | `TipoDocumento::class` | - | Retorna detalhes do tipo de documento exigido em inscrições. |
| **GET** | `/api/boleto/{nossoNumero}` | `BoletoConsultar::class` | `boleto` | Consulta e gera a linha digitável do boleto Caixa. |
| **POST** | `/api/boleto/incluir` | `BoletoIncluir::class` | `boleto-incluir` | Registra e gera um novo boleto no sistema da Caixa Econômica Federal. |
