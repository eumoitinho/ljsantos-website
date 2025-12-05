import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {projectId, dataset, apiVersion} from '../sanity/projectDetails'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published'
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => builder.image(source)

export interface SanityPost {
  _id: string
  title: string
  slug: {current: string}
  excerpt?: string
  mainImage?: any
  author?: string
  categories?: { _id: string; title: string; slug?: {current: string} }[]
  publishedAt?: string
  body?: any[]
  language?: string
}

export async function fetchPosts(limit = 12) {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...$limit]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    categories[]->{_id, title, slug}
  }`
  return await sanityClient.fetch<SanityPost[]>(query, {limit})
}

export async function fetchPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    categories[]->{_id, title, slug},
    body
  }`
  return await sanityClient.fetch<SanityPost | null>(query, {slug})
}

export async function fetchCategories() {
  const query = `*[_type == "category"]{_id, title, slug}`
  return await sanityClient.fetch<{_id: string; title: string; slug: {current: string}}[]>(query)
}
