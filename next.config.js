/** @type {import('next').NextConfig} */
const nextConfig = {
  exclude: ["src/graphql"],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [process.env.HOST , "www.google.com", "s.wordpress.com"],
  },

}

module.exports = nextConfig
