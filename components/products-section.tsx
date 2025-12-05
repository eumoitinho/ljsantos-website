import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

const products = [
  {
    title: "Estações de Tratamento de Efluentes",
    link: "/estacoes-tratamento",
  },
  {
    title: "Tanques em Polipropileno",
    link: "/tanques-polipropileno",
  },
  {
    title: "Filtro Prensa",
    link: "/filtro-prensa",
  },
  {
    title: "Linhas de Zincagem Eletrolítica",
    link: "/zincagem-eletrolitica",
  },
  {
    title: "Linhas de Cromagem",
    link: "/linha-de-cromagem",
  },
]

const ProductsSection = () => {
  return (
    <section className="py-16 bg-[#f2f7f5]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollAnimation animation="animate-fadeInRight">
            <div>
              <h2 className="text-3xl font-bold text-[#435a52] section-title">Conheça nossos produtos</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="animate-fadeInLeft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div key={index} className="mb-6">
                  <p className="font-medium text-[#435a52] mb-2">{product.title}</p>
                  <Link href={product.link} className="product-button">
                    Saiba mais
                  </Link>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
