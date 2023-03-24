import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Icon from '@/images/gear-kr-nb.svg'

import BlogName from './../atoms/BlogName'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;
  gap: 10px;

  &:hover,
  &:focus {
    transform: scale(1.1);

    > *:first-child {
      transition: transform 0.3s;
      transform: rotate(180deg);
    }
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <LogoWrapper data-testid="logo">
        <Image src={Icon} width={50} height={50} alt="" />
        <BlogName large={90} small={80} />
      </LogoWrapper>
    </Link>
  )
}

export default Logo
