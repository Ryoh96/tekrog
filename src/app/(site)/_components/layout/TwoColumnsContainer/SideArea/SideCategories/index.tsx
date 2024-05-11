import { getClient } from '@/graphql/apollo/client'
import {
  GetCategoriesDocument,
  GetCategoriesQuery,
} from '@/graphql/generated/request'
import React from 'react'
import SideContent from '../SideContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import CategoryTags from '@/app/_components/organisms/CategoryTags'

const SideCategories = async () => {
  const { data } = await getClient().query<GetCategoriesQuery>({
    query: GetCategoriesDocument,
  })
  const url = data.categories.nodes.map((node) =>
    node.uri && node.uri.split('/').length === 5
      ? node.uri.slice(node.uri.indexOf('/', node.uri.indexOf('/') + 1))
      : node.uri,
  )

  return (
    <SideContent
      title="カテゴリー一覧"
      icon={<FontAwesomeIcon icon={faProjectDiagram} />}
    >
      {data.categories && <CategoryTags categories={data.categories.nodes} />}
    </SideContent>
  )
}

export default SideCategories
