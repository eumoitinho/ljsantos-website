"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n/translations"
import LanguageSwitcher from "./language-switcher"

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()

  // Traduções
  const t = (key: string) => getTranslation(language, key)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative z-10">
            <Image
              src="/logo.png"
              alt="LJ Santos Logo"
              width={150}
              height={50}
              className={`transition-all duration-300 ${scrolled ? "h-10 w-auto" : "h-12 w-auto"}`}
            />
          </Link>

          {/* Menu para desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors hover:text-[#448b13] ${
                scrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              {t("common.home")}
            </Link>
            <div className="relative group">
              <button
                className={`font-medium transition-colors hover:text-[#448b13] flex items-center ${
                  scrolled ? "text-gray-800" : "text-gray-800"
                }`}
              >
                {t("common.products")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="bg-white rounded-lg shadow-lg py-2">
                  <Link
                    href="/estacoes-tratamento"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#448b13]"
                  >
                    {t("header.treatmentStations")}
                  </Link>
                  <Link
                    href="/filtro-prensa"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#448b13]"
                  >
                    {t("header.filterPress")}
                  </Link>
                  <Link
                    href="/tanques-polipropileno"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#448b13]"
                  >
                    {t("header.ppTanks")}
                  </Link>
                  <Link
                    href="/cromagem"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#448b13]"
                  >
                    {t("header.chromePlating")}
                  </Link>
                  <Link
                    href="/zincagem"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#448b13]"
                  >
                    {t("header.electrolyticGalvanizing")}
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/quem-somos"
              className={`font-medium transition-colors hover:text-[#448b13] ${
                scrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              {t("common.aboutUs")}
            </Link>
            <Link
              href="/blog"
              className={`font-medium transition-colors hover:text-[#448b13] ${
                scrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              {t("common.blog")}
            </Link>
            <Link
              href="/solicite-orcamento"
              className={`font-medium transition-colors hover:text-[#448b13] ${
                scrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              {t("common.requestQuote")}
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher textColor={scrolled ? "text-gray-800" : "text-gray-800"} />
          </nav>

          {/* Botão do menu mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 focus:outline-none z-10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={scrolled ? "#1f2937" : "#ffffff"}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={scrolled ? "#1f2937" : "#ffffff"}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col space-y-6 mt-16">
            <Link href="/" className="font-medium text-gray-800 hover:text-[#448b13]" onClick={toggleMenu}>
              {t("common.home")}
            </Link>
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">{t("common.products")}</h3>
              <div className="pl-4 space-y-3">
                <Link
                  href="/estacoes-tratamento"
                  className="block text-gray-600 hover:text-[#448b13]"
                  onClick={toggleMenu}
                >
                  {t("header.treatmentStations")}
                </Link>
                <Link href="/filtro-prensa" className="block text-gray-600 hover:text-[#448b13]" onClick={toggleMenu}>
                  {t("header.filterPress")}
                </Link>
                <Link
                  href="/tanques-polipropileno"
                  className="block text-gray-600 hover:text-[#448b13]"
                  onClick={toggleMenu}
                >
                  {t("header.ppTanks")}
                </Link>
                <Link
                  href="/linha-de-cromagem"
                  className="block text-gray-600 hover:text-[#448b13]"
                  onClick={toggleMenu}
                >
                  {t("header.chromePlating")}
                </Link>
                <Link href="/zincagem" className="block text-gray-600 hover:text-[#448b13]" onClick={toggleMenu}>
                  {t("header.galvanizing")}
                </Link>
                <Link
                  href="/zincagem-eletrolitica"
                  className="block text-gray-600 hover:text-[#448b13]"
                  onClick={toggleMenu}
                >
                  {t("header.electrolyticGalvanizing")}
                </Link>
              </div>
            </div>
            <Link href="/quem-somos" className="font-medium text-gray-800 hover:text-[#448b13]" onClick={toggleMenu}>
              {t("common.aboutUs")}
            </Link>
            <Link href="/blog" className="font-medium text-gray-800 hover:text-[#448b13]" onClick={toggleMenu}>
              {t("common.blog")}
            </Link>
            <Link
              href="/solicite-orcamento"
              className="font-medium text-gray-800 hover:text-[#448b13]"
              onClick={toggleMenu}
            >
              {t("common.requestQuote")}
            </Link>

            {/* Language Switcher for Mobile */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-medium text-gray-800 mb-3">Language / Idioma</h3>
              <LanguageSwitcher textColor="text-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
