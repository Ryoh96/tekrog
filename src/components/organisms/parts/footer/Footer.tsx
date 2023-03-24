import styled from 'styled-components'

import PageContainer from '@/components/layout/PageContainer'
import Fnav from '@/components/organisms/parts/footer/Fnav'

const FooterWrapper = styled.footer`
  padding-block: 20px 50px;
  background: ${({ theme }) => theme.gradient.main};
  color: #fff;
  text-align: center;
`

const FooterContainer = styled.div`
  display: grid;
  gap: 20px;
  place-content: center;
`

const Copy = styled.p`
  font-size: 12px;
`

const Footer = () => {
  return (
    <FooterWrapper data-testid="footer">
      <PageContainer>
        <FooterContainer>
          <Fnav />
          <Copy>copyright ©︎ 2021-2023 TeKRog All Rights Reserved.</Copy>
        </FooterContainer>
      </PageContainer>
    </FooterWrapper>
  )
}

export default Footer
