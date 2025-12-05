import Link from "next/link"
import Image from "next/image"
import PageWrapper from "@/components/page-wrapper"
import TranslatedContent from "@/components/translated-content"
import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import { ClientHeroSection, ClientStatsSection, ClientWhyChooseUs } from "@/components/client-components"
import ClientComponentWrapper from "@/components/client-component-wrapper"

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section - Dynamically loaded */}
        <ClientHeroSection />

        {/* Trusted Brands Section */}
        <ScrollAnimation animation="animate-fadeInUp">
          <section className="py-12 bg-[#0e3b7c]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-8">
                <p className="text-white text-xl font-medium">
                  <TranslatedContent translationKey="home.trustedBrands.title" />
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                <Image
                  src="/brands/copacol.png"
                  alt="Copacol"
                  width={120}
                  height={60}
                  className="filter brightness-0 invert"
                />
                <Image
                  src="/brands/benteler.png"
                  alt="Benteler"
                  width={120}
                  height={60}
                  className="filter brightness-0 invert"
                />
                <Image
                  src="/brands/facchini.png"
                  alt="Facchini"
                  width={120}
                  height={60}
                  className="filter brightness-0 invert"
                />
                <Image
                  src="/brands/randon.png"
                  alt="Randon"
                  width={120}
                  height={60}
                  className="filter brightness-0 invert"
                />
                <Image
                  src="/brands/erzinger.png"
                  alt="Erzinger"
                  width={120}
                  height={60}
                  className="filter brightness-0 invert"
                />
                <Image
                  src="/brands/mahle.png"
                  alt="Mahle"
                  width={120}
                  height={60}
                  className="filter brightness-0 invert"
                />
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Products Section */}
        <ScrollAnimation animation="animate-fadeInUp">
          <section id="produtos" className="py-16 bg-[#f2f7f5]">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollAnimation animation="animate-fadeInRight">
                  <div>
                    <h2 className="text-3xl font-bold text-[#435a52] section-title">
                      <TranslatedContent translationKey="home.products.title" />
                    </h2>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="animate-fadeInLeft">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-6">
                      <p className="font-medium text-[#435a52] mb-2">
                        <TranslatedContent translationKey="home.products.treatmentStations" />
                      </p>
                      <Link
                        href="/estacoes-tratamento"
                        className="product-button inline-block rounded-xl hover:shadow-md transition-all duration-300"
                      >
                        <TranslatedContent translationKey="common.learnMore" />
                      </Link>
                    </div>
                    <div className="mb-6">
                      <p className="font-medium text-[#435a52] mb-2">
                        <TranslatedContent translationKey="home.products.ppTanks" />
                      </p>
                      <Link
                        href="/tanques-polipropileno"
                        className="product-button inline-block rounded-xl hover:shadow-md transition-all duration-300"
                      >
                        <TranslatedContent translationKey="common.learnMore" />
                      </Link>
                    </div>
                    <div className="mb-6">
                      <p className="font-medium text-[#435a52] mb-2">
                        <TranslatedContent translationKey="home.products.filterPress" />
                      </p>
                      <Link
                        href="/filtro-prensa"
                        className="product-button inline-block rounded-xl hover:shadow-md transition-all duration-300"
                      >
                        <TranslatedContent translationKey="common.learnMore" />
                      </Link>
                    </div>
                    <div className="mb-6">
                      <p className="font-medium text-[#435a52] mb-2">
                        <TranslatedContent translationKey="home.products.galvanizing" />
                      </p>
                      <Link
                        href="/zincagem"
                        className="product-button inline-block rounded-xl hover:shadow-md transition-all duration-300"
                      >
                        <TranslatedContent translationKey="common.learnMore" />
                      </Link>
                    </div>
                    <div className="mb-6">
                      <p className="font-medium text-[#435a52] mb-2">
                        <TranslatedContent translationKey="home.products.chromePlating" />
                      </p>
                      <Link
                        href="/linha-de-cromagem"
                        className="product-button inline-block rounded-xl hover:shadow-md transition-all duration-300"
                      >
                        <TranslatedContent translationKey="common.learnMore" />
                      </Link>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Why Choose Us Section - Dynamically loaded */}
        <ClientWhyChooseUs />

        {/* Contact Form Section */}
        <section className="py-24 bg-[#f2f7f5]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <ScrollAnimation animation="animate-fadeInUp">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#435a52] mb-4">
                    <TranslatedContent translationKey="contact.sectionTitle" />
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    <TranslatedContent translationKey="contact.sectionSubtitle" />
                  </p>
                </ScrollAnimation>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                {/* Left side - Form */}
                <div className="lg:col-span-3">
                  <ScrollAnimation animation="animate-fadeInRight">
                    <div className="bg-white p-8 rounded-xl shadow-xl h-full">
                      <ContactForm sourcePage="/" sourceType="/solitice-orcamento/" />
                    </div>
                  </ScrollAnimation>
                </div>

                {/* Right side - Image and CTA */}
                <div className="lg:col-span-2">
                  <ScrollAnimation animation="animate-fadeInLeft">
                    <div className="h-full flex flex-col">
                      <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                        <Image
                          src="/images/exhibition-stand.jpeg"
                          alt="LJ Santos Customer Service"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="bg-[#435a52] p-8 rounded-xl flex-grow">
                        <h3 className="text-xl font-bold text-white mb-4">
                          <TranslatedContent translationKey="contact.urgentSolution" />
                        </h3>
                        <p className="text-white text-opacity-90 mb-6">
                          <TranslatedContent translationKey="contact.urgentDescription" />
                        </p>

                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-white bg-opacity-20 p-2 rounded-full">
                              <Phone className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-white">(47) 3427-5414</span>
                              <span className="text-white">(47) 9983-0386</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="bg-white bg-opacity-20 p-2 rounded-full">
                              <Mail className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white">comercial@ljsantos.ind.br</span>
                          </div>
                        </div>

                        <Link
                          href="/solicite-orcamento"
                          className="mt-8 inline-flex items-center gap-2 text-white font-medium hover:underline"
                        >
                          <TranslatedContent translationKey="contact.requestFullQuote" />
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Dynamically loaded */}
        <ClientStatsSection />
       
      </main>
    </PageWrapper>
  )
}
