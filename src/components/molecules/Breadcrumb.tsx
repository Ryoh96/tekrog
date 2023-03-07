import styled from 'styled-components'

import PageContainer from './../layout/PageContainer'

const BreadcrumbWrapper = styled.div`
  padding: 20px;
 
  @media (max-width: ${({ theme }) => theme.breakpoints.sp}) {
    padding: 14px 20px;
  }
`

const Breadcrumb = () => {
  return (
    <PageContainer>
      <BreadcrumbWrapper>hoge</BreadcrumbWrapper>
    </PageContainer>
  )
}

export default Breadcrumb
