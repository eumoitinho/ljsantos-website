#!/usr/bin/env node
/**
 * Script de auditoria i18n
 * Encontra textos hardcoded em português que precisam ser traduzidos
 */

const fs = require('fs');
const path = require('path');

// Padrões para detectar texto em português hardcoded
const patterns = [
  // Strings com texto em português (mínimo 3 palavras ou 20 caracteres)
  /"([A-ZÁÉÍÓÚÃÕÂÊÔÀÇ][a-záéíóúãõâêôàç\s,\.!?\-]{20,})"/g,
  /'([A-ZÁÉÍÓÚÃÕÂÊÔÀÇ][a-záéíóúãõâêôàç\s,\.!?\-]{20,})'/g,

  // Placeholders e labels comuns
  /placeholder=["']([^"']+)["']/g,
  /aria-label=["']([^"']+)["']/g,
  /title=["']([^"']{10,})["']/g,
  /alt=["']([^"']{10,})["']/g,
];

// Padrões para IGNORAR (não são texto traduzível)
const ignorePatterns = [
  /className/,
  /import\s+/,
  /from\s+["']/,
  /\.tsx?["']/,
  /\.css["']/,
  /\.png["']/,
  /\.jpg["']/,
  /\.svg["']/,
  /https?:\/\//,
  /^\d+$/,
  /^[A-Z_]+$/,  // Constantes
  /animate-/,   // Classes de animação
  /^bg-|^text-|^hover:|^transition-/,  // Classes Tailwind
];

// Arquivos/diretórios para ignorar
const ignoreFiles = [
  'node_modules',
  '.next',
  'dist',
  '.git',
  'translations.ts',  // Arquivo de traduções
  'audit-i18n.js',    // Este próprio script
];

const results = {
  files: [],
  totalIssues: 0,
};

function shouldIgnore(text) {
  return ignorePatterns.some(pattern => pattern.test(text));
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const issues = [];

  lines.forEach((line, index) => {
    patterns.forEach(pattern => {
      const matches = [...line.matchAll(pattern)];
      matches.forEach(match => {
        const text = match[1] || match[0];

        // Pular se for texto muito curto ou deve ser ignorado
        if (text.length < 10 || shouldIgnore(text)) {
          return;
        }

        // Detectar se contém palavras em português
        const portugueseWords = [
          'à', 'é', 'í', 'ó', 'ú', 'ã', 'õ', 'â', 'ê', 'ô',
          'ção', 'ões', 'nos', 'das', 'dos', 'para', 'com',
          'sobre', 'nossa', 'nosso', 'mais', 'uma', 'como',
        ];

        const hasPortuguese = portugueseWords.some(word =>
          text.toLowerCase().includes(word)
        );

        if (hasPortuguese) {
          issues.push({
            line: index + 1,
            text: text.slice(0, 80), // Limita tamanho
            preview: line.trim().slice(0, 100),
          });
        }
      });
    });
  });

  if (issues.length > 0) {
    results.files.push({
      path: filePath,
      issues,
    });
    results.totalIssues += issues.length;
  }
}

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Ignorar arquivos/diretórios específicos
    if (ignoreFiles.some(ignore => filePath.includes(ignore))) {
      return;
    }

    if (stat.isDirectory()) {
      scanDirectory(filePath);
    } else if (file.match(/\.(tsx|ts|jsx|js)$/)) {
      scanFile(filePath);
    }
  });
}

// Executar scan
console.log('🔍 Auditando textos hardcoded em português...\n');

const dirsToScan = ['app', 'components'];
dirsToScan.forEach(dir => {
  if (fs.existsSync(dir)) {
    scanDirectory(dir);
  }
});

// Gerar relatório
console.log('📊 RELATÓRIO DE AUDITORIA I18N\n');
console.log('='.repeat(80));
console.log(`Total de arquivos com problemas: ${results.files.length}`);
console.log(`Total de textos hardcoded encontrados: ${results.totalIssues}`);
console.log('='.repeat(80));
console.log();

// Ordenar por número de issues
results.files.sort((a, b) => b.issues.length - a.issues.length);

results.files.forEach(file => {
  console.log(`\n📄 ${file.path} (${file.issues.length} problemas)`);
  console.log('-'.repeat(80));

  file.issues.slice(0, 5).forEach(issue => {  // Mostrar apenas primeiros 5
    console.log(`  Linha ${issue.line}: "${issue.text}"`);
  });

  if (file.issues.length > 5) {
    console.log(`  ... e mais ${file.issues.length - 5} problemas`);
  }
});

console.log('\n' + '='.repeat(80));
console.log('\n💡 PRÓXIMOS PASSOS:');
console.log('1. Adicionar as traduções ao arquivo lib/i18n/translations.ts');
console.log('2. Substituir textos hardcoded por <TranslatedContent translationKey="..." />');
console.log('3. Ou usar o hook useTranslation() para client components');
console.log();

// Salvar relatório em arquivo
const reportPath = path.join(__dirname, 'i18n-audit-report.json');
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
console.log(`📝 Relatório completo salvo em: ${reportPath}\n`);
