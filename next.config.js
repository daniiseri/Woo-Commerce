/** @type {import('next').NextConfig} */
const hostname = new URL(process.env.NEXT_PUBLIC_BACKEND_SITE_URL).hostname
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname
      },
    ],
  },
}

module.exports = nextConfig
