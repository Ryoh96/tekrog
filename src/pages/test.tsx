import styled from 'styled-components'

import Breadcrumb from '@/components/molecules/Breadcrumb'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import SideContent from '@/components/organisms/SideContent'

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
      <Breadcrumb />
      <main>
        <PageContainer>
          <TwoColumnContainer>
            <MainArea>
              <Contents />
            </MainArea>
            <SideArea>
              <SideContent title="最近の記事">
                hoge
                hoge
              </SideContent>
              <Contents />
              <Contents />
              <Contents />
            </SideArea>
          </TwoColumnContainer>
        </PageContainer>
      </main>
      <Footer />
    </>
  )
}

export default Test
