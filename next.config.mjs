/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['ljsantos.com', 'ljsantos2.websiteseguro.com'],
    unoptimized: true,
  },
  // Disable static generation to avoid window reference errors
  experimental: {
    // This prevents Next.js from trying to statically generate pages with client-side code
    appDocumentPreloading: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
