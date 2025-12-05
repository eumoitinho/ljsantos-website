import PageWrapper from "@/components/page-wrapper"
import TranslatedContent from "@/components/translated-content"
import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata = {
  title: "Contato | LJ Santos",
  description: "Entre em contato com a LJ Santos para soluções industriais personalizadas",
}

export default function ContatoPage() {
  return (
    <PageWrapper>
      <Header />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
             <section className="bg-gradient-to-r pt-32 from-[#435a52] to-[#005027] text-white py-16">

          <div className="container mx-auto px-6">
            <ScrollAnimation animation="animate-fadeInUp">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <TranslatedContent translationKey="contact.page.hero.title" />
                </h1>
                <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
                  <TranslatedContent translationKey="contact.page.hero.subtitle" />
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-[#f2f7f5]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <ScrollAnimation animation="animate-fadeInUp">
                  <h2 className="text-3xl font-bold text-[#435a52] mb-4">
                    <TranslatedContent translationKey="contact.page.form.title" />
                  </h2>
                  <p className="text-gray-600">
                    <TranslatedContent translationKey="contact.page.form.subtitle" />
                  </p>
                </ScrollAnimation>
              </div>

              <ScrollAnimation animation="animate-fadeInUp">
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <ContactForm sourcePage="/contato" sourceType="/contato/" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
