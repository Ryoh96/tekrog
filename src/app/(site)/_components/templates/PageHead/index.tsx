'use client'

import { cat2Name } from '@/app/_utils/cat2name'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import PageTitle from './PageTitle'
import PostPageTitle from './PostPageTitle'

const PageHead = () => {
  const pathname = usePathname()
  const paths = pathname.split('/')
  const searchParams = useSearchParams().get('s') ?? undefined

  let title: string | null = null

  if (pathname === '/') {
    title = '記事一覧'
  } else if (paths[1] === 'page' && paths[2]) {
    title = `記事一覧(${paths[2]}ページ目)`
  } else if (paths[1] === 'category') {
    if (paths[2] === undefined) {
      title = 'カテゴリー一覧'
    } else {
      const categoryName = cat2Name[paths[2]] ?? undefined
      if (categoryName) {
        if (!paths[3]) {
          title = `${categoryName}の記事一覧`
        } else if (paths[3] === 'page' && paths[4]) {
          title = `${categoryName}の記事一覧(${paths[4]}ページ目)`
        }
      } else {
        title = 'ページが見つかりません'
      }
    }
  } else if (paths[1] === 'archive' && paths[2] && paths[3]) {
    title = `${paths[2]}年${paths[3]}月のアーカイブ`
  } else if (paths[1] === 'search' && searchParams) {
    title = `『${searchParams}』の検索結果`
  } else {
    title = null
  }

  return (
    <>
      {title !== null ? (
        <PageTitle title={title} />
      ) : (
        <PostPageTitle pathname={pathname} />
      )}
    </>
  )
}

export default PageHead
