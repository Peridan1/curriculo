#!/usr/bin/env python3
import os
import json
import redis
from datetime import datetime

# Script para simular o disparo de um Job de relatório no Redis
# direto para o Worker Python, sem passar pela interface do Laravel.

def load_env():
    env_vars = {}
    if os.path.exists('.env'):
        with open('.env') as f:
            for line in f:
                if line.strip() and not line.startswith('#') and '=' in line:
                    key, val = line.strip().split('=', 1)
                    env_vars[key.strip()] = val.strip().strip('"').strip("'")
    return env_vars

def main():
    print("=== Simulando Evento de Relatório no Redis ===")
    
    # Carrega configurações do .env
    env = load_env()
    redis_host = env.get('REDIS_HOST', '127.0.0.1')
    redis_port = int(env.get('REDIS_PORT', 6379))
    redis_password = env.get('REDIS_PASSWORD', None)
    redis_prefix = env.get('REDIS_PREFIX', '')
    
    # Nome da fila
    queue_name = f"{redis_prefix}queues:reports"
    
    # Cria payload estruturado conforme especificação
    payload = {
        "execucao_id": 9999,  # ID fictício para teste
        "tipo": "diario",
        "data_alvo": datetime.today().strftime('%Y-%m-%d'),
        "caminho_arquivo": None
    }
    
    try:
        # Conecta no Redis
        r = redis.Redis(
            host=redis_host,
            port=redis_port,
            password=redis_password,
            decode_responses=True
        )
        
        # Envia a mensagem (RPUSH)
        payload_str = json.dumps(payload)
        r.rpush(queue_name, payload_str)
        
        print(f"\033[92m[SUCESSO]\033[0m Mensagem publicada na fila '{queue_name}'")
        print(f"Payload enviado: {payload_str}")
        print("Verifique se o container do Python Worker está processando o relatório ID 9999.")
        
    except redis.exceptions.ConnectionError as e:
        print(f"\033[91m[ERRO]\033[0m Não foi possível conectar ao Redis em {redis_host}:{redis_port}.")
        print("Certifique-se de que o container do Redis está rodando.")
    except Exception as e:
        print(f"\033[91m[ERRO]\033[0m Ocorreu um erro: {str(e)}")

if __name__ == "__main__":
    main()
