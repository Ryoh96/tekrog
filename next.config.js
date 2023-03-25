/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['xs363422.xsrv.jp', 'www.google.com', 's.wordpress.com'],
  },
}

module.exports = nextConfig
