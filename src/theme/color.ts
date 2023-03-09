import type { CategoryType } from '@/types/CategoryType'
import type { ShareType } from '@/types/ShareType'

const color: {
  category: Record<CategoryType, `#${string}`>
  share: Record<ShareType, `#${string}`>
} = {
  category: {
    javascript: '#f9bb2b',
    html: '#f98343',
    typescript: '#2475ba',
    vuejs: '#4db49f',
    css: '#4779ed',
    python: '#d6cc02',
    wordpress: '#1f6f93',
    react: '#5acbe8',
    laravel: '#f28c8e',
    sass: '#ed87c0',
    appli: '#555',
    php: '#7f80be',
    math: '#9261a7',
    news: '#a4ca66',
  },
  share: {
    twitter: '#1e9af0',
    facebook: '#3b5998',
    'get-pocket': '#ef4156',
    line: '#05c756',
    hatena: '#029dd4',
  },
}

export default color
