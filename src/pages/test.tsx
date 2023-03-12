import styled from 'styled-components'

import MainArea from '@/components/layout/MainArea'
import PageContainer from '@/components/layout/PageContainer'
import SideArea from '@/components/layout/SideArea'
import TwoColumnContainer from '@/components/layout/TwoColumnsContainer'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import SearchForm from '@/components/molecules/SearchForm'
import ShareIcons from '@/components/molecules/ShareIcons'
import Archive from '@/components/organisms/Archive'
import Card from '@/components/organisms/Card'
import Category from '@/components/organisms/Category'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import PrevNextPager from '@/components/organisms/PrevNextPager'
import RecentPosts from '@/components/organisms/RecentPosts'
import type { CategoryType } from '@/types/CategoryType'

const Contents = styled.div`
  width: 100%;
  height: 300px;
  background-color: tomato;
`

const cardList: {
  imgUrl: string
  date: string
  title: string
  categories: {
    name: string
  }[]
  desc: string
}[] = [
  {
    imgUrl: '/thumb.jpg',
    date: '2023年4月1日',
    title: 'Themeの使い方～TypeScriptでstyled-components〜',
    categories: [
      {
        name: 'react',
      },
      {
        name: 'typescript',
      },
    ],
    desc: 'この記事では、React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。Themeに型付けする方法等の説明していますが、型情報を無視すればJavaSciripterでも読めます。',
  },
  {
    imgUrl: '/thumb.jpg',
    date: '2023年4月1日',
    title: 'Themeの使い方～TypeScriptでstyled-components〜',
    categories: [
      {
        name: 'react',
      },
      {
        name: 'typescript',
      },
    ],
    desc: 'この記事では、React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。Themeに型付けする方法等の説明していますが、型情報を無視すればJavaSciripterでも読めます。',
  },
  {
    imgUrl: '/thumb.jpg',
    date: '2023年4月1日',
    title: 'Themeの使い方～TypeScriptでstyled-components〜',
    categories: [
      {
        name: 'react',
      },
      {
        name: 'typescript',
      },
    ],
    desc: 'この記事では、React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。Themeに型付けする方法等の説明していますが、型情報を無視すればJavaSciripterでも読めます。',
  },
  {
    imgUrl: '/thumb.jpg',
    date: '2023年4月1日',
    title: 'Themeの使い方～TypeScriptでstyled-components〜',
    categories: [
      {
        name: 'react',
      },
      {
        name: 'typescript',
      },
    ],
    desc: 'この記事では、React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。Themeに型付けする方法等の説明していますが、型情報を無視すればJavaSciripterでも読めます。',
  },
  {
    imgUrl: '/thumb.jpg',
    date: '2023年4月1日',
    title: 'Themeの使い方～TypeScriptでstyled-components〜',
    categories: [
      {
        name: 'react',
      },
      {
        name: 'typescript',
      },
    ],
    desc: 'この記事では、React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。Themeに型付けする方法等の説明していますが、型情報を無視すればJavaSciripterでも読めます。',
  },
]

const CardWrapperTop = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 3%;
  margin-block: 20px;
`

const CardWrapperArticle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 3%;
  margin-block: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 3%;
  }
`

const PrevNextPagerWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
`

const Test = () => {
  return (
    <>
      <Header />
      {/* <Hero />
      <Breadcrumb />
      <PageContainer>
        <TwoColumnContainer>
          <MainArea>
            <CardWrapperTop>
              {cardList.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </CardWrapperTop>
            <CardWrapperArticle>
              {cardList.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  categories={card.categories}
                  imgUrl={card.imgUrl}
                />
              ))}
            </CardWrapperArticle>
            <ShareIcons />
          </MainArea>
          <SideArea>
            <SearchForm />
            <RecentPosts />
            <Category />
            <Archive />
          </SideArea>
        </TwoColumnContainer>
      </PageContainer>
      <Footer /> */}
    </>
  )
}

export default Test
