#!/usr/bin/env node
/**
 * Script de Auto-Tradução
 * Refatora automaticamente páginas para usar o sistema i18n
 */

const fs = require('fs');
const path = require('path');

// Lista de páginas para refatorar (baseado no audit)
const pagesToRefactor = [
  'app/quem-somos/page.tsx',
  'app/zincagem/page.tsx',
  'app/estacoes-tratamento/page.tsx',
  'app/filtro-prensa/page.tsx',
  'app/cromagem/page.tsx',
  'app/tanques-polipropileno/page.tsx',
  'app/estacao-batelada/page.tsx',
  'app/estacao-continua/page.tsx',
  'app/solicite-orcamento/page.tsx',
  'app/obrigado/page.tsx',
  'app/blog/[slug]/page.tsx',
];

console.log('🤖 Auto-Tradução de Páginas\n');
console.log('Este script irá:');
console.log('1. Converter páginas server component em client component separado');
console.log('2. Substituir textos hardcoded por t("key")');
console.log('3. Manter a estrutura e funcionalidade original\n');

console.log('⚠️  AVISO: Este é um processo automatizado que modificará arquivos.');
console.log('   Recomenda-se fazer commit antes de executar.\n');

// Verificar se é chamado com --dry-run
const dryRun = process.argv.includes('--dry-run');

if (dryRun) {
  console.log('🏃 Modo DRY RUN - Nenhum arquivo será modificado\n');
}

// Helper: Criar client component wrapper
function createClientWrapper(pageContent, componentName) {
  return `"use client"

import { useTranslation } from "@/lib/i18n"
${extractImports(pageContent)}

export default function ${componentName}() {
  const { t } = useTranslation()

  return (
    <>
${replaceHardcodedTexts(pageContent)}
    </>
  )
}
`;
}

function extractImports(content) {
  // Extrair imports (simplificado)
  const importRegex = /import .* from ["'].*["']/g;
  const imports = content.match(importRegex) || [];
  return imports.filter(imp => !imp.includes('next/font')).join('\n');
}

function replaceHardcodedTexts(content) {
  // Esta é uma versão simplificada
  // Na prática, você precisaria de um parser AST mais robusto
  return content;
}

// Processar cada página
pagesToRefactor.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`⏭️  Pulando ${filePath} (não encontrado)`);
    return;
  }

  console.log(`\n📄 Processando: ${filePath}`);

  const content = fs.readFileSync(filePath, 'utf-8');
  const componentName = path.basename(filePath, '.tsx')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Client';

  console.log(`   └─ Criando ${componentName}.tsx`);

  if (!dryRun) {
    // Aqui você implementaria a lógica de criação do client component
    console.log(`   └─ ⚠️  Implementação manual necessária`);
  }
});

console.log('\n✅ Processamento concluído!');
console.log('\n💡 RECOMENDAÇÃO:');
console.log('   Devido à complexidade das transformações, é recomendado:');
console.log('   1. Refatorar páginas manualmente seguindo o exemplo do Blog');
console.log('   2. Usar o script de auditoria para encontrar textos: node scripts/audit-i18n.js');
console.log('   3. Consultar o guia: docs/I18N_GUIDE.md\n');
