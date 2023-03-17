module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'prismjs',
      {
        languages: [
          'javascript',
          'scss',
          'sass',
          'html',
          'css',
          'typescript',
          'tsx',
          'python',
          'php',
          'graphql',
        ],
        plugins: ['line-numbers', 'copy-to-clipboard'],
        theme: 'tomorrow',
        css: true,
      },
    ],
    ['styled-components'],
  ],
}
