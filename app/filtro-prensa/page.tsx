import Image from "next/image"
import TranslatedContent from "@/components/translated-content"
import type { Metadata } from "next"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Filter Press | LJ Santos",
  description:
    "Efficient solutions for solid-liquid separation, ensuring high performance and operational economy for various industrial processes.",
}

export default function FilterPressPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 text-white py-16 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/videos/filtro-prensa-hero.mov" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                <TranslatedContent translationKey="filterPress.title" />
              </h1>
              <p className="text-xl mb-6">
                <TranslatedContent translationKey="filterPress.subtitle" />
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                <TranslatedContent translationKey="filterPress.cta" />
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/filtro-prensa-hero.jpg"
                  alt="Filtro Prensa LJ Santos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <TranslatedContent translationKey="filterPress.intro.title" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                <TranslatedContent translationKey="filterPress.intro.paragraph1" />
              </p>
              <p className="text-lg mb-4">
                <TranslatedContent translationKey="filterPress.intro.paragraph2" />
              </p>
              <p className="text-lg">
                <TranslatedContent translationKey="filterPress.intro.paragraph3" />
              </p>
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/filtro-prensa-2.jpeg" alt="Filtro Prensa LJ Santos" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <TranslatedContent translationKey="filterPress.howItWorks.title" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/filtro-prensa-3.png" alt="Filter Press in Operation" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <TranslatedContent translationKey="filterPress.howItWorks.operatingPrinciple.title" />
              </h3>
              <p className="text-lg mb-6">
                <TranslatedContent translationKey="filterPress.howItWorks.operatingPrinciple.description" />
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              <TranslatedContent translationKey="filterPress.howItWorks.processSteps.title" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step}
                  </div>
                  <p className="text-lg">
                    <TranslatedContent translationKey={`filterPress.howItWorks.processSteps.step${step}`} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              <TranslatedContent translationKey="filterPress.howItWorks.mainComponents.title" />
            </h3>
            <p className="text-lg mb-6">
              <TranslatedContent translationKey="filterPress.howItWorks.mainComponents.description" />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
                  <Image src="/images/filtro-prensa-5.png" alt="Placa Filtrante" fill className="object-cover" />
                </div>
                <p className="text-lg font-semibold mb-2">
                  <TranslatedContent translationKey="filterPress.howItWorks.mainComponents.component1" />
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
                  <Image
                    src="/images/filtro-prensa-4.jpeg"
                    alt="Detalhe da Placa Filtrante"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-lg font-semibold mb-2">
                  <TranslatedContent translationKey="filterPress.howItWorks.mainComponents.component3" />
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
                  <Image
                    src="/images/filtro-prensa-6.png"
                    alt="Estrutura do Filtro Prensa"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-lg font-semibold mb-2">
                  <TranslatedContent translationKey="filterPress.howItWorks.mainComponents.component5" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <TranslatedContent translationKey="filterPress.benefits.title" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="filterPress.benefits.highFiltration.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="filterPress.benefits.highFiltration.description" />
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="filterPress.benefits.waterSavings.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="filterPress.benefits.waterSavings.description" />
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="filterPress.benefits.wasteManagement.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="filterPress.benefits.wasteManagement.description" />
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="filterPress.benefits.automatedOperation.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="filterPress.benefits.automatedOperation.description" />
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="filterPress.benefits.lowOperationalCost.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="filterPress.benefits.lowOperationalCost.description" />
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="filterPress.benefits.versatility.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="filterPress.benefits.versatility.description" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <TranslatedContent translationKey="filterPress.applications.title" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">
                <TranslatedContent translationKey="filterPress.applications.effluentTreatment.title" />
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <TranslatedContent translationKey="filterPress.applications.effluentTreatment.item1" />
                </li>
                <li>
                  <TranslatedContent translationKey="filterPress.applications.effluentTreatment.item2" />
                </li>
                <li>
                  <TranslatedContent translationKey="filterPress.applications.effluentTreatment.item3" />
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">
                <TranslatedContent translationKey="filterPress.applications.chemicalIndustry.title" />
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <TranslatedContent translationKey="filterPress.applications.chemicalIndustry.item1" />
                </li>
                <li>
                  <TranslatedContent translationKey="filterPress.applications.chemicalIndustry.item2" />
                </li>
                <li>
                  <TranslatedContent translationKey="filterPress.applications.chemicalIndustry.item3" />
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">
                <TranslatedContent translationKey="filterPress.applications.electroplating.title" />
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <TranslatedContent translationKey="filterPress.applications.electroplating.item1" />
                </li>
                <li>
                  <TranslatedContent translationKey="filterPress.applications.electroplating.item2" />
                </li>
                <li>
                  <TranslatedContent translationKey="filterPress.applications.electroplating.item3" />
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">
                <TranslatedContent translationKey="filterPress.applications.mining.title" />
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <TranslatedContent translationKey="filterPress.applications.mining.item1" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                <TranslatedContent translationKey="filterPress.cta" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
