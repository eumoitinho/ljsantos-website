"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageType {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: ImageType[]
  autoPlay?: boolean
  interval?: number
  showThumbnails?: boolean
  aspectRatio?: "square" | "video" | "wide" | "custom"
  height?: number
}

const ImageCarousel = ({
  images,
  autoPlay = false,
  interval = 5000,
  showThumbnails = false,
  aspectRatio = "square",
  height,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square"
      case "video":
        return "aspect-video"
      case "wide":
        return "aspect-[21/9]"
      case "custom":
        return ""
      default:
        return "aspect-square"
    }
  }

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!autoPlay) return

    const interval_id = setInterval(() => {
      next()
    }, interval)

    return () => clearInterval(interval_id)
  }, [autoPlay, interval, next])

  if (!images || images.length === 0) {
    return <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center">No images</div>
  }

  return (
    <div className="relative w-full">
      <div
        className={`relative overflow-hidden rounded-lg shadow-lg ${
          aspectRatio !== "custom" ? getAspectRatioClass() : ""
        }`}
        style={height ? { height: `${height}px` } : {}}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden transition-opacity ${
                index === currentIndex ? "ring-2 ring-green-600" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
