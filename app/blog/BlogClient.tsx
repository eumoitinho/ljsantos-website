"use client"

import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import { SanityPost, urlFor } from "@/lib/sanity"
import { useTranslation } from "@/lib/i18n"

interface BlogClientProps {
  posts: SanityPost[]
  categories: { _id: string; title: string; slug: { current: string } }[]
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const { t } = useTranslation()
  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  const getImage = (post: SanityPost, width = 1200, height = 700) =>
    post.mainImage ? urlFor(post.mainImage).width(width).height(height).fit("crop").url() : "/images/blog-innovation.jpg"

  const formatDate = (date?: string) => (date ? new Date(date).toLocaleDateString("pt-BR") : "")
  const formatAuthor = (author?: SanityPost["author"] | string) =>
    typeof author === "string" ? author : author?.name || "Equipe LJ Santos"

  return (
    <>
      {/* Hero + destaque */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e8f3ed] via-white to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-20 w-64 h-64 bg-[#448b13]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1c4837]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 pt-28 pb-12">
          <div className="max-w-5xl">
            <ScrollAnimation animation="animate-fadeInUp">
              <p className="text-sm font-semibold text-[#448b13] mb-2 uppercase tracking-[0.15em]">
                Blog LJ Santos
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1c4837] mb-4">
                {t("blog.title")}
              </h1>
              <p className="text-lg text-gray-700 mb-6 md:mb-8 max-w-3xl">
                {t("blog.subtitle")}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="bg-white/70 border border-[#cfe1d7] text-[#1c4837] px-3 py-1 rounded-full">
                  Sustentabilidade e inovação industrial
                </span>
                <span className="bg-white/70 border border-[#cfe1d7] text-[#1c4837] px-3 py-1 rounded-full">
                  Tratamento de efluentes
                </span>
                <span className="bg-white/70 border border-[#cfe1d7] text-[#1c4837] px-3 py-1 rounded-full">
                  Operação segura e eficiente
                </span>
              </div>
            </ScrollAnimation>
          </div>

          {featuredPost && (
            <ScrollAnimation animation="animate-fadeInUp">
              <div className="mt-10 grid lg:grid-cols-5 gap-8 items-center">
                <div className="relative h-72 md:h-96 lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-[#dce8e1]">
                  <Image
                    src={getImage(featuredPost, 1400, 800)}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/5" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {featuredPost.categories?.map((cat) => (
                        <span
                          key={cat._id}
                          className="inline-flex items-center gap-1 bg-white/15 border border-white/30 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur"
                        >
                          <Tag className="w-3 h-3" /> {cat.title}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-white/80 mb-2">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {formatAuthor(featuredPost.author)}
                      </span>
                    </div>
                    <div className="bg-black/45 backdrop-blur-sm rounded-xl p-4 shadow-inner shadow-black/30">
                      <h2 className="text-2xl md:text-3xl text-white font-semibold leading-snug mb-2 drop-shadow">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/85 line-clamp-2 md:line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <p className="sr-only">
                      {formatDate(featuredPost.publishedAt)} • {formatAuthor(featuredPost.author)}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug.current}`}
                    className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-white text-[#1c4837] font-semibold px-4 py-2 rounded-full shadow"
                  >
                    {t("blog.readMore")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="lg:col-span-2 bg-white border border-[#dce8e1] rounded-2xl shadow-sm p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#448b13] mb-2">Conteúdo selecionado</p>
                    <h3 className="text-2xl font-bold text-[#1c4837] mb-3">{featuredPost.title}</h3>
                    <p className="text-gray-700 mb-6 line-clamp-4">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2 bg-[#f2f7f5] text-[#1c4837] px-3 py-2 rounded-lg">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.publishedAt)}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#f2f7f5] text-[#1c4837] px-3 py-2 rounded-lg">
                        <User className="w-4 h-4" />
                        <span>{formatAuthor(featuredPost.author)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-[#f8faf9] border border-[#e3eee8] rounded-xl p-3">
                      <p className="text-xs text-[#448b13] font-semibold mb-1">Atualizações</p>
                      <p className="text-[#1c4837]">Novas tecnologias e normas ambientais aplicadas</p>
                    </div>
                    <div className="bg-[#f8faf9] border border-[#e3eee8] rounded-xl p-3">
                      <p className="text-xs text-[#448b13] font-semibold mb-1">Aplicação</p>
                      <p className="text-[#1c4837]">Melhores práticas em operação e manutenção</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 bg-white border-t border-[#e6efe9]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollAnimation animation="animate-fadeInRight">
                <div className="sticky top-28 space-y-6">
                  <div className="bg-[#f7faf8] border border-[#dce8e1] p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-[#1c4837] mb-4">{t("blog.categories")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {[{ _id: "all", title: t("blog.all"), slug: { current: "all" } }, ...categories].map(
                        (category, index: number) => (
                          <button
                            key={category._id}
                            className={`text-sm px-3 py-2 rounded-full border transition-colors ${
                              index === 0
                                ? "bg-[#448b13] border-[#448b13] text-white"
                                : "bg-white border-[#dce8e1] text-[#1c4837] hover:border-[#448b13] hover:text-[#448b13]"
                            }`}
                            type="button"
                          >
                            {category.title}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-[#1c4837] text-white p-6 rounded-xl shadow-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] mb-2">
                      Newsletter
                    </p>
                    <h3 className="text-2xl font-bold mb-3">{t("blog.newsletter.title")}</h3>
                    <p className="text-white/80 mb-4">{t("blog.newsletter.description")}</p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder={t("blog.newsletter.placeholder")}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9fe870] placeholder:text-white/60"
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#9fe870] text-[#1c4837] font-semibold py-3 px-4 rounded-lg hover:bg-[#8ad45f] transition-colors"
                      >
                        {t("blog.newsletter.button")}
                      </button>
                    </form>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Lista de posts */}
            <div className="lg:col-span-3">
              <ScrollAnimation animation="animate-fadeInLeft">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {(remainingPosts.length === 0 ? posts : remainingPosts).length === 0 && (
                    <p className="col-span-full text-center text-gray-500">{t("blog.noPosts")}</p>
                  )}

                  {(remainingPosts.length === 0 ? posts : remainingPosts).map((post: SanityPost) => {
                    const firstCategory = post.categories?.[0]?.title
                    const img = getImage(post, 800, 500)
                    const excerpt = post.excerpt || ""
                    const authorName = formatAuthor(post.author)
                    return (
                      <div
                        key={post._id}
                        className="bg-white border border-[#e6efe9] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="relative h-48">
                          <Image
                            src={img}
                            alt={post.mainImage?.alt || post.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 40vw, 100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          {firstCategory && (
                            <div className="absolute top-4 left-4 bg-white text-[#1c4837] text-xs font-semibold py-1 px-3 rounded-full shadow">
                              {firstCategory}
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-[#1c4837] mb-3 line-clamp-2">{post.title}</h3>
                          {excerpt && <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>}
                          <div className="flex items-center text-sm text-gray-500 mb-5 gap-4 flex-wrap">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{authorName}</span>
                            </div>
                          </div>
                          <Link
                            href={`/blog/${post.slug.current}`}
                            className="inline-flex items-center text-[#448b13] font-semibold hover:text-[#1c4837] transition-colors"
                          >
                            {t("blog.readMore")} <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
