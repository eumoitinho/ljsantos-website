"use client"

import { useEffect, useState } from "react"
import ScrollAnimation from "@/components/scroll-animation"
import ClientWrapper from "./client-wrapper"
import { useTranslation } from "@/lib/i18n"

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center">
      <ClientWrapper>
        <video className="hero-video absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/videos/home-hero.mp4" type="video/mp4" />
          <source src="/videos/home-hero.mov" type="video/quicktime" />
        </video>
      </ClientWrapper>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <ScrollAnimation animation="animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto">
              {t('home.hero.title')}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-300">
            <a
              href="/solicite-orcamento"
              className="inline-block bg-white text-[#435a52] font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
            >
              {t('home.hero.cta')}
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
