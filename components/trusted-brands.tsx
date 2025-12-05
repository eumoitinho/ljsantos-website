"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import ScrollAnimation from "@/components/scroll-animation"

const brands = [
  { name: "Copacol", logo: "/brands/copacol.png" },
  { name: "Benteler", logo: "/brands/benteler.png" },
  { name: "Facchini", logo: "/brands/facchini.png" },
  { name: "Randon", logo: "/brands/randon.png" },
  { name: "Erzinger", logo: "/brands/erzinger.png" },
  { name: "Mahle", logo: "/brands/mahle.png" },
  { name: "AGI", logo: "/brands/agi.png" },
  { name: "Librelato", logo: "/brands/librelato.png" },
  { name: "Magna Internacional", logo: "/brands/magna.png" },
  { name: "Camaco", logo: "/brands/camaco.png" },
  { name: "Daikin", logo: "/brands/daikin.png" },
  { name: "Sense Bike", logo: "/brands/sense-bike.png" },
]

const TrustedBrands = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const itemsPerSlide = 4
  const totalSlides = Math.ceil(brands.length / itemsPerSlide)

  // Auto-scroll the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [totalSlides])

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Handle next and previous
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  return (
    <section className="py-12 bg-[#0e3b7c]">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="animate-fadeInUp">
          <div className="text-center mb-8">
            <p className="text-white text-xl font-medium">Marcas que confiam</p>
          </div>
        </ScrollAnimation>

        <div className="relative overflow-hidden">
          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
                {brands.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((brand, brandIndex) => (
                  <div key={brandIndex} className="flex items-center justify-center">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={150}
                      height={60}
                      className="max-h-14 w-auto filter brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-white" : "bg-white/40"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBrands
