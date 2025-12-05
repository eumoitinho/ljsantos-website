import {fetchPostBySlug, fetchPosts} from '@/lib/sanity'
import PortableTextRenderer from '@/components/portable-text'
import Header2 from '@/components/header2'
import {notFound} from 'next/navigation'
import {Calendar, User} from 'lucide-react'

interface Params { slug: string }

export async function generateStaticParams() {
  const posts = await fetchPosts(50)
  return posts.map((p: any) => ({slug: p.slug.current}))
}

export default async function BlogPostPage({params}: {params: Params}) {
  const post = await fetchPostBySlug(params.slug)
  if (!post) return notFound()
  return (
    <main className="flex min-h-screen flex-col">
      <Header2 />
      <article className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold text-[#435a52] mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-8">
            {post.publishedAt && (
              <div className="flex items-center mr-4"><Calendar className="w-4 h-4 mr-1" />{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</div>
            )}
            {post.author && (
              <div className="flex items-center"><User className="w-4 h-4 mr-1" />{post.author}</div>
            )}
          </div>
          {post.body && <PortableTextRenderer value={post.body} />}
        </div>
      </article>
    </main>
  )
}
