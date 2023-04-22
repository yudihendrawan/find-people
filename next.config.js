/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // domains: ['avatars.githubusercontent.com', 'res.cloudinary.com']
  }
}


module.exports = nextConfig
