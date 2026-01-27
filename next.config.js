/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/website',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
