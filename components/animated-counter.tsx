"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  const animateCount = () => {
    const startTime = Date.now()
    const startValue = 0

    const step = () => {
      const currentTime = Date.now()
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smoother animation
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      const currentCount = Math.floor(startValue + easedProgress * (end - startValue))
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
