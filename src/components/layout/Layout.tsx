import type { ReactNode } from 'react'
import styled from 'styled-components'

import PageTopButton from '@/components/atoms/PageTopButton'
import MainArea from '@/components/layout/MainArea'
import PageContainer from '@/components/layout/PageContainer'
import SideArea from '@/components/layout/SideArea'
import TwoColumnContainer from '@/components/layout/TwoColumnsContainer'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import SearchForm from '@/components/molecules/SearchForm'
import GoogleAdsense from '@/components/organisms/adsense/GoogleAdsense'
import Footer from '@/components/organisms/parts/footer/Footer'
import Header from '@/components/organisms/parts/header/Header'
import Hero from '@/components/organisms/parts/header/Hero'
import SideArchive from '@/components/organisms/parts/side/SideArchive'
import SideCategory from '@/components/organisms/parts/side/SideCategory'
import SideRecentPosts from '@/components/organisms/parts/side/SideRecentPosts'
import SideTOC from '@/components/organisms/parts/side/SideTOC'

import Meta from '../organisms/parts/meta/Meta'
import PcOnly from '../utils/PcOnly'
import SpOnly from '../utils/SpOnly'

const PageTopButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 10;
`

type LayoutProps = {
  children: ReactNode
  data: any
  breadcrumbList: { name: string; href: string }[]
  isPostPage?: boolean
  meta?: {
    title?: string
    desc?: string
    url?: string
    imgUrl?: string
  }
}

const Layout = ({
  children,
  data,
  breadcrumbList,
  isPostPage = false,
  meta,
}: LayoutProps) => {
  return (
    <>
      <Meta {...meta} />
      <Header />
      <Hero />
      <Breadcrumb breadcrumbList={breadcrumbList} />
      <PageContainer>
        <TwoColumnContainer>
          <MainArea>{children}</MainArea>
          <SideArea>
            <SearchForm />
            <SideRecentPosts posts={data.recentPost} />
            <GoogleAdsense
              style={{
                display: 'inline-block',
                width: '324px',
                height: '270px',
              }}
              slot="6447253650"
            />
            <SideCategory categories={data.categories} />
            <SideArchive posts={data.archivePosts} />
            {isPostPage && <SideTOC key={breadcrumbList.at(-1)?.name} />}
            <GoogleAdsense
              style={{
                display: 'inline-block',
                width: '324px',
                height: '270px',
              }}
              slot="6447253650"
            />
          </SideArea>
        </TwoColumnContainer>
      </PageContainer>
      <SpOnly>
        <PageTopButtonWrapper>
          <PageTopButton />
        </PageTopButtonWrapper>
      </SpOnly>
      <Footer />
    </>
  )
}

export default Layout
