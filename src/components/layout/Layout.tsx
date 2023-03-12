import type { ReactNode } from 'react'

import MainArea from '@/components/layout/MainArea'
import PageContainer from '@/components/layout/PageContainer'
import SideArea from '@/components/layout/SideArea'
import TwoColumnContainer from '@/components/layout/TwoColumnsContainer'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import SearchForm from '@/components/molecules/SearchForm'
import Archive from '@/components/organisms/Archive'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import SideCategory from '@/components/organisms/SideCategory'
import SideRecentPosts from '@/components/organisms/SideRecentPosts'
import SideTOC from '@/components/organisms/SideTOC'

type LayoutProps = {
  children: ReactNode
  data: any
  breadcrumbList: { name: string; href: string }[]
}

const Layout = ({ children, data, breadcrumbList }: LayoutProps) => {
  return (
    <>
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
            <Archive posts={data.archivePosts} />
            <SideTOC />
          </SideArea>
        </TwoColumnContainer>
      </PageContainer>
      <Footer />
    </>
  )
}

export default Layout
