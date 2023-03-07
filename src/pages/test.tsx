import styled from 'styled-components'

import MainArea from '../components/layout/MainArea'
import PageContainer from '../components/layout/PageContainer'
import SideArea from '../components/layout/SideArea'
import TwoColumnContainer from '../components/layout/TwoColumnsContainer'

const Contents = styled.div`
  width: 100%;
  height: 500px;
  background-color: tomato;
  
`

const Test = () => {
  return (
    <PageContainer>
      <TwoColumnContainer>
        <MainArea>
          <Contents/>
        </MainArea>
        <SideArea>
          <Contents />
        </SideArea>
      </TwoColumnContainer>
    </PageContainer>
  )
}

export default Test
