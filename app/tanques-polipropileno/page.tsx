import Image from "next/image"
import TranslatedContent from "@/components/translated-content"
import type { Metadata } from "next"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Polypropylene Tanks | LJ Santos",
  description:
    "Durable and resistant solutions for storage and processing of chemical products, with high corrosion resistance and excellent cost-benefit.",
}

export default function PPTanksPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 text-white py-16 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/tanques-hero.jpg"
            alt="Tanques de Polipropileno"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                <TranslatedContent translationKey="ppTanks.title" />
              </h1>
              <p className="text-xl mb-6">
                <TranslatedContent translationKey="ppTanks.subtitle" />
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                <TranslatedContent translationKey="ppTanks.requestQuote" />
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/tanques-hero.jpg"
                  alt="Tanques de Polipropileno LJ Santos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            <TranslatedContent translationKey="ppTanks.overview.title" />
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            <TranslatedContent translationKey="ppTanks.overview.subtitle" />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                <TranslatedContent translationKey="ppTanks.overview.paragraph1" />
              </p>
              <p className="text-lg mb-8">
                <TranslatedContent translationKey="ppTanks.overview.paragraph2" />
              </p>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600">
                    <TranslatedContent translationKey="ppTanks.overview.yearsExperience" />
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
                  <div className="text-gray-600">
                    <TranslatedContent translationKey="ppTanks.overview.tanksInstalled" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/tanques-secondary.jpg" alt="Tanques de Polipropileno" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            <TranslatedContent translationKey="ppTanks.features.title" />
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            <TranslatedContent translationKey="ppTanks.features.subtitle" />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="ppTanks.features.chemicalResistance.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="ppTanks.features.chemicalResistance.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="ppTanks.features.durability.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="ppTanks.features.durability.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="ppTanks.features.reducedWeight.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="ppTanks.features.reducedWeight.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="ppTanks.features.customization.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="ppTanks.features.customization.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="ppTanks.features.lowMaintenance.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="ppTanks.features.lowMaintenance.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="ppTanks.features.costBenefit.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="ppTanks.features.costBenefit.description" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Tanks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            <TranslatedContent translationKey="ppTanks.types.title" />
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            <TranslatedContent translationKey="ppTanks.types.subtitle" />
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
                <Image src="/images/tanques-pp-7.png" alt="Tanques Horizontais" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="ppTanks.types.horizontal.title" />
              </h3>
              <p className="mb-4">
                <TranslatedContent translationKey="ppTanks.types.horizontal.description" />
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.horizontal.feature1" />
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.horizontal.feature2" />
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.horizontal.feature3" />
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.horizontal.feature4" />
                </li>
              </ul>
              <Link href="/solicite-orcamento">
                <button className="text-green-700 font-semibold hover:text-green-800">
                  <TranslatedContent translationKey="ppTanks.types.vertical.requestInfo" /> →
                </button>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
                <Image src="/images/tanques-pp-8.png" alt="Tanques Verticais" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="ppTanks.types.vertical.title" />
              </h3>
              <p className="mb-4">
                <TranslatedContent translationKey="ppTanks.types.vertical.description" />
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.vertical.feature1" />
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.vertical.feature2" />
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.vertical.feature3" />
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.vertical.feature4" />
                </li>
              </ul>
              <Link href="/solicite-orcamento">
                <button className="text-green-700 font-semibold hover:text-green-800">
                  <TranslatedContent translationKey="ppTanks.types.vertical.requestInfo" /> →
                </button>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
                <Image src="/images/tanques-pp-9.png" alt="Tanques de Processo" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="ppTanks.types.process.title" />
              </h3>
              <p className="mb-4">
                <TranslatedContent translationKey="ppTanks.types.process.description" />
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.process.feature1" />
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.process.feature2" />
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.process.feature3" />
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <TranslatedContent translationKey="ppTanks.types.process.feature4" />
                </li>
              </ul>
              <Link href="/solicite-orcamento">
                <button className="text-green-700 font-semibold hover:text-green-800">
                  <TranslatedContent translationKey="ppTanks.types.vertical.requestInfo" /> →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            <TranslatedContent translationKey="ppTanks.specifications.title" />
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            <TranslatedContent translationKey="ppTanks.specifications.subtitle" />
          </p>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-gray-50 w-1/4">
                    <TranslatedContent translationKey="ppTanks.specifications.material" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">
                      <TranslatedContent translationKey="ppTanks.specifications.materialSpec" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <TranslatedContent translationKey="ppTanks.specifications.materialNotes" />
                    </div>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-gray-50">
                    <TranslatedContent translationKey="ppTanks.specifications.wallThickness" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">
                      <TranslatedContent translationKey="ppTanks.specifications.wallThicknessSpec" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <TranslatedContent translationKey="ppTanks.specifications.wallThicknessNotes" />
                    </div>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-gray-50">
                    <TranslatedContent translationKey="ppTanks.specifications.operatingTemp" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">
                      <TranslatedContent translationKey="ppTanks.specifications.operatingTempSpec" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <TranslatedContent translationKey="ppTanks.specifications.operatingTempNotes" />
                    </div>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-gray-50">
                    <TranslatedContent translationKey="ppTanks.specifications.chemicalResistance" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">
                      <TranslatedContent translationKey="ppTanks.specifications.chemicalResistanceSpec" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <TranslatedContent translationKey="ppTanks.specifications.chemicalResistanceNotes" />
                    </div>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-gray-50">
                    <TranslatedContent translationKey="ppTanks.specifications.availableCapacities" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">
                      <TranslatedContent translationKey="ppTanks.specifications.availableCapacitiesSpec" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <TranslatedContent translationKey="ppTanks.specifications.availableCapacitiesNotes" />
                    </div>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold bg-gray-50">
                    <TranslatedContent translationKey="ppTanks.specifications.manufacturingMethods" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">
                      <TranslatedContent translationKey="ppTanks.specifications.manufacturingMethodsSpec" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <TranslatedContent translationKey="ppTanks.specifications.manufacturingMethodsNotes" />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-semibold bg-gray-50">
                    <TranslatedContent translationKey="ppTanks.specifications.applicableStandards" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">
                      <TranslatedContent translationKey="ppTanks.specifications.applicableStandardsSpec" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <TranslatedContent translationKey="ppTanks.specifications.applicableStandardsNotes" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
                <TranslatedContent translationKey="ppTanks.requestQuote" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
