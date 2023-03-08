import Image from 'next/image'
import styled from 'styled-components'

import Logo from '@/images/logo.png'

type BlogNameProps = {
  large: number
  small: number
}

const BlogNameImage = styled(Image)`
  position: relative;
  z-index: 10;
`
const Container = styled.div<BlogNameProps>`
  margin-inline: auto;
  margin-block-start: 0.2em;
  width: ${(props) => props.large}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    width: ${(props) => props.small}px;
  }
`

const BlogName = (props: BlogNameProps) => {
  return (
    <Container {...props}>
      <BlogNameImage
        src={Logo}
        alt="Tekrog"
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </Container>
  )
}

export default BlogName
