/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/pqgw24nd3/**',
        search: '',
      },
    ],
    domains: ['ik.imagekit.io'],
  },
}

module.exports = nextConfig