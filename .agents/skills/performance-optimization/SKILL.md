---
name: performance-optimization
description: Otimização de performance no frontend para garantir execuções ultra-fluídas a 60 FPS, especialmente em dispositivos e computadores sem placa de vídeo dedicada (GPU integrada).
---

# Frontend Performance Optimization Skill

## Regras de Performance para Hardware Leve

1. **Elimine Loops Infinitos de JS**:
   - NUNCA use bibliotecas de animação (`framer-motion`, `gsap`) executando loops infinitos com `repeat: Infinity` em múltiplos elementos simultâneos.
   - Evite ouvir eventos como `onPointerMove` para recalcular posicionamentos em tempo real no JS.

2. **Aceleração por Hardware via CSS**:
   - Utilize transições nativas CSS (`transition-transform`, `transition-opacity`).
   - Aplique `transform: translateZ(0)` e `will-change: transform` em camadas fixas ou com blur/glassmorphism para forçar a GPU/compositor do navegador a renderizar de maneira eficiente.

3. **Otimização de Imagens e Fontes**:
   - Utilize o componente `<Image />` do Next.js ou imagens responsivas otimizadas.
   - Carregue fontes com `font-display: swap`.

4. **Suporte a Movimento Reduzido**:
   - Inclua suporte à media query `@media (prefers-reduced-motion: reduce)` em estilos globais.
