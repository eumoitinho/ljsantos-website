import Image from "next/image"
import TranslatedContent from "@/components/translated-content"
import type { Metadata } from "next"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Galvanizing | LJ Santos",
  description:
    "High-quality anti-corrosion protection for metal components, ensuring durability and resistance.",
}

export default function GalvanizingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 text-white py-16 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/videos/zincagem-hero.mp4" type="video/mp4" />
            <source src="/videos/zincagem-hero.mov" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                <TranslatedContent translationKey="galvanizing.title" />
              </h1>
              <p className="text-xl mb-6">
                <TranslatedContent translationKey="galvanizing.subtitle" />
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                <TranslatedContent translationKey="galvanizing.cta" />
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/zincagem-hero.jpg"
                  alt="LJ Santos Galvanizing Line"
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
            <TranslatedContent translationKey="galvanizing.intro.title" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                <TranslatedContent translationKey="galvanizing.intro.paragraph1" />
              </p>
              <p className="text-lg">
                <TranslatedContent translationKey="galvanizing.intro.paragraph2" />
              </p>
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/zincagem-4.png" alt="Galvanizing Process" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <TranslatedContent translationKey="galvanizing.features.title" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="galvanizing.features.anticorrosiveProtection.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="galvanizing.features.anticorrosiveProtection.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="galvanizing.features.uniformFinish.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="galvanizing.features.uniformFinish.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="galvanizing.features.versatility.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="galvanizing.features.versatility.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="galvanizing.features.coloredPassivation.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="galvanizing.features.coloredPassivation.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="galvanizing.features.environmentalCompliance.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="galvanizing.features.environmentalCompliance.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="galvanizing.features.qualityControl.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="galvanizing.features.qualityControl.description" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <TranslatedContent translationKey="galvanizing.process.title" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  <TranslatedContent translationKey={`galvanizing.process.steps.step${step}.title`} />
                </h3>
                <p>
                  <TranslatedContent translationKey={`galvanizing.process.steps.step${step}.description`} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <TranslatedContent translationKey="galvanizing.infrastructure.title" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-full mb-4 rounded overflow-hidden">
                <Image src="/images/zincagem-1.png" alt="Rotating drum for galvanizing" fill className="object-cover" />
              </div>
              <p className="text-center text-lg">
                <TranslatedContent translationKey="galvanizing.infrastructure.rotatingDrum" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-full mb-4 rounded overflow-hidden">
                <Image
                  src="/images/zincagem-3.png"
                  alt="Drum system for galvanizing"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-lg">
                <TranslatedContent translationKey="galvanizing.infrastructure.drumSystem" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <TranslatedContent translationKey="galvanizing.applications.title" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">
                <TranslatedContent translationKey="galvanizing.applications.automotive.title" />
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <TranslatedContent translationKey="galvanizing.applications.automotive.item1" />
                </li>
                <li>
                  <TranslatedContent translationKey="galvanizing.applications.automotive.item2" />
                </li>
                <li>
                  <TranslatedContent translationKey="galvanizing.applications.automotive.item3" />
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">
                <TranslatedContent translationKey="galvanizing.applications.construction.title" />
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <TranslatedContent translationKey="galvanizing.applications.construction.item1" />
                </li>
                <li>
                  <TranslatedContent translationKey="galvanizing.applications.construction.item2" />
                </li>
                <li>
                  <TranslatedContent translationKey="galvanizing.applications.construction.item3" />
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">
                <TranslatedContent translationKey="galvanizing.applications.appliances.title" />
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <TranslatedContent translationKey="galvanizing.applications.appliances.item1" />
                </li>
                <li>
                  <TranslatedContent translationKey="galvanizing.applications.appliances.item2" />
                </li>
                <li>
                  <TranslatedContent translationKey="galvanizing.applications.appliances.item3" />
                </li>
              </ul>
            </div>
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
                <TranslatedContent translationKey="galvanizing.cta" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
