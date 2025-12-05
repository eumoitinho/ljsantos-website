"use client"

import type { ReactNode } from "react"
import { useLanguage } from "@/lib/i18n"

// This component will wrap page content to provide language context to server components
export default function PageWrapper({ children }: { children: ReactNode }) {
  // This component doesn't do much by itself, but it ensures that
  // the language context is available to all client components within it
  const { language } = useLanguage()

  return <>{children}</>
}
