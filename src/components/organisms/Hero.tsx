import Image from 'next/image'
import styled from 'styled-components'

import Logo from '@/images/logo.png'

const HeroWrapper = styled.div`
  background-color: #ccc;
  font-family: Titillium Web, sans-serif;
  position: relative;
  font-weight: 400;
  background: ${({ theme }) => theme.gradient.main};
  color: #fff;
  overflow: hidden;
  padding-block: 50px;
  text-align: center;

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

const TitleImage = styled(Image)`
  position: relative;
  z-index: 10;
`

const Text = styled.p`
  font-size: 16px;
  min-height: 0;
  text-shadow: 1px 1px 5px #000;
  position: relative;
  z-index: 10;
  margin-block-start: 10px;
`

const Hero = () => {
  return (
    <HeroWrapper>
      <TitleImage src={Logo} alt="TekRog" width={168}/>
      <Text>プログラミングの備忘録と情報発信</Text>
    </HeroWrapper>
  )
}

export default Hero
