"use client"

import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { SanityPost, urlFor } from "@/lib/sanity"
import { useTranslation } from "@/lib/i18n"

interface BlogClientProps {
  posts: SanityPost[]
  categories: { _id: string; title: string; slug: { current: string } }[]
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Section */}
                 <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#f2f7f5] to-white">

        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <ScrollAnimation animation="animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl font-bold text-[#435a52] mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                {t('blog.subtitle')}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollAnimation animation="animate-fadeInRight">
                <div className="sticky top-32">
                  <div className="bg-[#f2f7f5] p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-bold text-[#435a52] mb-4">
                      {t('blog.categories')}
                    </h3>
                    <ul className="space-y-2">
                      {[{ _id: 'all', title: t('blog.all'), slug: { current: 'all' } }, ...categories].map(
                        (category, index: number) => (
                          <li key={category._id}>
                            <a
                              href="#"
                              className={`block py-2 px-3 rounded-lg transition-colors ${
                                index === 0
                                  ? "bg-[#448b13] text-white"
                                  : "hover:bg-[#e6f0eb] text-[#435a52] hover:text-[#448b13]"
                              }`}
                            >
                              {category.title}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="bg-[#f2f7f5] p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-[#435a52] mb-4">
                      {t('blog.newsletter.title')}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {t('blog.newsletter.description')}
                    </p>
                    <form>
                      <input
                        type="email"
                        placeholder={t('blog.newsletter.placeholder')}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#448b13]"
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#448b13] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#3a7510] transition-colors"
                      >
                        {t('blog.newsletter.button')}
                      </button>
                    </form>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <ScrollAnimation animation="animate-fadeInLeft">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {posts.length === 0 && (
                    <p className="col-span-full text-center text-gray-500">
                      {t('blog.noPosts')}
                    </p>
                  )}
                  {posts.map((post: SanityPost) => {
                    const firstCategory = post.categories?.[0]?.title
                    const img = post.mainImage
                      ? urlFor(post.mainImage).width(600).height(300).fit('crop').url()
                      : '/placeholder.svg'
                    const excerpt = post.excerpt || ''
                    return (
                      <div
                        key={post._id}
                        className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="relative h-48 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          {firstCategory && (
                            <div className="absolute top-4 left-4 bg-[#448b13] text-white text-xs font-semibold py-1 px-2 rounded">
                              {firstCategory}
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-[#435a52] mb-3 line-clamp-2">
                            {post.title}
                          </h3>
                          {excerpt && <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>}
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <div className="flex items-center mr-4">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>
                                {post.publishedAt
                                  ? new Date(post.publishedAt).toLocaleDateString('pt-BR')
                                  : ''}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author || '—'}</span>
                            </div>
                          </div>
                          <Link
                            href={`/blog/${post.slug.current}`}
                            className="inline-flex items-center text-[#448b13] font-semibold hover:text-[#3a7510] transition-colors"
                          >
                            {t('blog.readMore')} <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <a
                      href="#"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {t('blog.pagination.previous')}
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 border border-gray-300 rounded-lg bg-[#448b13] text-white hover:bg-[#3a7510] transition-colors"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      3
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {t('blog.pagination.next')}
                    </a>
                  </nav>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
