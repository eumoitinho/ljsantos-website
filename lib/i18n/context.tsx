"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Function to detect language from API
async function detectLanguageFromAPI(): Promise<Language> {
  try {
    const response = await fetch("/api/detect-language")
    const data = await response.json()
    return data.language as Language
  } catch (error) {
    console.error("Failed to detect language from API:", error)
    return "pt-BR" // Fallback to Portuguese
  }
}

// Function to detect language from browser
function detectLanguageFromBrowser(): Language {
  if (typeof navigator === "undefined") return "pt-BR"

  const browserLanguage = navigator.language || (navigator as any).userLanguage

  if (browserLanguage.startsWith("es")) {
    return "es-ES"
  } else if (browserLanguage.startsWith("en")) {
    return "en-US"
  } else if (browserLanguage.startsWith("pt")) {
    return "pt-BR"
  }

  return "pt-BR" // Default to Portuguese
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Inicializa com o idioma padrão (português)
  const [language, setLanguageState] = useState<Language>("pt-BR")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    async function initializeLanguage() {
      // Tenta recuperar o idioma do localStorage
      const savedLanguage = localStorage.getItem("language") as Language

      if (savedLanguage && ["pt-BR", "en-US", "es-ES"].includes(savedLanguage)) {
        // User has manually selected a language, respect their choice
        setLanguageState(savedLanguage)
      } else {
        // No saved language, detect automatically
        // First try API detection (more accurate with IP geolocation)
        const apiLanguage = await detectLanguageFromAPI()

        // Fallback to browser language if API fails
        const detectedLanguage = apiLanguage || detectLanguageFromBrowser()

        setLanguageState(detectedLanguage)
        // Save the detected language
        localStorage.setItem("language", detectedLanguage)
      }
    }

    initializeLanguage()
  }, [])

  // Função para alterar o idioma e salvar no localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    if (isClient) {
      localStorage.setItem("language", newLanguage)
    }
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

// Hook personalizado para acessar o contexto de idioma
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
