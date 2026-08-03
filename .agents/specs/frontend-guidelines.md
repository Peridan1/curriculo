# Diretrizes de Frontend (UI/UX) - Admin Conselhos

Este documento especifica os padrões de desenvolvimento visual, performance de carregamento e boas práticas na interface do usuário (Bootstrap 4 + Twig + Icomoon).

---

## 1. Otimização de Recursos e Performance

Para manter o carregamento das páginas rápido e garantir o funcionamento em ambientes sem internet externa:

- **Sem Fontes ou Ícones Externos (CDNs):** É proibido importar novos pacotes de ícones via link CDN.
- **Ícones locais:** Toda iconografia deve usar a fonte local Icomoon (`class="icon-..."`), que já está incorporada ao projeto.

---

## 2. Padrão de Ícones em Elementos

Os ícones devem respeitar as margens corretas do Bootstrap 4 para evitar que fiquem colados ao texto:

- **Ícones à Esquerda do Texto**: Usar a classe `.mr-2` no ícone:
  ```html
  <a href="#" class="btn btn-primary">
      <i class="icon-plus22 mr-2"></i> Cadastrar
  </a>
  ```
- **Ícones à Direita do Texto**: Usar a classe `.ml-2` no ícone:
  ```html
  <button class="btn btn-primary" type="submit">
      Salvar <i class="icon-arrow-right14 ml-2"></i>
  </button>
  ```
- **Evitar espaçamento manual com entidades HTML** (como `&nbsp;`) para separação do ícone e texto.

---

## 3. Comentários em arquivos Twig

> [!IMPORTANT]
> - Em arquivos de template Twig (`.twig`), utilize **exclusivamente** os comentários nativos do Twig: `{# comentário #}`.
> - **Nunca** utilize comentários HTML convencionais: `<!-- comentário -->`.
> - Os comentários do Twig são removidos em tempo de compilação no servidor, impedindo a exposição de trechos de código comentados ou observações de desenvolvimento ao cliente.
