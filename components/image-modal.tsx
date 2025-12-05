"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  const [mounted, setMounted] = useState(false)

  // Evita problemas de hidratação com o Next.js
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative max-w-4xl w-full mx-auto rounded-xl overflow-hidden bg-white shadow-2xl">
        <div className="relative aspect-video w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            priority
          />
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  )
}
