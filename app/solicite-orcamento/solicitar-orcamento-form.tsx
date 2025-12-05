"use client"

import { useSearchParams } from "next/navigation"
import ContactForm from "../../components/contact-form"
import { useTranslation } from "@/lib/i18n"

export default function SolicitarOrcamentoForm() {
  const searchParams = useSearchParams()
  const source = searchParams.get("source") || "solicite-orcamento_page"
  const { t } = useTranslation()

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#435a52] mb-6">{t('contact.form.title')}</h2>
      <ContactForm sourcePage="/solicite-orcamento/" sourceType="/solicite-orcamento/"/>
    </div>
  )
}
