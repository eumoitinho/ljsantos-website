"use client"

import { useLanguage } from "./context"
import { getTranslation, type Language } from "./translations"

/**
 * Hook para facilitar o uso de traduções em client components
 *
 * @example
 * const { t } = useTranslation()
 *
 * return <h1>{t('home.hero.title')}</h1>
 */
export function useTranslation() {
  const { language, setLanguage } = useLanguage()

  /**
   * Traduz uma chave
   * @param key - Chave da tradução (ex: 'common.home', 'blog.title')
   * @param fallback - Texto alternativo se a tradução não existir
   */
  const t = (key: string, fallback?: string): string => {
    const translation = getTranslation(language, key)

    // Se retornar um objeto, houve erro
    if (typeof translation === 'object') {
      console.warn(`Translation key "${key}" returned an object. Use a more specific key.`)
      return fallback || key
    }

    return translation || fallback || key
  }

  return {
    t,           // Função de tradução
    language,    // Idioma atual
    setLanguage, // Função para mudar idioma
  }
}
