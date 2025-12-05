"use client"

import { useEffect, useState, type ReactNode } from "react"

interface ClientWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function ClientWrapper({ children, fallback }: ClientWrapperProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return fallback || null
  }

  return <>{children}</>
}
