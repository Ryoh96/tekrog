import type { ReactNode } from 'react'
import styled from 'styled-components'

import PageTopButton from '@/components/atoms/PageTopButton'
import MainArea from '@/components/layout/MainArea'
import PageContainer from '@/components/layout/PageContainer'
import SideArea from '@/components/layout/SideArea'
import TwoColumnContainer from '@/components/layout/TwoColumnsContainer'
import SearchForm from '@/components/molecules/SearchForm'
import GoogleAdsense from '@/components/organisms/adsense/GoogleAdsense'
import Footer from '@/components/templates/footer/Footer'
import Header from '@/components/templates/header/Header'
import Hero from '@/components/templates/header/Hero'
import SideArchive from '@/components/templates/side/SideArchive'
import SideCategory from '@/components/templates/side/SideCategory'
import SideRecentPosts from '@/components/templates/side/SideRecentPosts'
import SideTOC from '@/components/templates/side/SideTOC'
import type { Category, Post } from '@/graphql/generated/graphql'
import type { PostPageQuery } from '@/types/Page'

import PostHead from '../templates/main/post/PostHead'
import Meta from '../templates/meta/Meta'
import PcOnly from '../utils/PcOnly'
import SpOnly from '../utils/SpOnly'

const PageTopButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 10;
`

const Title = styled.h1`
  background: linear-gradient(
    263deg,
    rgba(255, 90, 247, 1) 0%,
    rgba(75, 255, 245, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0);
  text-align: center;
  padding-inline: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    font-size: 48px;
    margin-block: 10px 36px;
  }

  font-size: 40px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 26px;
  }
`

type LayoutProps = {
  children: ReactNode
  data: any
  breadcrumbList: { name: string; href: string }[]
  isPostPage?: boolean
  post?: {
    date: string
    categories: { nodes: Category[] }
    uri: string
  }
  meta?: {
    title?: string
    desc?: string
    url?: string
    imgUrl?: string
  }
  hero?: ReactNode
  title: string
}

const Layout = ({
  children,
  data,
  breadcrumbList,
  isPostPage = false,
  meta,
  hero,
  title,
  post,
}: LayoutProps) => {
  return (
    <>
      <Meta {...meta} />
      <Header />
      <Hero content={hero} breadcrumbList={breadcrumbList} />
      <PageContainer>
        {title && <Title>{title}</Title>}
        {post && (
          <PostHead
            title={title as string}
            date={post.date}
            categories={post.categories}
            uri={post.uri as string}
          />
        )}
        <TwoColumnContainer>
          <MainArea data-testid="main-area">{children}</MainArea>
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
            <SideArchive posts={data.archivePosts} data-testid="side-archive" />
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
