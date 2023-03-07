import styled from 'styled-components'

import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'

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
    <>
      <Header />
      <Hero />
      <main>
        <PageContainer>
          <TwoColumnContainer>
            <MainArea>
              <Contents />
            </MainArea>
            <SideArea>
              <Contents />
            </SideArea>
          </TwoColumnContainer>
        </PageContainer>
      </main>
    </>
  )
}

export default Test
