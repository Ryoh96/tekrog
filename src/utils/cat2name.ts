import { invertObject } from './invertObject'

// カテゴリ名前 to WordPressのカテゴリ名
export const cat2Name: Record<string, string> = {
  appli: 'アプリ',
  css: 'CSS',
  html: 'HTML',
  javascript: 'JavaScript',
  laravel: 'Laravel',
  math: '数学',
  news: 'お知らせ',
  php: 'PHP',
  python: 'Python',
  react: 'React',
  sass: 'Sass',
  typescript: 'TypeScript',
  vuejs: 'Vue.js',
  wordpress: 'WordPress',
  graphql: 'GraphQL',
}

export const name2Cat: Record<string, string> = invertObject(cat2Name)
