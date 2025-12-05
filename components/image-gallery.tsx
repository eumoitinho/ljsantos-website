"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export default function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // Prevenir propagação de eventos para evitar fechamento indesejado
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className={`${className}`}>
      <div className="flex flex-wrap gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer rounded-md overflow-hidden border-2 border-transparent hover:border-[#448b13] transition-all duration-200 group"
            onClick={() => openModal(index)}
          >
            <div className="relative w-20 h-20">
              <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="80px" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                <ZoomIn
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  size={20}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de visualização */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full mx-auto rounded-xl overflow-hidden bg-transparent"
            onClick={handleModalContentClick}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                priority
              />
            </div>

            {/* Navegação */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              aria-label={images[currentIndex].alt}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Contador de imagens */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Botão fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
