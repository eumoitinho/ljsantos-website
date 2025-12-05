"use client"

import { useLanguage } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n/translations"

interface TranslatedContentProps {
  translationKey: string
  className?: string
}

// A component that renders translated content
export default function TranslatedContent({ translationKey, className }: TranslatedContentProps) {
  const { language } = useLanguage()
  const translatedText = getTranslation(language, translationKey)

  // Check if the translation is an object instead of a string
  if (typeof translatedText === "object" && translatedText !== null) {
    console.error(
      `Translation key "${translationKey}" returned an object instead of a string. Please use a more specific key.`,
    )
    return <span className={className}>{translationKey}</span>
  }

  return <span className={className}>{translatedText}</span>
}
