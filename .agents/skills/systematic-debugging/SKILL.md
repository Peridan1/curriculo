---
name: systematic-debugging
description: "Use ao encontrar qualquer bug, falha de teste ou comportamento inesperado, antes de propor correções"
risk: unknown
source: community
date_added: "2026-02-27"
---

# Debugging Sistemático (Systematic Debugging)

## Visão Geral

Correções aleatórias desperdiçam tempo e geram novos bugs. Ajustes rápidos mascaram problemas subjacentes.

**Princípio fundamental:** SEMPRE encontre a causa raiz (root cause) antes de tentar correções. Corrigir apenas sintomas é falha.

**Violar a risca este processo é violar o espírito do debugging.**

## A Lei de Ferro

```
NENHUMA CORREÇÃO SEM INVESTIGAÇÃO DA CAUSA RAIZ ANTES
```

Se você não concluiu a Fase 1, não pode propor correções.

## Quando Usar
Use para QUALQUER problema técnico:
- Falhas de testes
- Bugs em produção
- Comportamento inesperado
- Problemas de performance
- Falhas de build
- Problemas de integração

**Use isso ESPECIALMENTE quando:**
- Sob pressão de tempo (emergências tornam o ato de "adivinhar" tentador)
- "Apenas uma correção rápida" parece óbvia
- Você já tentou múltiplas correções
- A correção anterior não funcionou
- Você não compreende totalmente o problema

**Não pule quando:**
- O problema parece simples (bugs simples também têm causas raiz)
- Você está com pressa (pressa garante retrabalho)
- O gestor quer isso corrigido AGORA (ser sistemático é mais rápido do que ficar se debatendo)

## As Quatro Fases

Você DEVE concluir cada fase antes de prosseguir para a próxima.

### Fase 1: Investigação da Causa Raiz (Root Cause)

**ANTES de tentar QUALQUER correção:**

1. **Leia as Mensagens de Erro com Atenção**
   - Não ignore erros ou avisos
   - Eles frequentemente contêm a solução exata
   - Leia as stack traces por completo
   - Anote números de linhas, caminhos de arquivos, códigos de erro

2. **Reproduza de Forma Consistente**
   - Você consegue reproduzir o problema de forma confiável?
   - Quais são os passos exatos?
   - Acontece todas as vezes?
   - Se não for reproduzível → colete mais dados, não adivinhe

3. **Verifique Mudanças Recentes**
   - O que mudou que poderia causar isso?
   - Git diff, commits recentes
   - Novas dependências, alterações de configuração
   - Diferenças ambientais

4. **Colete Evidências em Sistemas de Múltiplos Componentes**

   **QUANDO o sistema tiver múltiplos componentes (CI → build → assinatura de código, API → serviço → banco de dados):**

   **ANTES de propor correções, adicione instrumentação de diagnóstico:**
   ```
   Para CADA limite de componente:
     - Logue quais dados entram no componente
     - Logue quais dados saem do componente
     - Verifique a propagação de ambiente/configuração
     - Verifique o estado em cada camada

   Execute uma vez para coletar evidências mostrando ONDE ocorre a falha
   DEPOIS analise as evidências para identificar o componente com falha
   DEPOIS investigue esse componente específico
   ```

   **Exemplo (sistema de múltiplas camadas):**
   ```bash
   # Camada 1: Workflow
   echo "=== Segredos disponíveis no workflow: ==="
   echo "IDENTITY: ${IDENTITY:+SET}${IDENTITY:-UNSET}"

   # Camada 2: Script de build
   echo "=== Variáveis de ambiente no script de build: ==="
   env | grep IDENTITY || echo "IDENTITY não está no ambiente"

   # Camada 3: Script de assinatura (signing)
   echo "=== Estado do keychain: ==="
   security list-keychains
   security find-identity -v

   # Camada 4: Assinatura real (signing)
   codesign --sign "$IDENTITY" --verbose=4 "$APP"
   ```

   **Isso revela:** Qual camada falha (segredos → workflow ✓, workflow → build ✗)

5. **Rastreie o Fluxo de Dados**

   **QUANDO o erro estiver profundo na stack de chamadas:**

   Consulte `root-cause-tracing.md` neste diretório para a técnica completa de rastreamento reverso (backward tracing).

   **Versão rápida:**
   - Onde o valor incorreto é originado?
   - O que chamou isso com o valor incorreto?
   - Continue rastreando para cima até encontrar a origem
   - Corrija na origem, não no sintoma

### Fase 2: Análise de Padrão (Pattern Analysis)

**Encontre o padrão antes de corrigir:**

1. **Encontre Exemplos Funcionais**
   - Localize código semelhante que funcione na mesma codebase
   - O que funciona que seja parecido com o que está quebrado?

2. **Compare com Referências**
   - Se estiver implementando um padrão, leia a implementação de referência COMPLETAMENTE
   - Não passe o olho rapidamente - leia cada linha
   - Entenda o padrão por completo antes de aplicar

3. **Identifique Diferenças**
   - O que há de diferente entre o que funciona e o que está quebrado?
   - Liste cada diferença, por menor que seja
   - Não assuma que "isso não importa"

4. **Entenda as Dependências**
   - De quais outros componentes isso precisa?
   - Quais configurações, ambiente?
   - Quais premissas ele assume?

### Fase 3: Hipótese e Teste

**Método científico:**

1. **Formulate uma Única Hipótese**
   - Declare claramente: "Acho que X é a causa raiz porque Y"
   - Escreva isso
   - Seja específico, não vago

2. **Teste de Forma Mínima**
   - Faça a MENOR alteração possível para testar a hipótese
   - Uma variável de cada vez
   - Não corrija várias coisas ao mesmo tempo

3. **Verifique Antes de Continuar**
   - Funcionou? Sim → Fase 4
   - Não funcionou? Formule uma NOVA hipótese
   - NÃO adicione mais correções por cima

4. **Quando Você Não Souber**
   - Diga "Eu não entendo X"
   - Não finja saber
   - Peça ajuda
   - Pesquise mais

### Fase 4: Implementação

**Corrija a causa raiz, não o sintoma:**

1. **Crie um Caso de Teste que Falhe**
   - Reprodução mais simples possível
   - Teste automatizado, se possível
   - Script de teste pontual se não houver framework
   - DEVE ter antes de corrigir
   - Use a skill `superpowers:test-driven-development` para escrever testes que falham adequadamente

2. **Implemente uma Única Correção**
   - Aborde a causa raiz identificada
   - UMA mudança de cada vez
   - Sem melhorias do tipo "já que estou aqui"
   - Sem refatorações agrupadas no mesmo commit

3. **Verifique a Correção**
   - O teste passa agora?
   - Nenhum outro teste quebrou?
   - O problema foi realmente resolvido?

4. **Se a Correção Não Funcionar**
   - PARE
   - Conte: Quantas correções você já tentou?
   - Se < 3: Volte para a Fase 1, reanalise com as novas informações
   - **Se ≥ 3: PARE e questione a arquitetura (passo 5 abaixo)**
   - NÃO tente a Correção nº 4 sem uma discussão de arquitetura

5. **Se Mais de 3 Correções Falharem: Questione a Arquitetura**

   **Padrão que indica problema arquitetural:**
   - Cada correção revela um novo estado compartilhado/acoplamento/problema em um local diferente
   - As correções exigem "refatoração massiva" para serem implementadas
   - Cada correção cria novos sintomas em outros lugares

   **PARE e questione os fundamentos:**
   - Este padrão é fundamentalmente sólido?
   - Estamos "insistindo nele por pura inércia"?
   - Devemos refatorar a arquitetura em vez de continuar corrigindo sintomas?

   **Discuta com seu parceiro humano antes de tentar mais correções**

   Isso NÃO é uma hipótese fracassada - isso é uma arquitetura errada.

## Sinais de Alerta (Red Flags) - PARE e Siga o Processo

Se você se pegar pensando:
- "Correção rápida por enquanto, investigo depois"
- "Tente mudar X e veja se funciona"
- "Adicione várias alterações, execute os testes"
- "Pule o teste, vou verificar manualmente"
- "Provavelmente é X, deixe-me corrigir isso"
- "Não entendo completamente, mas isso pode funcionar"
- "O padrão diz X, mas vou adaptá-lo de forma diferente"
- "Aqui estão os principais problemas: [lista correções sem investigação]"
- Propor soluções antes de rastrear o fluxo de dados
- **"Mais uma tentativa de correção" (quando já tentou 2+)**
- **Cada correção revela um novo problema em um lugar diferente**

**TUDO isso significa: PARE. Volte para a Fase 1.**

**Se mais de 3 correções falharem:** Questione a arquitetura (consulte Fase 4.5)

## Sinais do seu Parceiro Humano de que Você Está Fazendo Errado

**Atenção a estes redirecionamentos:**
- "Isso não está acontecendo?" - Você assumiu sem verificar
- "Isso nos mostrará...?" - Você deveria ter adicionado coleta de evidências
- "Pare de adivinhar" - Você está propondo correções sem entender
- "Pense de forma ultra-profunda sobre isso" - Questione os fundamentos, não apenas os sintomas
- "Estamos travados?" (frustrado) - Sua abordagem não está funcionando

**Ao ver estes sinais:** PARE. Volte para a Fase 1.

## Racionalizações Comuns

| Desculpa | Realidade |
|--------|---------|
| "O problema é simples, não preciso do processo" | Problemas simples também têm causas raiz. O processo é rápido para bugs simples. |
| "Emergência, não há tempo para o processo" | O debugging sistemático é MAIS RÁPIDO do que ficar se debatendo em adivinhações. |
| "Apenas tente isso primeiro, depois investigue" | A primeira correção define o padrão. Faça certo desde o início. |
| "Vou escrever o teste depois de confirmar que a correção funciona" | Correções não testadas não se sustentam. Testar primeiro comprova o funcionamento. |
| "Múltiplas correções de uma vez economizam tempo" | Não é possível isolar o que funcionou. Causa novos bugs. |
| "A referência é muito longa, vou adaptar o padrão" | Compreensão parcial garante bugs. Leia por completo. |
| "Eu vejo o problema, deixe-me corrigi-lo" | Ver sintomas ≠ entender a causa raiz. |
| "Mais uma tentativa de correção" (após 2+ falhas) | 3+ falhas = problema arquitetural. Questione o padrão, não tente corrigir novamente. |

## Referência Rápida

| Fase | Atividades Principais | Critérios de Sucesso |
|-------|---------------|------------------|
| **1. Causa Raiz** | Ler erros, reproduzir, verificar mudanças, coletar evidências | Entender O QUE e POR QUÊ |
| **2. Padrão** | Encontrar exemplos funcionais, comparar | Identificar diferenças |
| **3. Hipótese** | Formular teoria, testar de forma mínima | Hipótese confirmada ou nova hipótese |
| **4. Implementação** | Criar teste, corrigir, verificar | Bug resolvido, testes passam |

## Quando o Processo Revela "Nenhuma Causa Raiz"

Se a investigação sistemática revelar que o problema é verdadeiramente ambiental, dependente de tempo ou externo:

1. Você concluiu o processo
2. Documente o que você investigou
3. Implemente o tratamento adequado (retry, timeout, mensagem de erro)
4. Adicione monitoramento/logs para investigações futures

**Mas:** 95% dos casos de "nenhuma causa raiz" são investigações incompletas.

## Técnicas de Apoio

Estas técnicas fazem parte do debugging sistemático e estão disponíveis neste diretório:

- **`root-cause-tracing.md`** - Rastreie bugs retrospectivamente pela stack de chamadas para encontrar o gatilho original
- **`defense-in-depth.md`** - Adicione validação em múltiplas camadas após encontrar a causa raiz
- **`condition-based-waiting.md`** - Substitua timeouts arbitrários por polling baseado em condição

**Skills relacionadas:**
- **superpowers:test-driven-development** - Para criar o caso de teste que falha (Fase 4, Passo 1)
- **superpowers:verification-before-completion** - Verificar se a correção funcionou antes de declarar sucesso

## Impacto no Mundo Real

De sessões de debugging:
- Abordagem sistemática: 15-30 minutos para corrigir
- Abordagem de correções aleatórias: 2-3 hours de debate e erros
- Taxa de acerto na primeira correção: 95% contra 40%
- Novos bugs introduzidos: Próximo de zero contra frequente

## Limitações
- Use esta skill apenas quando a tarefa corresponder claramente ao escopo descrito acima.
- Não trate o resultado como um substituto para validação específica do ambiente, testes ou revisão especializada.
- Pare e peça esclarecimentos se os dados de entrada necessários, permissões, limites de segurança ou critérios de sucesso estiverem ausentes.
