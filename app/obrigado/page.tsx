import Link from "next/link"
import type { Metadata } from "next"
import TranslatedContent from "@/components/translated-content"

export const metadata: Metadata = {
  title: "Thank you for contacting us | LJ Santos",
  description: "Thank you for your contact. Our team will get in touch soon.",
}

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-zoomIn">
          <div className="bg-green-50 p-8 rounded-2xl shadow-sm">
            <svg
              className="w-20 h-20 text-green-600 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>

            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              <TranslatedContent translationKey="thankYou.title" />
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              <TranslatedContent translationKey="thankYou.message" />
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="product-button">
                <TranslatedContent translationKey="thankYou.backToHome" />
              </Link>

              <Link href="/estacoes-tratamento" className="cta-button">
                <TranslatedContent translationKey="thankYou.exploreProducts" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
