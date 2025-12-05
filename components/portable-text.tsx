'use client'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import {urlFor} from '@/lib/sanity'

const components: any = {
  types: {
  image: ({value}: {value: any}) => {
      if (!value?.asset?._ref) return null
      const url = urlFor(value).width(800).url()
      return (
        <div className="my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={value.alt || ''} className="rounded-lg mx-auto" />
        </div>
      )
    },
  },
  block: {
    h1: ({children}: {children: React.ReactNode}) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({children}: {children: React.ReactNode}) => <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>,
    h3: ({children}: {children: React.ReactNode}) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
    normal: ({children}: {children: React.ReactNode}) => <p className="my-4 leading-relaxed text-gray-700">{children}</p>,
  },
  list: {
    bullet: ({children}: {children: React.ReactNode}) => <ul className="list-disc ml-6 space-y-2">{children}</ul>,
    number: ({children}: {children: React.ReactNode}) => <ol className="list-decimal ml-6 space-y-2">{children}</ol>,
  },
}

export default function PortableTextRenderer({value}: {value: any[]}) {
  return <PortableText value={value} components={components} />
}
