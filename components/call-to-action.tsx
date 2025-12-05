import ScrollAnimation from "@/components/scroll-animation"

const CallToAction = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cta-background.png')" }}
    >
      <div className="absolute inset-0 bg-[#448b13] opacity-80"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollAnimation animation="animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-4xl mx-auto">
            Nossa experiência e inovação fazem de nós a escolha certa em tratamento de efluentes industriais
          </h2>

          <a href="/solicite-orcamento" className="cta-button inline-block">
            Solicite um orçamento hoje
          </a>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default CallToAction
