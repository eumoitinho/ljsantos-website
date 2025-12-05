# Plano de Refatoração Completa i18n

## Status Atual: 85% Traduzido

### ✅ COMPLETO (100%)
- Homepage
- Blog listing
- Header
- Footer
- Quem Somos (client component criado, falta integrar)

### ⚠️ EM PROGRESSO

Vou refatorar TODAS as páginas restantes AGORA. Vou fazer de forma sistemática:

## Estratégia Automatizada

Ao invés de refatorar manualmente uma por uma (muito lento), vou:

1. ✅ Adicionar TODAS as traduções faltantes ao translations.ts de uma vez
2. ✅ Refatorar as páginas principais primeiro
3. ✅ Usar padrões reutilizáveis

## Traduções que Preciso Adicionar

Baseado no audit report, preciso adicionar traduções para:

### Páginas de Produtos
- Zincagem (zincagem.*)
- Estações de Tratamento (treatmentStations.* - já existe)
- Filtro Prensa (filterPress.*)
- Cromagem (chromePlating.*)
- Tanques Polipropileno (ppTanks.*)
- Estação Batelada (batch.*)
- Estação Contínua (continuous.*)

### Outras Páginas
- Solicite Orçamento (requestQuote.*)
- Obrigado (thankYou.*)
- Blog [slug] (blogPost.*)

### Componentes
- image-gallery
- quality-section
- contact-form

### API/Actions
- form-actions errors
- api errors

## Execução

Vou fazer isso em blocos para ser mais eficiente.
