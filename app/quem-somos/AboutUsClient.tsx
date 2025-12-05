"use client"

import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Users, Clock, Target, Lightbulb } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export default function AboutUsClient() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#f2f7f5] to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <ScrollAnimation animation="animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl font-bold text-[#435a52] mb-6">
                {t('aboutUs.title')}
              </h1>
              <p className="text-lg text-gray-700 mb-8">{t('aboutUs.subtitle')}</p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="animate-fadeInRight">
              <div>
                <h2 className="text-3xl font-bold text-[#435a52] section-title">
                  {t('aboutUs.history.title')}
                </h2>
                <p className="text-gray-700 mb-4">{t('aboutUs.history.paragraph1')}</p>
                <p className="text-gray-700 mb-4">{t('aboutUs.history.paragraph2')}</p>
                <p className="text-gray-700 mb-4">{t('aboutUs.history.paragraph3')}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="animate-fadeInLeft">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/quem-somos-hero.jpg"
                  alt={t('images.alt.facilities')}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-[#f2f7f5]">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="animate-fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#435a52] mb-4 section-title centered">
                {t('aboutUs.mission.title')}, {t('aboutUs.vision.title')} e {t('aboutUs.values.title')}
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                {t('aboutUs.ourPrinciples') || 'Our fundamental principles guide all our actions and decisions, defining who we are and how we work.'}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-100">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f2f7f5] p-3 rounded-full inline-block mb-4">
                  <Target className="w-6 h-6 text-[#448b13]" />
                </div>
                <h3 className="text-xl font-bold text-[#435a52] mb-4">{t('aboutUs.mission.title')}</h3>
                <p className="text-gray-700">{t('aboutUs.mission.description')}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-200">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f2f7f5] p-3 rounded-full inline-block mb-4">
                  <Lightbulb className="w-6 h-6 text-[#448b13]" />
                </div>
                <h3 className="text-xl font-bold text-[#435a52] mb-4">{t('aboutUs.vision.title')}</h3>
                <p className="text-gray-700">{t('aboutUs.vision.description')}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-300">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f2f7f5] p-3 rounded-full inline-block mb-4">
                  <Award className="w-6 h-6 text-[#448b13]" />
                </div>
                <h3 className="text-xl font-bold text-[#435a52] mb-4">{t('aboutUs.values.title')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                    <span>{t('aboutUs.values.value1')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                    <span>{t('aboutUs.values.value2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                    <span>{t('aboutUs.values.value3')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                    <span>{t('aboutUs.values.value4')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                    <span>{t('aboutUs.values.value5')}</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="animate-fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#435a52] mb-4 section-title centered">
                {t('aboutUs.team.title')}
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">{t('aboutUs.team.description')}</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start">
                <div className="bg-[#f2f7f5] p-3 rounded-full mr-4">
                  <Users className="w-6 h-6 text-[#448b13]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#435a52] mb-2">
                    {t('aboutUs.team.specializedTeam.title')}
                  </h3>
                  <p className="text-gray-700">{t('aboutUs.team.specializedTeam.description')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f2f7f5] p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-[#448b13]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#435a52] mb-2">
                    {t('aboutUs.team.continuousSupport.title')}
                  </h3>
                  <p className="text-gray-700">{t('aboutUs.team.continuousSupport.description')}</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="animate-fadeInUp">
            <div className="bg-[#f2f7f5] p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-[#435a52] mb-4">{t('aboutUs.team.joinUs.title')}</h3>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                {t('aboutUs.team.joinUs.description')}
              </p>
              <Link
                href="/contato"
                className="inline-block bg-[#448b13] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#3a7510] transition-colors"
              >
                {t('common.workWithUs')}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-16 bg-[#f2f7f5]">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="animate-fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#435a52] mb-4 section-title centered">
                {t('aboutUs.facilities.title')}
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">{t('aboutUs.facilities.description')}</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation animation="animate-fadeInRight">
              <div>
                <Image
                  src="/images/instalacoes-fachada.jpg"
                  alt={t('aboutUs.facilities.exhibitionStand')}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg mb-4"
                />
                <p className="text-sm text-gray-600 text-center">
                  {t('aboutUs.facilities.exhibitionStand')}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="animate-fadeInLeft">
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg mb-4">
                  <Image
                    src="/images/instalacoes-fabrica.jpg"
                    alt={t('images.alt.industrial')}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  {t('aboutUs.facilities.industrialFacility')}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#435a52]">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation animation="animate-fadeInUp">
            <h2 className="text-3xl font-bold text-white mb-6">{t('aboutUs.aboutUsCta.title')}</h2>
            <p className="text-white mb-8 max-w-3xl mx-auto">{t('aboutUs.aboutUsCta.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/solucoes"
                className="text-base font-bold py-3 px-6 rounded-xl bg-white text-[#435a52] hover:bg-gray-100 transition-all duration-300 hover:shadow-lg inline-block"
              >
                {t('aboutUs.aboutUsCta.solutions')}
              </Link>
              <Link
                href="/solicite-orcamento"
                className="text-base font-bold py-3 px-6 rounded-xl bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300 hover:shadow-lg inline-block"
              >
                {t('aboutUs.aboutUsCta.requestQuote')}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
