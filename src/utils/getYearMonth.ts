import type { Post } from '@/graphql/generated/graphql'

const getYearMonth = (post: Partial<Post>) => {
  //@ts-ignore
  const date = post.edges.map((edge) => edge.node.date.slice(0, 7))
  const yearMonthSet = new Set<string>(date)

  const yearMonthList: [string, string][] = []
  for (const ym of yearMonthSet) {
    yearMonthList.push(ym.split('-') as [string, string])
  }

  return yearMonthList
}

export default getYearMonth
