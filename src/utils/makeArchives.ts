import type { Post } from '@/graphql/generated/graphql'

const makeArchives = (post: Partial<Post>) => {
  //@ts-ignore
  const date = post.edges.map((edge) => edge.node.date.slice(0, 7))
  const yearMonth = new Set<string>(date)

  const archives: string[] = []
  for (const ym of yearMonth) {
    archives.push(ym.replace('-', '年') + '月')
  }

  return archives
}

export default makeArchives