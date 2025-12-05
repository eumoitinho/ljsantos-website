import { Suspense } from "react"
import Header from "../../components/header"
import SolicitarOrcamentoForm from "./solicitar-orcamento-form"
import TranslatedContent from "@/components/translated-content"

export default function SolicitarOrcamento() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#435a52] to-[#5a7a6e]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <TranslatedContent translationKey="contact.title" />
            </h1>
            <p className="text-lg text-white/90 mb-8">
              <TranslatedContent translationKey="contact.subtitle" />
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Suspense fallback={<div className="text-center p-8"><TranslatedContent translationKey="common.loading" /></div>}>
            <SolicitarOrcamentoForm />
          </Suspense>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-[#f2f7f5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#435a52] mb-6 text-center">
              <TranslatedContent translationKey="contact.otherContactMethods.title" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-[#435a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
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
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <TranslatedContent translationKey="contact.otherContactMethods.phone" />
                </h3>
                <p className="text-gray-600 mb-2">(47) 3427-5414</p>
                <p className="text-gray-600 mb-2">(47) 9983-0386</p>
                <a href="tel:+554734275414" className="text-[#435a52] hover:underline">
                  <TranslatedContent translationKey="contact.otherContactMethods.callNow" />
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-[#435a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
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
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <TranslatedContent translationKey="contact.otherContactMethods.email" />
                </h3>
                <p className="text-gray-600 mb-2">ljsantos@ljsantos.ind.br</p>
                <a href="mailto:ljsantos@ljsantos.ind.br" className="text-[#435a52] hover:underline">
                  <TranslatedContent translationKey="contact.otherContactMethods.sendEmail" />
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-[#435a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
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
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <TranslatedContent translationKey="contact.otherContactMethods.address" />
                </h3>
                <p className="text-gray-600 mb-2">
                  <TranslatedContent translationKey="common.address" />
                </p>
                <a
                  href="https://www.google.com/maps/place/R.+Ver.+Guilherme+Zuege,+1220+-+Centro+(Pirabeiraba),+Joinville+-+SC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#435a52] hover:underline"
                >
                  <TranslatedContent translationKey="contact.otherContactMethods.viewOnMap" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
