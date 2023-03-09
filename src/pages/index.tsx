import { useEffect, useState } from 'react'
import styled from 'styled-components'

import type { TopPagePostsQuery } from '@/graphql/generated/request'
import { useTopPagePostsQuery } from '@/graphql/generated/request'

const Title = styled.h1`
  font-size: 50px;
`

export default function Home() {
  // const [items, setItems] = useState<TopPagePostsQuery>()
  // const { data, loading, error } = useTopPagePostsQuery()
  // useEffect(() => {
  //   setItems(data)
  // }, [data])

  // if (error) return <p>error</p>
  // if (loading) return <p>loading...</p>

  // return (
  //   <>
  //     <Title>Hello!</Title>
  //     {items?.posts?.edges.map(({ node }) => (
  //       <p key={node.title}>{node.title}</p>
  //     ))}
  //   </>
  // )
  return <Title>Hello</Title>
}
