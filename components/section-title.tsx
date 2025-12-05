import type React from "react"

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false, className = "" }) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
