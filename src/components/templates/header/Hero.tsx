import type { ReactNode } from 'react'
import styled from 'styled-components'

import BlogName from '@/components/atoms/BlogName'
import Gear from '@/components/atoms/Gear'
import PageContainer from '@/components/layout/PageContainer'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import Gear1 from '@/images/gear01.svg'
import Gear2 from '@/images/gear02.svg'
import Gear3 from '@/images/gear03.svg'
import Gear4 from '@/images/gear04.svg'
import Gear5 from '@/images/gear05.svg'
import Gear6 from '@/images/gear13.svg'

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 34px;
`

const HeroContainer = styled.div`
  background-color: #ccc;
  font-family: Titillium Web, sans-serif;
  position: relative;
  font-weight: 400;
  background: ${({ theme }) => theme.gradient.main};
  color: #fff;
  overflow: hidden;
  padding-block: 50px;
  text-align: center;
  z-index: -2;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    padding-block: clamp(36px, 6.5vw, 50px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 3;
  }
`

const Text = styled.p`
  font-size: 16px;
  min-height: 0;
  text-shadow: 1px 1px 5px #000;
  position: relative;
  z-index: 10;
  margin-block-start: 10px;
  padding-bottom: 20px;

  @media (max-width: 767px) {
    font-size: clamp(14px, 2vw, 16px);
    min-height: 0;
  }
`

const BreadcrumbWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #0006;
`

type Props = {
  content?: ReactNode
  breadcrumbList: { name: string; href: string }[]
}

const Hero = ({
  content = (
    <HeroContainer>
      <PageContainer>
        <BlogName large={168} small={130} />
        <Text>プログラミングの備忘録と情報発信</Text>
      </PageContainer>
    </HeroContainer>
  ),
  breadcrumbList,
}: Props) => {
  return (
    <Wrapper>
      <Gear src={Gear1} width={200} height={200} bottom={-130} left={0} />
      <Gear src={Gear2} width={300} height={300} top={-160} left={200} />
      <Gear src={Gear3} width={120} height={120} top={30} right={300} />
      <Gear src={Gear4} width={100} height={100} top={-20} left={60} />
      <Gear src={Gear5} width={260} height={260} top={0} right={20} />
      <Gear src={Gear6} width={200} height={360} top={10} right={400} />
      {content}
      <BreadcrumbWrapper>
        <Breadcrumb breadcrumbList={breadcrumbList} />
      </BreadcrumbWrapper>
    </Wrapper>
  )
}

export default Hero
