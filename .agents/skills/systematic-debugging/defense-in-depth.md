# Validação de Defesa em Profundidade (Defense-in-Depth Validation)

## Visão Geral

Quando você corrige um bug causado por dados inválidos, adicionar validação em apenas um local parece ser suficiente. Mas essa verificação única pode ser contornada por diferentes caminhos de código, refatorações ou mocks.

**Princípio fundamental:** Valide em CADA camada pela qual os dados passam. Torne a ocorrência do bug estruturalmente impossível.

## Por Que Múltiplas Camadas

Validação única: "Corrigimos o bug"
Múltiplas camadas: "Tornamos o bug impossível"

Diferentes camadas capturam diferentes casos:
- A validação de entrada (entry validation) captura a maioria dos bugs
- A lógica de negócios captura casos de borda (edge cases)
- Os environment guards evitam perigos específicos de contexto
- O log de debug ajuda quando as outras camadas falham

## As Quatro Camadas

### Camada 1: Validação no Ponto de Entrada (Entry Point Validation)
**Objetivo:** Rejeitar entradas obviamente inválidas nos limites da API

```typescript
function createProject(name: string, workingDirectory: string) {
  if (!workingDirectory || workingDirectory.trim() === '') {
    throw new Error('workingDirectory não pode ser vazio');
  }
  if (!existsSync(workingDirectory)) {
    throw new Error(`workingDirectory não existe: ${workingDirectory}`);
  }
  if (!statSync(workingDirectory).isDirectory()) {
    throw new Error(`workingDirectory não é um diretório: ${workingDirectory}`);
  }
  // ... prosseguir
}
```

### Camada 2: Validação na Lógica de Negócios (Business Logic Validation)
**Objetivo:** Garantir que os dados façam sentido para esta operação

```typescript
function initializeWorkspace(projectDir: string, sessionId: string) {
  if (!projectDir) {
    throw new Error('projectDir é obrigatório para a inicialização do workspace');
  }
  // ... prosseguir
}
```

### Camada 3: Environment Guards
**Objetivo:** Evitar operações perigosas em contextos específicos

```typescript
async function gitInit(directory: string) {
  // Em testes, recusa o git init fora de diretórios temporários
  if (process.env.NODE_ENV === 'test') {
    const normalized = normalize(resolve(directory));
    const tmpDir = normalize(resolve(tmpdir()));

    if (!normalized.startsWith(tmpDir)) {
      throw new Error(
        `Recusando git init fora do diretório temporário durante testes: ${directory}`
      );
    }
  }
  // ... prosseguir
}
```

### Camada 4: Instrumentação de Debug (Debug Instrumentation)
**Objetivo:** Capturar contexto para investigação forense

```typescript
async function gitInit(directory: string) {
  const stack = new Error().stack;
  logger.debug('Prestes a executar git init', {
    directory,
    cwd: process.cwd(),
    stack,
  });
  // ... prosseguir
}
```

## Aplicando o Padrão

Quando você encontrar um bug:

1. **Rastreie o fluxo de dados** - Onde o valor incorreto se origina? Onde é usado?
2. **Mapeie todos os checkpoints** - Liste todos os pontos pelos quais os dados passam
3. **Adicione validação em cada camada** - Entrada, negócios, ambiente, debug
4. **Teste cada camada** - Tente contornar a camada 1, verifique se a camada 2 o captura

## Exemplo de Sessão

Bug: `projectDir` vazio causou `git init` no código-fonte

**Fluxo de dados:**
1. Setup do teste → string vazia
2. `Project.create(name, '')`
3. `WorkspaceManager.createWorkspace('')`
4. `git init` é executado em `process.cwd()`

**Quatro camadas adicionadas:**
- Camada 1: `Project.create()` valida que não é vazio/existe/é gravável
- Camada 2: `WorkspaceManager` valida que projectDir não é vazio
- Camada 3: `WorktreeManager` recusa git init fora de tmpdir nos testes
- Camada 4: Log do stack trace antes do git init

**Resultado:** Todos os 1847 testes passaram, bug impossível de reproduzir

## Insight Principal

Todas as quatro camadas foram necessárias. Durante os testes, cada camada capturou bugs que as outras deixaram passar:
- Diferentes caminhos de código contornaram a validação de entrada
- Mocks contornaram as verificações da lógica de negócios
- Casos de borda em diferentes plataformas exigiram guards de ambiente
- O log de debug identificou o uso indevido estrutural

**Não pare em um único ponto de validação.** Adicione verificações em todas as camadas.
