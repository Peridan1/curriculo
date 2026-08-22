# =========================================
# STAGE 1: Imagem Base
# =========================================
FROM node:22-alpine AS base

# =========================================
# STAGE 2: Instalação de Dependências
# =========================================
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copia os arquivos de contrato de dependências
COPY package.json package-lock.json ./
RUN npm ci

# =========================================
# STAGE 3: Build da Aplicação
# =========================================
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilita telemetria do Next.js durante o build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# =========================================
# STAGE 4: Imagem de Produção Ultra Leve (Runner)
# =========================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Cria usuário não-root por segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia os arquivos públicos garantindo a existência do diretório
RUN mkdir -p ./public
COPY --from=builder --chown=nextjs:nodejs /app/public ./public


# Define as permissões corretas para o diretório .next
RUN mkdir .next && chown nextjs:nodejs .next

# Copia os arquivos da saída standalone gerada pelo Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
