import Image from 'next/image'
import styled from 'styled-components'

import Logo from '@/images/logo.png'

type BlogNameProps = {
  width: number
}

const BlogNameImage = styled(Image)`
  position: relative;
  z-index: 10;
`
const BlogName = ({ width }: BlogNameProps) => {
  return <BlogNameImage src={Logo} alt="Tekrog" width={width} />
}

export default BlogName
