import styled from 'styled-components'

import MainArea from '@/components/layout/MainArea'
import PageContainer from '@/components/layout/PageContainer'
import SideArea from '@/components/layout/SideArea'
import TwoColumnContainer from '@/components/layout/TwoColumnsContainer'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import SearchForm from '@/components/molecules/SearchForm'
import Archive from '@/components/organisms/Archive'
import Category from '@/components/organisms/Category'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import RecentPosts from '@/components/organisms/RecentPosts'

const Contents = styled.div`
  width: 100%;
  height: 300px;
  background-color: tomato;
`

const Test = () => {
  return (
    <>
      <Header />
      <Hero />
      <Breadcrumb />
      <PageContainer>
        <TwoColumnContainer>
          <MainArea>
            <main>
              <Contents />
            </main>
          </MainArea>
          <SideArea as="aside">
            <SearchForm />
            <RecentPosts />
            <Category />
            <Archive />
          </SideArea>
        </TwoColumnContainer>
      </PageContainer>
      <Footer />
    </>
  )
}

export default Test
