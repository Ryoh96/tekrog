import styled from 'styled-components'

import HumbuggerButton from '@/components/atoms/HumbuggerButton'
import PageContainer from '@/components/layout/PageContainer'
import Logo from '@/components/molecules/Logo'
import Gnav from '@/components/organisms/parts/header/Gnav'
import PcOnly from '@/components/utils/PcOnly'
import SpOnly from '@/components/utils/SpOnly'

const HeaderWrapper = styled.header`
  position: relative;
  top: 0;
  background: ${({ theme }) => theme.gradient.main};
  color: #fff;
  transition: 0.3s ease;
  z-index: 200;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <PageContainer>
        <HeaderContainer>
          <Logo />
          <PcOnly>
            <Gnav />
          </PcOnly>
          <SpOnly>
            <HumbuggerButton />
          </SpOnly>
        </HeaderContainer>
      </PageContainer>
    </HeaderWrapper>
  )
}

export default Header
