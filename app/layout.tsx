import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Outfit, Poppins, Open_Sans } from "next/font/google"
import Script from "next/script"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { LanguageProvider } from "@/lib/i18n"
import { Analytics } from "@vercel/analytics/next"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "LJ Santos - Sustainable Industrial Solutions",
  description:
    "For over 25 years, LJ Santos has been developing sustainable industrial solutions with proven quality and reliability. Wastewater treatment stations, polypropylene tanks, filter press, electrolytic galvanizing and chrome plating.",
  keywords:
    "wastewater treatment, polypropylene tanks, filter press, electrolytic galvanizing, chrome plating, industrial solutions, sustainability, effluent treatment, industrial tanks, electroplating",
  generator: "Next.js",
  applicationName: "LJ Santos",
  authors: [{ name: "LJ Santos", url: "https://ljsantos.com" }],
  creator: "LJ Santos",
  publisher: "LJ Santos",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://ljsantos.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
      "pt-BR": "/",
    },
  },
  openGraph: {
    title: "LJ Santos - Sustainable Industrial Solutions",
    description: "Sustainable industrial solutions with proven quality and reliability",
    url: "https://ljsantos.com",
    siteName: "LJ Santos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LJ Santos - Sustainable Industrial Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LJ Santos - Sustainable Industrial Solutions",
    description: "Sustainable industrial solutions with proven quality and reliability",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Curitiba" />
      </head>
      <body className={`${outfit.variable} ${poppins.variable} ${openSans.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KM7SXND6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LanguageProvider>
        <Analytics />
          <main>{children}</main>
          <Footer />
          
        </LanguageProvider>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KM7SXND6');
            `,
          }}
        />
        <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/6d09221f-1225-47a6-87f1-c3ee5e7ec4d7-loader.js" ></script>

      </body>
    </html>
  )
}
