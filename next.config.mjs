/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['vercel.com'],
    unoptimized: false,
  },
  swcMinify: true,
  poweredByHeader: false,
}

export default nextConfig
