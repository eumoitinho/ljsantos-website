"use client"

import { Suspense, lazy } from "react"

// Dynamically import client components
const HeroSection = lazy(() => import("@/components/hero-section"))
const StatsSection = lazy(() => import("@/components/stats-section"))
const WhyChooseUs = lazy(() => import("@/components/why-choose-us"))

// Loading fallbacks
const LoadingFallback = () => <div className="min-h-[300px] flex items-center justify-center">Carregando...</div>

export default function ClientComponentWrapper() {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <WhyChooseUs />
      </Suspense>
    </>
  )
}
