# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the LJ Santos company website - a Next.js 14 (App Router) application with Sanity CMS integration. The site is a multilingual (PT/EN/ES) industrial solutions website featuring product pages, a blog, and lead generation forms integrated with RD Station.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (default port 3000)
- `npm run build` - Build for production (standalone output)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Sanity Studio
- Studio is embedded at `/studio` route via catch-all route in [app/studio/[[...index]]/page.tsx](app/studio/[[...index]]/page.tsx)
- Access locally at `http://localhost:3000/studio`
- Configuration in [sanity.config.ts](sanity.config.ts)

## Architecture

### Next.js Configuration
- **Output mode**: `standalone` (optimized for deployment)
- **Static generation**: Disabled (`appDocumentPreloading: false`) to avoid window reference errors with client components
- **Images**: Unoptimized with allowed domains `ljsantos.com` and `ljsantos2.websiteseguro.com`
- **Build checks**: TypeScript and ESLint errors ignored during builds (set in [next.config.mjs](next.config.mjs))

### Sanity CMS Integration

**Centralized Configuration**: All Sanity project details live in [sanity/projectDetails.ts](sanity/projectDetails.ts)
- Project ID: `o7mc56uo`
- Dataset: `production`
- API Version: `2024-09-01`

**Client Setup**: Sanity client is configured in [lib/sanity.ts](lib/sanity.ts) with:
- Read-only client (`useCdn: true`, `perspective: 'published'`)
- Helper functions: `fetchPosts()`, `fetchPostBySlug()`, `fetchCategories()`
- Image URL builder: `urlFor()` function

**Content Types**:
- `post` schema: Blog posts with title, slug, excerpt, mainImage, author, categories, publishedAt, body, language
- `category` schema: Blog categories
- Schemas defined in [sanity/schemas/](sanity/schemas/)

### Internationalization (i18n)

Custom client-side i18n system (not using Next.js i18n routing):
- **Languages**: Portuguese (pt-BR - default), English (en-US), Spanish (es-ES)
- **Context Provider**: [lib/i18n/context.tsx](lib/i18n/context.tsx) - wraps app in root layout
- **Translations**: [lib/i18n/translations.ts](lib/i18n/translations.ts) (~2100 lines of static translations)
- **Storage**: Language preference saved in localStorage with browser language detection fallback
- **Usage**: `useLanguage()` hook provides `language` and `setLanguage()`

### Project Structure

```
app/
├── (product-pages)/        # Product landing pages (zincagem, cromagem, filtro-prensa, etc.)
├── blog/                   # Blog listing and [slug] dynamic routes
├── studio/[[...index]]/    # Embedded Sanity Studio
├── quem-somos/            # About page
├── solicite-orcamento/    # Quote request form
├── obrigado/              # Thank you page (post-form submission)
├── layout.tsx             # Root layout with LanguageProvider, Analytics, GTM
└── page.tsx               # Homepage

components/
├── ui/                    # shadcn/ui components
├── (feature-components)   # Header, Footer, ContactForm, etc.

lib/
├── i18n/                  # i18n context, translations
├── sanity.ts              # Sanity client & helper functions
├── rd-station.ts          # RD Station CRM integration
└── utils.ts               # Utility functions

sanity/
├── schemas/               # post.ts, category.ts
├── schemaTypes/           # Schema exports
├── projectDetails.ts      # Centralized Sanity config
└── structure.ts           # Studio structure customization
```

### Key Technologies
- **UI Framework**: React 18 with Next.js 14 App Router
- **Styling**: TailwindCSS with custom config, CSS variables in globals.css
- **UI Components**: Radix UI primitives via shadcn/ui pattern
- **Fonts**: Outfit, Poppins, Open Sans (loaded via next/font/google)
- **CMS**: Sanity with embedded Studio
- **Analytics**: Vercel Analytics, Google Tag Manager
- **Forms**: react-hook-form with RD Station integration

### Important Patterns

**Client Components**: Many components use `"use client"` directive due to:
- i18n context consumption (useLanguage hook)
- Browser APIs (localStorage, window)
- Interactive features (animations, carousels)

**Sanity Image Handling**: Always use `urlFor()` helper from [lib/sanity.ts](lib/sanity.ts) for image URLs

**Path Aliases**: `@/*` maps to project root (see [tsconfig.json](tsconfig.json))

**Environment Variables**:
- `RD_STATION_API_KEY` - Required for form submissions
- Sanity env vars NOT used (hardcoded in projectDetails.ts)
- `.env.local` gitignored

### Form Integration (RD Station)

Forms send data to RD Station CRM via [lib/rd-station.ts](lib/rd-station.ts):
- Captures UTM parameters, referrer, device type, traffic source
- Supports gclid/fbclid for ad tracking
- Type: `ContactFormData` includes name, email, phone, state, city, company, message, product, and tracking fields

### Blog System

- Posts fetched via GROQ queries in [lib/sanity.ts](lib/sanity.ts)
- Listing page: [app/blog/page.tsx](app/blog/page.tsx)
- Individual posts: [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx)
- Portable Text rendering: `@portabletext/react` component in [components/portable-text.tsx](components/portable-text.tsx)
- Posts support multi-language via `language` field

## Common Gotchas

1. **Window/localStorage errors**: Always wrap client-side APIs in `useEffect` or `"use client"` components
2. **Sanity config**: Modify [sanity/projectDetails.ts](sanity/projectDetails.ts), NOT individual files - it's the single source of truth
3. **i18n**: Translations are NOT file-based - edit [lib/i18n/translations.ts](lib/i18n/translations.ts) directly
4. **Build errors disabled**: TypeScript/ESLint errors won't fail builds - check manually with `npm run lint`
