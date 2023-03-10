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
import PrevNextPager from '@/components/organisms/PrevNextPager'
import RecentPosts from '@/components/organisms/RecentPosts'
import SideTOC from '@/components/organisms/SideTOC'

import Postbody from '../components/organisms/PostBody'

const PrevNextPagerWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
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
            <Postbody />
            <PrevNextPagerWrapper>
              <PrevNextPager
                mode="prev"
                imgUrl="/thumb.jpg"
                title="Themeの使い方～TypeScriptでstyled-components〜"
              />
              <PrevNextPager
                mode="next"
                imgUrl="/thumb.jpg"
                title="Themeの使い方～TypeScriptでstyled-components〜"
              />
            </PrevNextPagerWrapper>
          </MainArea>
          <SideArea>
            <SearchForm />
            <RecentPosts />
            <Category />
            <Archive />
            <SideTOC />
          </SideArea>
        </TwoColumnContainer>
      </PageContainer>
      <Footer />
    </>
  )
}

export default Test
