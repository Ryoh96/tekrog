import { Inter } from 'next/font/google'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
`

export default function Home() {
  return (
    <>
      <Title>Hello!</Title>
    </>
  )
}
