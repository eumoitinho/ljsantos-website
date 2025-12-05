"use client"

import { useState, useEffect } from "react"
import ScrollAnimation from "@/components/scroll-animation"
import ClientWrapper from "./client-wrapper"
import { useTranslation } from "@/lib/i18n"

const getStats = (t: (key: string) => string) => [
  { value: 25, suffix: "+", label: t('home.stats.yearsExperience') },
  { value: 60, suffix: "+", label: t('home.stats.installedStations') },
  { value: 1000, suffix: "+", label: t('home.stats.installedTanks') },
]

const StatsSection = () => {
  const { t } = useTranslation()
  const stats = getStats(t)
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats-section")
      if (element && !hasAnimated) {
        const position = element.getBoundingClientRect()

        // If the element is in the viewport and hasn't animated yet
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setHasAnimated(true)

          stats.forEach((stat, index) => {
            const duration = 2000 // 2 seconds
            const steps = 50
            const stepValue = stat.value / steps
            let currentStep = 0

            const interval = setInterval(() => {
              if (currentStep < steps) {
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = Math.round(stepValue * currentStep)
                  return newCounters
                })
                currentStep++
              } else {
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = stat.value
                  return newCounters
                })
                clearInterval(interval)
              }
            }, duration / steps)
          })
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [hasAnimated])

  return (
    <section id="stats-section" className="relative py-24">
      <ClientWrapper>
        <video className="stats-video absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source
            src="https://ljsantos2.websiteseguro.com/wp-content/uploads/2024/02/Mapa-Interativo-LJ-Santos.mp4"
            type="video/mp4"
          />
        </video>
      </ClientWrapper>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <ScrollAnimation animation="animate-fadeInUp">
            <span className="text-white text-sm uppercase tracking-wider">{t('home.stats.subtitle')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t('home.stats.title')}</h2>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} animation="animate-zoomIn" delay={`animate-delay-${index * 100}`}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {counters[index]}
                  {stat.suffix}
                </div>
                <div className="text-white text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
