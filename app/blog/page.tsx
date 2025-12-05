import { fetchPosts, fetchCategories } from "@/lib/sanity"
import Header2 from "@/components/header2"
import BlogClient from "./BlogClient"

export const revalidate = 120 // revalida a cada 2 minutos (ajuste conforme necessidade)

export default async function Blog() {
  const [posts, categories] = await Promise.all([fetchPosts(20), fetchCategories()])

  return (
    <main className="flex min-h-screen flex-col">
      <Header2 />
      <BlogClient posts={posts} categories={categories} />
    </main>
  )
}
