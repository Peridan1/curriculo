# Padrões de Anotações e Comentários do Sistema (Admin Conselhos)

Este guia define as especificações formais de estilo, idioma e formatação para comentários e documentações internas no projeto **Admin Conselhos**. As regras aplicam-se a todas as views Twig, código de produção PHP, testes automatizados (PHPUnit) e arquivos de configuração do sistema.

---

## 1. Diretrizes Gerais

### Idioma do Código e Comentários
* **Língua**: Todos os comentários de desenvolvimento, documentações de métodos, classes, parâmetros e logs devem ser escritos estritamente em **Português do Brasil (PT-BR)**.
* **Termos Técnicos**: Termos de arquitetura ou engenharia universalmente conhecidos em inglês devem ser mantidos no idioma original (ex: *dependency injection*, *container*, *getter*, *setter*, *middleware*, *Soft Delete*, *Single Responsibility Principle (SRP)*, *mock*).

### Abordagem do Conteúdo
* **Explicar o "Porquê", não o "O Quê"**: Comentários não devem narrar o que o código faz de forma direta (o que a sintaxe já deixa evidente). Eles devem justificar **o motivo** de uma decisão de design, regras de negócio complexas ou contornos para limitações técnicas.
* **Evitar Comentários Obsoletos**: Comentários desatualizados, referências a trechos de códigos antigos comentados ou códigos comentados mortos (*commented-out code*) são estritamente proibidos.

---

## 2. Views Twig (`resources/views/`)

* **Sintaxe**: Usar sempre a marcação nativa do Twig `{# comentário #}`. 
* **Proibição de Comentários HTML**: Nunca utilize a sintaxe HTML `<!-- comentário -->` para anotações de desenvolvimento. Os comentários HTML são renderizados e enviados ao navegador do cliente final, expondo detalhes internos e gerando tráfego desnecessário.
* **Eliminação de Legados**: Comentários em inglês herdados do template de terceiros (Limitless Admin Template 2.x) devem ser ativamente removidos durante manutenções ou novas criações.
  * *Exemplos comuns de remoção*: `{# Content area #}`, `{# /content area #}`, `{# /highlighting rows and columns #}`.
* **Exemplo de Uso Correto**:
  ```twig
  {# Alerta de feedback temporário após ações do usuário #}
  {{ include('components/alert.twig') }}
  ```

---

## 3. Código de Produção PHP (`src/`)

### Comentários de Linha (`//`)
* **Espaçamento**: Sempre inserir um espaço simples após a declaração do comentário.
  * *Correto*: `// Atualiza o token do usuário logado`
  * *Incorreto*: `//Atualiza o token do usuário logado`
* **Localização**: Devem ser colocados imediatamente acima da linha ou bloco de código a que se referem, mantendo a mesma indentação.

### PHPDoc de Classes, Interfaces e Traits
* Devem conter uma descrição curta e objetiva sobre o propósito da classe em PT-BR.
* Caso utilize a tag `@author`, use o formato padronizado: `@author Nome Completo <email@provedor.com>`.

### Propriedades da Classe e Mapeamento ORM/Serializer
* Com a adoção de atributos nativos no PHP 8 (`#[ORM\...]` e `#[Type(...)]`), blocos PHPDoc do tipo `/** @var tipo */` tornam-se redundantes se a propriedade já possuir declaração de tipo nativa do PHP.
* **Regra**: Remover PHPDocs redundantes sobre tipos de propriedades.
  * *Incorreto (Redundante)*:
    ```php
    /**
     * @var int|null
     */
    #[ORM\Column(name: 'idperfil', type: Types::INTEGER)]
    private ?int $idperfil = null;
    ```
  * *Correto*:
    ```php
    #[ORM\Column(name: 'idperfil', type: Types::INTEGER)]
    #[Type('integer')]
    private ?int $idperfil = null;
    ```

### Métodos (Getters, Setters, Actions, Construtores)
* **Proibição de PHPDoc Redundante**: Se a assinatura do método declara nativamente os tipos de dados dos parâmetros e o tipo de retorno, o bloco PHPDoc **não deve existir** se sua única função for repetir essas tipagens ou adicionar descrições óbvias.
  * *Incorreto (Redundante)*:
    ```php
    /**
     * Set cnpjCpf.
     *
     * @param string|null $cnpjCpf
     * @return static
     */
    public function setCnpjCpf(?string $cnpjCpf = null): static
    ```
  * *Correto*:
    ```php
    public function setCnpjCpf(?string $cnpjCpf = null): static
    ```
* **Quando usar PHPDoc em Métodos**:
  1. Para documentar arrays tipados que o PHP não tipa nativamente (ex: `/** @return Categoria[] */`).
  2. Para declarar exceções lançadas que precisam ser tratadas pela camada superior (ex: `/** @throws Exception */`).
  3. Para documentar lógicas de negócio complexas que justifiquem parâmetros específicos.

---

## 4. Testes Automatizados (`test/`)

* **Descrição dos Cenários**: Cada método de teste deve conter um PHPDoc curto explicando em linguagem de negócio o que o teste está validando.
* **Formato**:
  ```php
  /**
   * Valida que o método estático de validação identifica corretamente um CNPJ formatado.
   */
  public function testValidarMetodoEstaticoIdentificaCorretamenteCpfOuCnpj()
  ```

---

## 5. Configurações do Sistema (`config/`)

* **Tradução e Limpeza**: Arquivos de configuração de bootstrap, dependências (`dependencies.php`), middlewares (`middleware.php`) e rotas (`routes.php`) devem ter seus comentários herdados em inglês completamente traduzidos e adaptados para PT-BR.
* **Exemplos**:
  * Substituir `// DIC configuration` por `// Configuração do Container de Injeção de Dependências (DIC)`
  * Substituir `// Monolog` por `// Integração com o Monolog (Gerenciamento de Logs)`
  * Substituir `// Guzzle` por `// Configuração dos clientes de integração HTTP (Guzzle)`
