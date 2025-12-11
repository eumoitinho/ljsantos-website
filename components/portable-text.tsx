'use client'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import {urlFor} from '@/lib/sanity'

const toEmbedUrl = (url: string) => {
  if (!url) return ''
  const youtube = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/)
  if (youtube?.[1]) return `https://www.youtube.com/embed/${youtube[1]}`
  const vimeo = url.match(/vimeo\.com\/(\d+)/)
  if (vimeo?.[1]) return `https://player.vimeo.com/video/${vimeo[1]}`
  return url
}

const components: any = {
  types: {
    image: ({value}: {value: any}) => {
      if (!value?.asset?._ref) return null
      const url = urlFor(value).width(1000).url()
      return (
        <div className="my-8">
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image src={url} alt={value.alt || ''} fill className="object-cover" sizes="100vw" />
          </div>
          {value.caption && <p className="text-sm text-center text-gray-500 mt-3">{value.caption}</p>}
        </div>
      )
    },
    callout: ({value}: {value: any}) => {
      const tones: Record<string, string> = {
        info: 'bg-[#f2f7f5] border-[#cfe1d7] text-[#1c4837]',
        success: 'bg-[#ecf9ef] border-[#b8e4c3] text-[#1c4837]',
        warning: 'bg-[#fff8e6] border-[#f6d89b] text-[#6b4d1c]',
      }
      const tone = tones[value?.tone] || tones.info
      return (
        <div className={`my-6 border rounded-xl px-5 py-4 ${tone}`}>
          {value.title && <p className="font-semibold mb-1">{value.title}</p>}
          <p className="text-sm leading-relaxed">{value.body}</p>
        </div>
      )
    },
    video: ({value}: {value: any}) => {
      if (!value?.url) return null
      const embed = toEmbedUrl(value.url)
      return (
        <div className="my-6">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-lg border border-[#e6efe9]">
            <iframe
              src={embed}
              title={value.caption || 'Vídeo incorporado'}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {value.caption && <p className="text-sm text-center text-gray-500 mt-2">{value.caption}</p>}
        </div>
      )
    },
    divider: () => <hr className="my-8 border-gray-200" />,
    code: ({value}: {value: any}) => (
      <pre className="bg-[#0f172a] text-white text-sm p-4 rounded-xl overflow-x-auto my-6">
        <code>{value.code}</code>
      </pre>
    ),
    codeBlock: ({value}: {value: any}) => (
      <pre className="bg-[#0f172a] text-white text-sm p-4 rounded-xl overflow-x-auto my-6">
        <code>{value.code}</code>
      </pre>
    ),
    embed: ({value}: {value: any}) => {
      if (!value?.url) return null
      return (
        <div className="my-6 aspect-video">
          <iframe
            src={value.url}
            title={value.title || 'Conteúdo incorporado'}
            className="w-full h-full rounded-xl border border-[#e6efe9]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )
    },
  },
  block: {
    h1: ({children}: {children: React.ReactNode}) => <h1 className="text-3xl font-bold mt-10 mb-4 text-[#1c4837]">{children}</h1>,
    h2: ({children}: {children: React.ReactNode}) => <h2 className="text-2xl font-semibold mt-8 mb-3 text-[#1c4837]">{children}</h2>,
    h3: ({children}: {children: React.ReactNode}) => <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1c4837]">{children}</h3>,
    h4: ({children}: {children: React.ReactNode}) => <h4 className="text-lg font-semibold mt-5 mb-3 text-[#1c4837]">{children}</h4>,
    blockquote: ({children}: {children: React.ReactNode}) => (
      <blockquote className="border-l-4 border-[#448b13] pl-4 italic text-[#1c4837] my-6">{children}</blockquote>
    ),
    normal: ({children}: {children: React.ReactNode}) => <p className="my-4 leading-relaxed text-gray-700">{children}</p>,
  },
  marks: {
    link: ({children, value}: {children: React.ReactNode; value: any}) => (
      <a
        href={value.href}
        target={value?.blank || value?.newTab ? '_blank' : '_self'}
        rel={value?.blank || value?.newTab ? 'noreferrer noopener' : undefined}
        className="text-[#448b13] font-semibold underline decoration-2 underline-offset-4 hover:text-[#1c4837]"
      >
        {children}
      </a>
    ),
    highlight: ({children}: {children: React.ReactNode}) => (
      <span className="bg-[#e5f3ed] text-[#1c4837] px-1 rounded">{children}</span>
    ),
    code: ({children}: {children: React.ReactNode}) => (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm">{children}</code>
    ),
    underline: ({children}: {children: React.ReactNode}) => <span className="underline">{children}</span>,
  },
  list: {
    bullet: ({children}: {children: React.ReactNode}) => <ul className="list-disc ml-6 space-y-2 text-gray-700">{children}</ul>,
    number: ({children}: {children: React.ReactNode}) => <ol className="list-decimal ml-6 space-y-2 text-gray-700">{children}</ol>,
  },
}

export default function PortableTextRenderer({value}: {value: any[]}) {
  return <PortableText value={value} components={components} />
}
