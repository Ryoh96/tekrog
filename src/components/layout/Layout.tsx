import type { ReactNode } from 'react'
import styled from 'styled-components'

import PageTopButton from '@/components/atoms/PageTopButton'
import MainArea from '@/components/layout/MainArea'
import PageContainer from '@/components/layout/PageContainer'
import SideArea from '@/components/layout/SideArea'
import TwoColumnContainer from '@/components/layout/TwoColumnsContainer'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import SearchForm from '@/components/molecules/SearchForm'
import Footer from '@/components/organisms/parts/footer/Footer'
import Header from '@/components/organisms/parts/header/Header'
import Hero from '@/components/organisms/parts/header/Hero'
import SideArchive from '@/components/organisms/parts/side/SideArchive'
import SideCategory from '@/components/organisms/parts/side/SideCategory'
import SideRecentPosts from '@/components/organisms/parts/side/SideRecentPosts'
import SideTOC from '@/components/organisms/parts/side/SideTOC'

import PcOnly from '../utils/PcOnly'
import SpOnly from '../utils/SpOnly'
import Meta from '../organisms/parts/meta/Meta'

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
  title?: string
}

const Layout = ({
  children,
  data,
  breadcrumbList,
  isPostPage = false,
  title
}: LayoutProps) => {
  return (
    <>
      <Meta 
        pageTitle={title}
      />
      <Header />
      <Hero />
      <Breadcrumb breadcrumbList={breadcrumbList} />
      <PageContainer>
        <TwoColumnContainer>
          <MainArea>{children}</MainArea>
          <SideArea>
            <SearchForm />
            <SideRecentPosts posts={data.recentPost} />
            <SideCategory categories={data.categories} />
            <SideArchive posts={data.archivePosts} />
            {isPostPage && <SideTOC key={breadcrumbList.at(-1)?.name} />}
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
