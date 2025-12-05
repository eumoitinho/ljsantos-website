import { NextResponse } from "next/server"

// Force dynamic rendering for this API route
export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  try {
    // Get user's IP address
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown"

    // Detect language from Accept-Language header
    const acceptLanguage = request.headers.get("accept-language") || ""

    let detectedLanguage = "pt-BR" // Default to Portuguese

    // Parse Accept-Language header
    if (acceptLanguage) {
      const languages = acceptLanguage.split(",").map((lang) => {
        const parts = lang.trim().split(";")
        return parts[0]
      })

      // Check for Spanish
      if (languages.some((lang) => lang.startsWith("es"))) {
        detectedLanguage = "es-ES"
      }
      // Check for English
      else if (languages.some((lang) => lang.startsWith("en"))) {
        detectedLanguage = "en-US"
      }
      // Check for Portuguese (default)
      else if (languages.some((lang) => lang.startsWith("pt"))) {
        detectedLanguage = "pt-BR"
      }
    }

    // Optional: Use IP geolocation service for more accurate detection
    // For now, we rely on Accept-Language header which is more reliable

    return NextResponse.json({
      language: detectedLanguage,
      ip: ip !== "unknown" ? ip : null,
      acceptLanguage,
    })
  } catch (error) {
    console.error("Error detecting language:", error)
    return NextResponse.json(
      {
        language: "pt-BR", // Fallback to Portuguese
        error: "Detection failed",
      },
      { status: 200 }
    )
  }
}
