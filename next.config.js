/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      // Add any other image domains you might use
      {
        protocol: 'https',
        hostname: 'placekitten.com', // Alternative placeholder service
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Another alternative
      }
    ],
  },
}

module.exports = nextConfig 