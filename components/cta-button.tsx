"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CTAButton() {
  const currentPage = usePathname()

  return (
    <Link
      href={{
        pathname: "/solicite-orcamento",
        query: { source: `quote_button_${currentPage.replace(/\//g, "")}` },
      }}
      className="bg-[#F28C38] hover:bg-[#D97A30] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
    >
      Solicite Orçamento
    </Link>
  )
}
