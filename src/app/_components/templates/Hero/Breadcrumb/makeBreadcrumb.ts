import { cat2Name } from '@/app/_utils/cat2name'

export const makeBreadcrumb = (
  pathname: string,
  title?: string,
  searchParams?: string,
) => {
  const list = [{ name: 'ホーム', href: '/' }]
  const notFound = [...list, { name: 'ページが見つかりません', href: '#' }]
  const paths = pathname.split('/')

  if (paths[1].length === 0) {
    return list
  } else if (paths[1] === 'page' && paths[2]) {
    return [...list, { name: `記事一覧(${paths[2]}ページ目)`, href: pathname }]
  } else if (paths[1] === 'about') {
    return [...list, { name: 'このブログについて', href: pathname }]
  } else if (paths[1] === 'privacy-policy') {
    return [...list, { name: 'プライバシーポリシー', href: pathname }]
  } else if (paths[1] === 'category') {
    const categoryBread = { name: 'カテゴリー一覧', href: `/${paths[1]}` }
    const categoryName = paths[2] ?? undefined
    if (paths[2] === undefined) {
      return [...list, categoryBread]
    } else {
      const name = cat2Name[categoryName]
      if (!name) return notFound
      else
        return [
          ...list,
          categoryBread,
          { name: cat2Name[categoryName] + 'の記事一覧', href: categoryName },
        ]
    }
  } else if (paths[1] === 'archive' && paths[2] && paths[3]) {
    return [
      ...list,
      { name: `${paths[2]}年${paths[3]}月のアーカイブ`, href: pathname },
    ]
  } else if (paths[1] === 'search' && searchParams) {
    return [...list, { name: `『${searchParams}』の検索結果`, href: pathname }]
  } else if (paths[1] === 'contact') {
    return [...list, { name: `お問い合わせ`, href: pathname }]
  } else if (title) {
    return [...list, { name: title, href: pathname }] as {
      name: string
      href: string
    }[]
  }

  return notFound
}
