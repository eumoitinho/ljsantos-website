"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n/translations"

export default function Footer() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  // Don't render footer on Sanity Studio
  if (pathname?.startsWith("/studio")) {
    return null
  }

  return (
    <footer className="bg-[#1C4837] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/">
              <Image src="/logo-white.png" alt="LJ Santos Logo" width={150} height={50} className="mb-4" />
            </Link>
            <p className="text-gray-300 mb-6">{t("footer.companyDescription")}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/L-J-Santos-Solu%C3%A7%C3%B5es-Industriais-Ltda-100045069466708/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ljsantos.ind/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/l-j-santos-solu%C3%A7%C3%B5es-industriais?originalSubdomain=br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">{t("common.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t("common.home")}
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="text-gray-300 hover:text-white transition-colors">
                  {t("common.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/estacoes-tratamento" className="text-gray-300 hover:text-white transition-colors">
                  {t("header.treatmentStations")}
                </Link>
              </li>
              <li>
                <Link href="/filtro-prensa" className="text-gray-300 hover:text-white transition-colors">
                  {t("header.filterPress")}
                </Link>
              </li>
              <li>
                <Link href="/tanques-polipropileno" className="text-gray-300 hover:text-white transition-colors">
                  {t("header.ppTanks")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  {t("common.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t("common.contact")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-1 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-gray-300">{t("common.address")}</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8cc63f] hover:text-[#a3d45c] transition-colors text-sm mt-1 inline-block"
                  >
                    {t("common.viewOnMap")}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-1 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="text-gray-300">(47) 3427-5414</p>
                  <p className="text-gray-300">(47) 9983-0386</p>
                  <a
                    href="tel:+554734275414"
                    className="text-[#8cc63f] hover:text-[#a3d45c] transition-colors text-sm mt-1 inline-block"
                  >
                    {t("common.callNow")}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-1 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-gray-300">comercial@ljsantos.ind.br</p>
                  <a
                    href="mailto:comercial@ljsantos.ind.br"
                    className="text-[#8cc63f] hover:text-[#a3d45c] transition-colors text-sm mt-1 inline-block"
                  >
                    {t("common.sendEmail")}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">{t("blog.newsletter.title")}</h3>
            <p className="text-gray-300 mb-4">{t("blog.newsletter.description")}</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={t("blog.newsletter.placeholder")}
                className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8cc63f] bg-[#2c3e36] text-white"
              />
              <button
                type="submit"
                className="bg-[#8cc63f] hover:bg-[#a3d45c] text-white px-4 py-2 rounded-lg transition-colors"
              >
                {t("blog.newsletter.button")}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#5a7a6e] mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} LJ Santos. {t("common.allRightsReserved")}.
          </p>
        </div>
      </div>
    </footer>
  )
}
