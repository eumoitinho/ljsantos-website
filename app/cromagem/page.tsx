import Image from "next/image"
import TranslatedContent from "@/components/translated-content"
import type { Metadata } from "next"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Chrome Plating Line | LJ Santos",
  description: "Complete solutions for industrial chrome plating processes with high efficiency and superior quality.",
}

export default function ChromePlatingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 text-white py-16 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/videos/cromagem-hero.mp4" type="video/mp4" />
            <source src="/videos/cromagem-hero.mov" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                <TranslatedContent translationKey="chromePlating.title" />
              </h1>
              <p className="text-xl mb-6">
                <TranslatedContent translationKey="chromePlating.subtitle" />
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                <TranslatedContent translationKey="chromePlating.cta" />
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/cromagem-hero.png"
                  alt="Linha de Cromagem LJ Santos"
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
            <TranslatedContent translationKey="chromePlating.intro.title" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                <TranslatedContent translationKey="chromePlating.intro.paragraph1" />
              </p>
              <p className="text-lg mb-4">
                <TranslatedContent translationKey="chromePlating.intro.paragraph2" />
              </p>
              <p className="text-lg">
                <TranslatedContent translationKey="chromePlating.intro.paragraph3" />
              </p>
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/cromagem-2.webp" alt="Processo de Cromagem" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <TranslatedContent translationKey="chromePlating.features.title" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="chromePlating.features.highProductivity.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="chromePlating.features.highProductivity.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="chromePlating.features.superiorQuality.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="chromePlating.features.superiorQuality.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="chromePlating.features.sustainability.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="chromePlating.features.sustainability.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="chromePlating.features.automation.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="chromePlating.features.automation.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="chromePlating.features.safety.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="chromePlating.features.safety.description" />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                <TranslatedContent translationKey="chromePlating.features.energyEfficiency.title" />
              </h3>
              <p>
                <TranslatedContent translationKey="chromePlating.features.energyEfficiency.description" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <TranslatedContent translationKey="chromePlating.gallery.title" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[10, 12, 13, 14, 6, 9].map((item) => (
              <div key={item} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`/images/cromagem-${item}.webp`}
                  alt={`Linha de Cromagem ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <TranslatedContent translationKey="chromePlating.process.title" />
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-center">
              <TranslatedContent translationKey="chromePlating.process.steps.title" />
            </h3>
            <p className="text-lg mb-8 text-center max-w-4xl mx-auto">
              <TranslatedContent translationKey="chromePlating.process.steps.description" />
            </p>

            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="relative h-48 w-full rounded overflow-hidden">
                      <Image
                        src={`/images/cromagem-${step}.webp`}
                        alt={`Chrome Plating Process Step ${step}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {step}
                      </div>
                      <h4 className="text-xl font-bold">
                        <TranslatedContent translationKey={`chromePlating.process.steps.step${step}.title`} />
                      </h4>
                    </div>
                    <p className="text-lg">
                      <TranslatedContent translationKey={`chromePlating.process.steps.step${step}.description`} />
                    </p>
                  </div>
                </div>
              ))}
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
                <TranslatedContent translationKey="chromePlating.cta" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
