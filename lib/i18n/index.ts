// Re-export specific items from translations and context
import { type Language, translations, getTranslation, getLanguageName, getLanguageNative } from "./translations"
import { LanguageProvider, useLanguage } from "./context"
import { useTranslation } from "./useTranslation"

export type {
  // Types
  Language,
}
export {
  // Translation data and functions
  translations,
  getTranslation,
  getLanguageName,
  getLanguageNative,
  // Context and hooks
  LanguageProvider,
  useLanguage,
  useTranslation,
}
