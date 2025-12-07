import {fetchPostBySlug, fetchPosts, urlFor} from '@/lib/sanity'
import PortableTextRenderer from '@/components/portable-text'
import Header2 from '@/components/header2'
import {notFound} from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {Calendar, User, Clock, Tag, ArrowLeft} from 'lucide-react'

interface Params {
  slug: string
}

export async function generateStaticParams() {
  const posts = await fetchPosts(50)
  return posts.map((p: any) => ({slug: p.slug.current}))
}

const estimateReadTime = (body: any[] = []) => {
  const words = body
    .filter((block: any) => block._type === 'block' && Array.isArray(block.children))
    .flatMap((block: any) => block.children)
    .map((child: any) => child.text || '')
    .join(' ')
    .trim()
    .split(/\s+/).length

  return Math.max(1, Math.round(words / 180))
}

export default async function BlogPostPage({params}: {params: Params}) {
  const post = await fetchPostBySlug(params.slug)
  if (!post) return notFound()
  const heroImage = post.mainImage ? urlFor(post.mainImage).width(1600).height(900).fit('crop').url() : '/images/blog-circular.jpg'
  const readTime = estimateReadTime(post.body || [])
  const authorName = typeof post.author === 'string' ? post.author : post.author?.name || 'Equipe LJ Santos'
  const mainCategory = post.categories?.[0]?.title

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header2 />
      <div className="bg-gradient-to-b from-[#f2f7f5] via-white to-white">
        <div className="container mx-auto px-6 pt-28 pb-10 max-w-5xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-[#448b13] hover:text-[#1c4837] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o blog
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.categories?.map((cat) => (
              <span
                key={cat._id}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1c4837] bg-white border border-[#dce8e1] px-3 py-1 rounded-full"
              >
                <Tag className="w-3 h-3" /> {cat.title}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-[#1c4837] leading-tight mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            {post.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{authorName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readTime} min de leitura</span>
            </div>
          </div>

          {post.excerpt && <p className="text-lg text-[#1c4837] mb-6 max-w-3xl">{post.excerpt}</p>}
        </div>

        {heroImage && (
          <div className="container mx-auto px-6 pb-12 max-w-5xl">
            <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-[#dce8e1]">
              <Image
                src={heroImage}
                alt={post.mainImage?.alt || post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 80vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {mainCategory && (
                <div className="absolute top-4 left-4 bg-white text-[#1c4837] text-xs font-semibold py-1 px-3 rounded-full shadow">
                  {mainCategory}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <article className="container mx-auto px-6 pb-20 max-w-6xl -mt-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="bg-white border border-[#e6efe9] rounded-2xl shadow-md px-6 md:px-10 py-10 md:py-12">
              {post.body && <PortableTextRenderer value={post.body} />}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="bg-white border border-[#e6efe9] rounded-2xl shadow-sm p-5 md:p-6">
              <p className="text-xs font-semibold text-[#448b13] uppercase tracking-[0.14em] mb-2">Resumo rápido</p>
              <h3 className="text-lg font-bold text-[#1c4837] mb-2">Por que ler?</h3>
              <p className="text-sm text-gray-700 mb-4">
                {post.excerpt || 'Entenda o impacto das soluções de tratamento na operação, segurança e sustentabilidade da indústria.'}
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                {post.categories?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((cat) => (
                      <span key={cat._id} className="px-3 py-1 rounded-full bg-[#f2f7f5] border border-[#dce8e1] text-[#1c4837] text-xs font-semibold">
                        {cat.title}
                      </span>
                    ))}
                  </div>
                ) : null}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#448b13]" />
                  <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pt-BR') : 'Data não informada'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#448b13]" />
                  <span>{authorName}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#448b13] to-[#2f5f0c] text-white rounded-2xl shadow-md p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-2">Quer aplicar na sua planta?</p>
              <h3 className="text-lg font-bold mb-2">Fale com um especialista</h3>
              <p className="text-white/85 text-sm mb-4">Tire dúvidas sobre dimensionamento, requisitos legais e operação segura dos sistemas.</p>
              <div className="space-y-3">
                <Link href="/solicite-orcamento" className="inline-flex items-center justify-center w-full bg-white text-[#1c4837] font-semibold py-3 rounded-lg hover:bg-[#e7f2e4] transition-colors">
                  Solicitar orçamento
                </Link>
                <Link href="/contato" className="inline-flex items-center justify-center w-full border border-white/60 text-white font-semibold py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Falar com consultor
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[#e6efe9] rounded-2xl shadow-sm p-5 md:p-6 space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#448b13] uppercase tracking-[0.14em] mb-2">Pontos-chave</p>
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>Benefícios práticos e ambientais da solução</li>
                  <li>Cuidados de operação e manutenção</li>
                  <li>Ganhos de eficiência e conformidade</li>
                </ul>
              </div>
              <div className="border-t border-[#e6efe9] pt-4">
                <p className="text-xs font-semibold text-[#448b13] uppercase tracking-[0.14em] mb-2">Compartilhar</p>
                <div className="flex gap-3">
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://ljsantos.com.br/blog/${post.slug.current}`)}`} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-[#f2f7f5] text-[#1c4837] text-sm font-semibold hover:bg-[#e6efe9]">
                    LinkedIn
                  </a>
                  <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' - https://ljsantos.com.br/blog/' + post.slug.current)}`} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-[#f2f7f5] text-[#1c4837] text-sm font-semibold hover:bg-[#e6efe9]">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
