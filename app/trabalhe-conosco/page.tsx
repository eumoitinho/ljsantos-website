import PageWrapper from "@/components/page-wrapper"
import TranslatedContent from "@/components/translated-content"
import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata = {
  title: "Trabalhe Conosco | LJ Santos",
  description: "Junte-se à equipe LJ Santos e faça parte de uma empresa líder em soluções industriais",
}

export default function TrabalheConoscoPage() {
  return (
    <PageWrapper>
      <Header />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#435a52] to-[#005027] py-20">
          <div className="container mx-auto px-6">
            <ScrollAnimation animation="animate-fadeInUp">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <TranslatedContent translationKey="careers.page.hero.title" />
                </h1>
                <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
                  <TranslatedContent translationKey="careers.page.hero.subtitle" />
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-[#f2f7f5]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <ScrollAnimation animation="animate-fadeInUp">
                  <h2 className="text-3xl font-bold text-[#435a52] mb-4">
                    <TranslatedContent translationKey="careers.page.application.title" />
                  </h2>
                  <p className="text-gray-600">
                    <TranslatedContent translationKey="careers.page.application.subtitle" />
                  </p>
                </ScrollAnimation>
              </div>

              <ScrollAnimation animation="animate-fadeInUp">
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <ContactForm sourcePage="/trabalhe-conosco" sourceType="/trabalhe-conosco/" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
