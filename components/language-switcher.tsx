"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/lib/i18n"
import { getLanguageNative, type Language } from "@/lib/i18n/translations"
import { ChevronDown } from "lucide-react"

interface LanguageSwitcherProps {
  textColor?: string
}

const LanguageSwitcher = ({ textColor = "text-gray-800" }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Lista de idiomas disponíveis
  const languages: Language[] = ["pt-BR", "en-US", "es-ES"]

  // Função para alternar o menu dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Função para selecionar um idioma
  const selectLanguage = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  // Fecha o dropdown quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Função para obter a abreviação do idioma para exibição
  const getLanguageAbbreviation = (lang: Language): string => {
    switch (lang) {
      case "pt-BR":
        return "PT"
      case "en-US":
        return "EN"
      case "es-ES":
        return "ES"
      default:
        return "PT"
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center gap-1 font-medium transition-colors hover:text-[#448b13] ${textColor}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {getLanguageAbbreviation(language)}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => selectLanguage(lang)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  language === lang ? "bg-[#f2f7f5] text-[#448b13] font-medium" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {getLanguageNative(lang)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
