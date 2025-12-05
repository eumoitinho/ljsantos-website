import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Droplets, Recycle, Shield, BarChart, Settings } from "lucide-react"
import ImageGallery from "@/components/image-gallery"
import TranslatedContent from "@/components/translated-content"
import Header from "@/components/header"

export default function EstacoesTratamento() {
  // Imagens do Sistema Batelada
  const bateladaImages = [
    { src: "/images/ete-batelada.jpg", alt: "Main Batch System" },
    { src: "/images/estacao-batelada-2.jpeg", alt: "Batch System Detail" },
    { src: "/images/estacao-batelada-3.jpeg", alt: "Batch System Detail" },
    { src: "/images/estacao-batelada-4.png", alt: "Batch System Detail" },
  ]

  // Imagens do Sistema Contínuo
  const continuaImages = [
    { src: "/images/ete-continua.png", alt: "Main Continuous System" },
    { src: "/images/estacao-continua-2.png", alt: "Continuous System Detail" },
    { src: "/images/estacao-continua-3.png", alt: "Continuous System Detail" },
    { src: "/images/estacao-continua-4.png", alt: "Continuous System Detail" },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 text-white py-16 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/videos/ete-hero.mov" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <ScrollAnimation animation="animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <TranslatedContent translationKey="treatmentStations.title" />
              </h1>
              <p className="text-lg text-white mb-8">
                <TranslatedContent translationKey="treatmentStations.subtitle" />
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/solicite-orcamento"
                  className="inline-block bg-[#448b13] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#3a7510]"
                >
                  <TranslatedContent translationKey="common.requestQuote" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="animate-fadeInRight">
              <div>
                <h2 className="text-3xl font-bold text-[#435a52] section-title mb-6">
                  <TranslatedContent translationKey="treatmentStations.intro.title" />
                </h2>
                <p className="text-gray-700 mb-4">
                  <TranslatedContent translationKey="treatmentStations.intro.paragraph1" />
                </p>
                <p className="text-gray-700 mb-4">
                  <TranslatedContent translationKey="treatmentStations.intro.paragraph2" />
                </p>
                <p className="text-gray-700">
                  <TranslatedContent translationKey="treatmentStations.intro.paragraph3" />
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="animate-fadeInLeft">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageGallery
                  images={[
                    {
                      src: "/images/estacao-continua-1.jpeg",
                      alt: "LJ Santos Wastewater Treatment Stations",
                    },
                  ]}
                  className="hidden"
                />
                <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl group">
                  <Image
                    src="/images/estacao-continua-1.jpeg"
                    alt="LJ Santos Wastewater Treatment Stations"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Redesigned Systems Section */}
      <section className="py-16 bg-[#f2f7f5]">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="animate-fadeInUp">
            <h2 className="text-3xl font-bold text-[#435a52] mb-12 text-center">
              <TranslatedContent translationKey="treatmentStations.systems.title" />
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Sistema por Batelada Card */}
            <ScrollAnimation animation="animate-fadeInLeft">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64 md:h-72 cursor-pointer group overflow-hidden">
                  <Image
                    src={bateladaImages[0].src || "/placeholder.svg"}
                    alt={bateladaImages[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <h3 className="text-2xl font-bold text-white p-6">
                      <TranslatedContent translationKey="treatmentStations.systems.batchSystem.title" />
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    <TranslatedContent translationKey="treatmentStations.systems.batchSystem.description" />
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#f2f7f5] p-4 rounded-lg">
                      <h4 className="font-semibold text-[#435a52] mb-2">
                        <TranslatedContent translationKey="treatmentStations.systems.batchSystem.idealFor" />
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">
                            <TranslatedContent translationKey="treatmentStations.systems.batchSystem.idealItem1" />
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">
                            <TranslatedContent translationKey="treatmentStations.systems.batchSystem.idealItem2" />
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#f2f7f5] p-4 rounded-lg">
                      <h4 className="font-semibold text-[#435a52] mb-2">
                        <TranslatedContent translationKey="treatmentStations.systems.batchSystem.advantages" />
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">
                            <TranslatedContent translationKey="treatmentStations.systems.batchSystem.advantageItem1" />
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">
                            <TranslatedContent translationKey="treatmentStations.systems.batchSystem.advantageItem2" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#435a52] mb-3">
                      <TranslatedContent translationKey="treatmentStations.systems.batchSystem.gallery" />
                    </h4>
                    <ImageGallery images={bateladaImages} />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Sistema Contínuo Card */}
            <ScrollAnimation animation="animate-fadeInRight">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64 md:h-72 cursor-pointer group overflow-hidden">
                  <Image
                    src={continuaImages[0].src || "/placeholder.svg"}
                    alt={continuaImages[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <h3 className="text-2xl font-bold text-white p-6">
                      <TranslatedContent translationKey="treatmentStations.systems.continuousSystem.title" />
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    <TranslatedContent translationKey="treatmentStations.systems.continuousSystem.description" />
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#f2f7f5] p-4 rounded-lg">
                      <h4 className="font-semibold text-[#435a52] mb-2">
                        <TranslatedContent translationKey="treatmentStations.systems.continuousSystem.idealFor" />
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">
                            <TranslatedContent translationKey="treatmentStations.systems.continuousSystem.idealItem1" />
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">
                            <TranslatedContent translationKey="treatmentStations.systems.continuousSystem.idealItem2" />
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#f2f7f5] p-4 rounded-lg">
                      <h4 className="font-semibold text-[#435a52] mb-2">
                        <TranslatedContent translationKey="treatmentStations.systems.continuousSystem.advantages" />
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">
                            <TranslatedContent translationKey="treatmentStations.systems.continuousSystem.advantageItem1" />
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#448b13] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">
                            <TranslatedContent translationKey="treatmentStations.systems.continuousSystem.advantageItem2" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#435a52] mb-3">
                      <TranslatedContent translationKey="treatmentStations.systems.continuousSystem.gallery" />
                    </h4>
                    <ImageGallery images={continuaImages} />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Comparison Table */}
          <div className="mt-16">
            <ScrollAnimation animation="animate-fadeInUp">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 bg-[#435a52] text-white">
                  <h3 className="text-xl font-bold">
                    <TranslatedContent translationKey="treatmentStations.comparison.title" />
                  </h3>
                  <p className="text-white/80 mt-1">
                    <TranslatedContent translationKey="treatmentStations.comparison.subtitle" />
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-4 font-semibold text-[#435a52]">
                          <TranslatedContent translationKey="treatmentStations.comparison.characteristics" />
                        </th>
                        <th className="text-center p-4 font-semibold text-[#435a52]">
                          <TranslatedContent translationKey="treatmentStations.comparison.batchSystem" />
                        </th>
                        <th className="text-center p-4 font-semibold text-[#435a52]">
                          <TranslatedContent translationKey="treatmentStations.comparison.continuousSystem" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-100">
                        <td className="p-4 font-medium">
                          <TranslatedContent translationKey="treatmentStations.comparison.volumeOfEffluents" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.volumeBatch" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.volumeContinuous" />
                        </td>
                      </tr>
                      <tr className="border-t border-gray-100 bg-gray-50">
                        <td className="p-4 font-medium">
                          <TranslatedContent translationKey="treatmentStations.comparison.operation" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.operationBatch" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.operationContinuous" />
                        </td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="p-4 font-medium">
                          <TranslatedContent translationKey="treatmentStations.comparison.flexibility" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.flexibilityBatch" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.flexibilityContinuous" />
                        </td>
                      </tr>
                      <tr className="border-t border-gray-100 bg-gray-50">
                        <td className="p-4 font-medium">
                          <TranslatedContent translationKey="treatmentStations.comparison.processControl" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.controlBatch" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.controlContinuous" />
                        </td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="p-4 font-medium">
                          <TranslatedContent translationKey="treatmentStations.comparison.spaceRequired" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.spaceBatch" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.spaceContinuous" />
                        </td>
                      </tr>
                      <tr className="border-t border-gray-100 bg-gray-50">
                        <td className="p-4 font-medium">
                          <TranslatedContent translationKey="treatmentStations.comparison.energyConsumption" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.energyBatch" />
                        </td>
                        <td className="p-4 text-center">
                          <TranslatedContent translationKey="treatmentStations.comparison.energyContinuous" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="animate-fadeInUp">
            <h2 className="text-3xl font-bold text-[#435a52] mb-8 text-center">
              <TranslatedContent translationKey="treatmentStations.benefits.title" />
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-100">
              <div className="bg-[#f2f7f5] p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white p-3 rounded-full inline-block mb-4 shadow-md">
                  <Droplets className="w-6 h-6 text-[#448b13]" />
                </div>
                <h3 className="text-xl font-semibold text-[#435a52] mb-3">
                  <TranslatedContent translationKey="treatmentStations.benefits.waterSavings.title" />
                </h3>
                <p className="text-gray-700">
                  <TranslatedContent translationKey="treatmentStations.benefits.waterSavings.description" />
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-200">
              <div className="bg-[#f2f7f5] p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white p-3 rounded-full inline-block mb-4 shadow-md">
                  <Shield className="w-6 h-6 text-[#448b13]" />
                </div>
                <h3 className="text-xl font-semibold text-[#435a52] mb-3">
                  <TranslatedContent translationKey="treatmentStations.benefits.legalCompliance.title" />
                </h3>
                <p className="text-gray-700">
                  <TranslatedContent translationKey="treatmentStations.benefits.legalCompliance.description" />
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-300">
              <div className="bg-[#f2f7f5] p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white p-3 rounded-full inline-block mb-4 shadow-md">
                  <Recycle className="w-6 h-6 text-[#448b13]" />
                </div>
                <h3 className="text-xl font-semibold text-[#435a52] mb-3">
                  <TranslatedContent translationKey="treatmentStations.benefits.sustainability.title" />
                </h3>
                <p className="text-gray-700">
                  <TranslatedContent translationKey="treatmentStations.benefits.sustainability.description" />
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-100">
              <div className="bg-[#f2f7f5] p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white p-3 rounded-full inline-block mb-4 shadow-md">
                  <Settings className="w-6 h-6 text-[#448b13]" />
                </div>
                <h3 className="text-xl font-semibold text-[#435a52] mb-3">
                  <TranslatedContent translationKey="treatmentStations.benefits.advancedAutomation.title" />
                </h3>
                <p className="text-gray-700">
                  <TranslatedContent translationKey="treatmentStations.benefits.advancedAutomation.description" />
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-200">
              <div className="bg-[#f2f7f5] p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white p-3 rounded-full inline-block mb-4 shadow-md">
                  <BarChart className="w-6 h-6 text-[#448b13]" />
                </div>
                <h3 className="text-xl font-semibold text-[#435a52] mb-3">
                  <TranslatedContent translationKey="treatmentStations.benefits.highEfficiency.title" />
                </h3>
                <p className="text-gray-700">
                  <TranslatedContent translationKey="treatmentStations.benefits.highEfficiency.description" />
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="animate-fadeInUp" delay="animate-delay-300">
              <div className="bg-[#f2f7f5] p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white p-3 rounded-full inline-block mb-4 shadow-md">
                  <CheckCircle className="w-6 h-6 text-[#448b13]" />
                </div>
                <h3 className="text-xl font-semibold text-[#435a52] mb-3">
                  <TranslatedContent translationKey="treatmentStations.benefits.customization.title" />
                </h3>
                <p className="text-gray-700">
                  <TranslatedContent translationKey="treatmentStations.benefits.customization.description" />
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#435a52] rounded-t-3xl">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation animation="animate-fadeInUp">
            <h2 className="text-3xl font-bold text-white mb-6">
              <TranslatedContent translationKey="contact.title" />
            </h2>
            <p className="text-white mb-8 max-w-3xl mx-auto">
              <TranslatedContent translationKey="contact.subtitle" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/solicite-orcamento"
                className="text-base font-bold py-3 px-6 rounded-xl bg-white text-[#435a52] hover:bg-gray-100 transition-all duration-300 hover:shadow-lg inline-block"
              >
                <TranslatedContent translationKey="treatmentStations.cta" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
