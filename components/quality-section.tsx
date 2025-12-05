import Image from "next/image"
import { Lightbulb, HeadsetIcon, Users } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

const QualitySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollAnimation animation="animate-fadeInRight">
            <div className="space-y-6">
              <Image
                src="/images/exhibition-stand.jpeg"
                alt="Estande da LJ Santos na Feira da Metalurgia"
                width={750}
                height={446}
                className="rounded-md shadow-md"
              />
              <Image
                src="/images/industrial-facility.png"
                alt="Industrial facility at LJ Santos"
                width={750}
                height={446}
                className="rounded-md shadow-md"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="animate-fadeInLeft">
            <div>
              <h2 className="text-3xl font-bold text-[#005027] mb-6 section-title">
                Qualidade, tecnologia e segurança
              </h2>

              <p className="text-gray-700 mb-6">
                A <strong>LJ Santos</strong> é uma empresa que se destaca no cenário empresarial pelo seu compromisso
                com a inovação e pela sua capacidade de se adaptar às mudanças constantes do mercado. Fundada há mais de
                duas décadas, a <strong>LJ Santos</strong> construiu uma sólida reputação como uma empresa inovadora e
                visionária.
              </p>

              <p className="text-gray-700 mb-8">
                Uma das principais características que tornaram a <strong>LJ Santos</strong> uma referência em inovação
                é o seu compromisso com a pesquisa e o desenvolvimento.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#f2f7f5] p-3 rounded-full mr-4">
                    <Lightbulb className="w-6 h-6 text-[#005027]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#005027] mb-2">Inovação</h3>
                    <p className="text-gray-700">
                      Investimos constantemente em novas tecnologias e métodos de produção, buscando maneiras de
                      aprimorar nossos produtos e serviços. Isso não apenas mantém a empresa competitiva, mas também a
                      posiciona na vanguarda do seu setor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f2f7f5] p-3 rounded-full mr-4">
                    <HeadsetIcon className="w-6 h-6 text-[#005027]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#005027] mb-2">Suporte Técnico Comercial</h3>
                    <p className="text-gray-700">
                      Atendemos diversos segmentos, prestando suporte técnico em todas as etapas da aquisição, sendo os
                      equipamentos testados e validados antes mesmo do transporte.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f2f7f5] p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-[#005027]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#005027] mb-2">Atendimento</h3>
                    <p className="text-gray-700">
                      Um dos mais importantes diferenciais da LJ Santos é o atendimento pós-venda. Suprimos prontamente
                      toda a necessidade de informações técnicas e de funcionamento do equipamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default QualitySection
