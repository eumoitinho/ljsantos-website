"use client"

import { useState, useEffect } from "react"
import { Award, Clock, Wrench } from "lucide-react"
import Image from "next/image"
import ClientWrapper from "./client-wrapper"
import { useTranslation } from "@/lib/i18n"

export default function WhyChooseUs() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("why-choose-us")
      if (section) {
        const rect = section.getBoundingClientRect()
        const isInViewport = rect.top <= window.innerHeight * 0.75
        if (isInViewport) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <ClientWrapper>
      <section id="why-choose-us" className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industrial-facility.png"
            alt="Industrial background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-4 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
            >
              {t('home.whyChooseUs.title') || 'Why choose LJ Santos?'}
            </h2>
            <div
              className={`w-24 h-1 bg-[#005027] mx-auto ${
                isVisible ? "animate-fadeInUp animate-delay-100" : "opacity-0"
              }`}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className={`bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105 ${
                isVisible ? "animate-fadeInUp animate-delay-200" : "opacity-0"
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#005027] mb-6 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">{t('home.whyChooseUs.provenExperience.title') || 'Proven Experience'}</h3>
              <p className="text-gray-200 text-center">
                {t('home.whyChooseUs.provenExperience.description') || 'Over 25 years in the market with high quality solutions for effluent treatment and industrial equipment.'}
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={`bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105 ${
                isVisible ? "animate-fadeInUp animate-delay-300" : "opacity-0"
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#005027] mb-6 mx-auto">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">{t('home.whyChooseUs.customProjects.title') || 'Custom Projects'}</h3>
              <p className="text-gray-200 text-center">
                {t('home.whyChooseUs.customProjects.description') || 'Tailor-made solutions for your company\'s specific needs, ensuring efficiency and economy.'}
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={`bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 transform transition-all duration-500 hover:bg-opacity-20 hover:scale-105 ${
                isVisible ? "animate-fadeInUp animate-delay-400" : "opacity-0"
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#005027] mb-6 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">{t('home.whyChooseUs.technicalSupport.title') || 'Technical Support'}</h3>
              <p className="text-gray-200 text-center">
                {t('home.whyChooseUs.technicalSupport.description') || 'Specialized technical assistance and preventive maintenance to ensure optimal equipment operation.'}
              </p>
            </div>
          </div>

          {/* Contact Bar */}
          <div
            className={`mt-16 bg-[#005027] p-6 rounded-xl flex flex-col md:flex-row items-center justify-between ${
              isVisible ? "animate-fadeInUp animate-delay-500" : "opacity-0"
            }`}
          >
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-white">{t('home.whyChooseUs.contactBar.title') || 'Get in touch'}</h4>
              <p className="text-white text-opacity-90">{t('home.whyChooseUs.contactBar.subtitle') || 'We are ready to serve your company'}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-white text-center md:text-right">
                <p className="font-bold">(47) 3427-5414</p>
                <p className="font-bold">(47) 9983-0386</p>
                <p>ljsantos@ljsantos.ind.br</p>
              </div>
              <a
                href="/solicite-orcamento"
                className="bg-white text-[#005027] px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
              >
                {t('common.requestQuote')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </ClientWrapper>
  )
}
