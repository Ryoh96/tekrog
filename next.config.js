/** @type {import('next').NextConfig} */
const path = require('path')
const stylexPlugin = require('@stylexjs/nextjs-plugin')

module.exports = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})({
  images: {
    domains: ['xs363422.xsrv.jp', 'www.google.com', 's.wordpress.com'],
  },
})
