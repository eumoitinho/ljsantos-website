# Guia de Internacionalização (i18n)

Este guia explica como usar o sistema de traduções do site LJ Santos em **todos os textos**.

## 📚 Índice
- [Como Funciona](#como-funciona)
- [Uso em Client Components](#uso-em-client-components)
- [Uso em Server Components](#uso-em-server-components)
- [Adicionando Novas Traduções](#adicionando-novas-traduções)
- [Auditoria de Textos Hardcoded](#auditoria-de-textos-hardcoded)
- [Exemplos Práticos](#exemplos-práticos)

---

## Como Funciona

O sistema suporta **3 idiomas**:
- 🇧🇷 Português (`pt-BR`) - padrão
- 🇺🇸 Inglês (`en-US`)
- 🇪🇸 Espanhol (`es-ES`)

Todas as traduções ficam em: [`lib/i18n/translations.ts`](../lib/i18n/translations.ts)

---

## Uso em Client Components

Use o hook `useTranslation()` em qualquer componente com `"use client"`:

```tsx
"use client"

import { useTranslation } from "@/lib/i18n"

export default function MyComponent() {
  const { t, language, setLanguage } = useTranslation()

  return (
    <div>
      <h1>{t('home.hero.title')}</h1>
      <p>{t('home.hero.subtitle')}</p>

      {/* Com fallback */}
      <button>{t('common.submit', 'Enviar')}</button>

      {/* Idioma atual */}
      <p>Idioma: {language}</p>

      {/* Mudar idioma */}
      <button onClick={() => setLanguage('en-US')}>
        English
      </button>
    </div>
  )
}
```

### Funções do Hook

- `t(key, fallback?)` - Traduz uma chave
- `language` - Idioma atual (`pt-BR`, `en-US`, `es-ES`)
- `setLanguage(lang)` - Altera o idioma

---

## Uso em Server Components

Para Server Components, use o componente `<TranslatedContent>`:

```tsx
import TranslatedContent from "@/components/translated-content"

export default function ServerPage() {
  return (
    <div>
      <h1>
        <TranslatedContent translationKey="blog.title" />
      </h1>
      <p>
        <TranslatedContent translationKey="blog.subtitle" />
      </p>
    </div>
  )
}
```

**OU** crie um Client Component separado:

```tsx
// page.tsx (Server Component)
import { fetchData } from "@/lib/api"
import MyPageClient from "./MyPageClient"

export default async function Page() {
  const data = await fetchData()
  return <MyPageClient data={data} />
}

// MyPageClient.tsx (Client Component)
"use client"
import { useTranslation } from "@/lib/i18n"

export default function MyPageClient({ data }) {
  const { t } = useTranslation()
  return <h1>{t('page.title')}</h1>
}
```

---

## Adicionando Novas Traduções

### 1. Abra `lib/i18n/translations.ts`

### 2. Adicione a tradução nos **3 idiomas**:

```typescript
export const translations = {
  "pt-BR": {
    products: {
      newProduct: {
        title: "Novo Produto",
        description: "Descrição do novo produto"
      }
    }
  },
  "en-US": {
    products: {
      newProduct: {
        title: "New Product",
        description: "New product description"
      }
    }
  },
  "es-ES": {
    products: {
      newProduct: {
        title: "Nuevo Producto",
        description: "Descripción del nuevo producto"
      }
    }
  }
}
```

### 3. Use a chave no código:

```tsx
{t('products.newProduct.title')}
```

---

## Auditoria de Textos Hardcoded

Execute o script de auditoria para encontrar textos que precisam ser traduzidos:

```bash
node scripts/audit-i18n.js
```

O script irá:
- ✅ Escanear arquivos `.tsx` e `.ts` em `app/` e `components/`
- ✅ Encontrar textos em português hardcoded
- ✅ Gerar relatório com localização exata
- ✅ Salvar relatório em `scripts/i18n-audit-report.json`

---

## Exemplos Práticos

### Exemplo 1: Textos Simples

**❌ Antes (hardcoded):**
```tsx
<h1>Quem Somos</h1>
<p>Conheça nossa história</p>
```

**✅ Depois (traduzido):**
```tsx
"use client"
import { useTranslation } from "@/lib/i18n"

export default function AboutUs() {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('aboutUs.title')}</h1>
      <p>{t('aboutUs.subtitle')}</p>
    </>
  )
}
```

### Exemplo 2: Placeholders e Atributos

**❌ Antes:**
```tsx
<input
  placeholder="Digite seu e-mail"
  aria-label="Campo de e-mail"
/>
```

**✅ Depois:**
```tsx
const { t } = useTranslation()

<input
  placeholder={t('form.email.placeholder')}
  aria-label={t('form.email.ariaLabel')}
/>
```

### Exemplo 3: Alt de Imagens

**❌ Antes:**
```tsx
<Image
  src="/facility.jpg"
  alt="Instalações da LJ Santos"
/>
```

**✅ Depois:**
```tsx
const { t } = useTranslation()

<Image
  src="/facility.jpg"
  alt={t('images.alt.facilities')}
/>
```

### Exemplo 4: Mensagens de Erro

**❌ Antes:**
```tsx
if (!name || !email) {
  throw new Error("Nome e email são obrigatórios")
}
```

**✅ Depois:**
```tsx
const { t } = useTranslation()

if (!name || !email) {
  throw new Error(t('errors.requiredFields'))
}
```

### Exemplo 5: Metadata (SEO)

**❌ Antes:**
```tsx
export const metadata = {
  description: "Soluções para tratamento de efluentes"
}
```

**✅ Depois:**
```tsx
import { getTranslation } from "@/lib/i18n"

export function generateMetadata() {
  const lang = 'pt-BR' // ou detectar dinamicamente
  return {
    description: getTranslation(lang, 'metadata.treatmentStations.description')
  }
}
```

---

## Checklist para Novos Componentes

Ao criar um novo componente, sempre:

- [ ] Verificar se há textos hardcoded
- [ ] Adicionar traduções em `translations.ts` (pt-BR, en-US, es-ES)
- [ ] Usar `useTranslation()` ou `<TranslatedContent>`
- [ ] Traduzir placeholders, aria-labels, alt text
- [ ] Testar em todos os 3 idiomas
- [ ] Executar `node scripts/audit-i18n.js` para validar

---

## Estrutura de Chaves Recomendada

```
common.*              # Textos comuns (botões, links, etc)
home.*                # Homepage
blog.*                # Blog
products.*            # Produtos
aboutUs.*             # Quem Somos
contact.*             # Contato/Formulários
metadata.*            # SEO descriptions
images.alt.*          # Alt text de imagens
errors.*              # Mensagens de erro
```

---

## Dúvidas Comuns

**Q: Preciso traduzir nomes de marcas?**
A: Não. Copacol, Benteler, etc são nomes próprios.

**Q: E números e datas?**
A: Use `toLocaleDateString(language)` para datas. Números podem precisar formatação específica.

**Q: Posso usar HTML nas traduções?**
A: Evite. Use componentes React se precisar de formatação.

**Q: Como traduzir conteúdo do Sanity CMS?**
A: Use o campo `language` nos posts do Sanity e filtre por idioma.

---

## Suporte

Para problemas ou dúvidas sobre i18n:
1. Verifique este guia
2. Execute o script de auditoria
3. Consulte o CLAUDE.md do projeto
