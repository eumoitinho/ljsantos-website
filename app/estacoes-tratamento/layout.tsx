import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wastewater Treatment Stations | LJ Santos",
  description:
    "Complete and efficient solutions for industrial wastewater treatment, ensuring environmental compliance and resource savings.",
  keywords:
    "wastewater treatment station, effluent treatment, industrial wastewater treatment, batch system, continuous system",
}

export default function EstacoesTratamentoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
