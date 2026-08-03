<?php

// Script PHP CLI para verificar o status e conectividade do ambiente local.
// Deve ser rodado a partir da raiz do Laravel.

if (php_sapi_name() !== 'cli') {
    die("Este script só pode ser executado via CLI.\n");
}

echo "=== Verificando Saúde das Conexões locais ===\n";

// 1. Carrega o autoload do Laravel para ter acesso às classes do framework
$autoload = __DIR__ . '/../../vendor/autoload.php';
$bootstrap = __DIR__ . '/../../bootstrap/app.php';

if (!file_exists($autoload) || !file_exists($bootstrap)) {
    echo "\033[31m[ERRO]\033[0m Dependências não encontradas. Rode 'composer install' primeiro.\n";
    exit(1);
}

require $autoload;
$app = require_once $bootstrap;

// Inicializa o Kernel Artisan para resolver as facades e configurações
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

// 2. Testa conexão com o Banco de Dados
try {
    Illuminate\Support\Facades\DB::connection()->getPdo();
    echo "\033[32m[OK]\033[0m Conexão com o Banco de Dados estabelecida com sucesso.\n";
} catch (\Exception $e) {
    echo "\033[31m[ERRO]\033[0m Falha ao conectar ao Banco de Dados: " . $e->getMessage() . "\n";
}

// 3. Testa conexão com o Redis
try {
    $redis = Illuminate\Support\Facades\Redis::connection();
    $redis->ping();
    echo "\033[32m[OK]\033[0m Conexão com o Redis ativa e respondendo.\n";
} catch (\Exception $e) {
    echo "\033[31m[ERRO]\033[0m Falha ao conectar ao Redis: " . $e->getMessage() . "\n";
}

// 4. Testa Permissões de escrita do log do Laravel
$logFile = storage_path('logs/laravel.log');
if (is_writable(dirname($logFile))) {
    echo "\033[32m[OK]\033[0m O diretório de logs do Laravel possui permissão de escrita.\n";
} else {
    echo "\033[31m[ERRO]\033[0m O diretório de logs do Laravel NÃO tem permissão de escrita.\n";
}

echo "=== Fim da Verificação ===\n";
exit(0);
