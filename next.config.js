/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [process.env.HOST , "www.google.com", "s.wordpress.com"],
  },
}

module.exports = nextConfig
