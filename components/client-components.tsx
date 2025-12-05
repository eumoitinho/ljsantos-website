"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import client components
const HeroSection = dynamic(() => import("@/components/hero-section"), { ssr: false })
const StatsSection = dynamic(() => import("@/components/stats-section"), { ssr: false })
const WhyChooseUs = dynamic(() => import("@/components/why-choose-us"), { ssr: false })

export function ClientHeroSection() {
  return (
    <Suspense fallback={<div className="h-[90vh] bg-gray-200 animate-pulse"></div>}>
      <HeroSection />
    </Suspense>
  )
}

export function ClientStatsSection() {
  return (
    <Suspense fallback={<div className="py-24 bg-gray-200 animate-pulse"></div>}>
      <StatsSection />
    </Suspense>
  )
}

export function ClientWhyChooseUs() {
  return (
    <Suspense fallback={<div className="py-20 bg-gray-200 animate-pulse"></div>}>
      <WhyChooseUs />
    </Suspense>
  )
}
