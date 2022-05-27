/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['josueportfolioimages.s3.amazonaws.com'],
  }
}

module.exports = nextConfig
