import styled from 'styled-components'

import type { CategoryType } from '@/types/CategoryType'

import ShareIcons from '../molecules/ShareIcons'
import Card from '../organisms/Card'
import PrevNextPager from '../organisms/PrevNextPager'

const MainAreaWrapper = styled.div`
  flex: 1 1 auto;
  overflow-x: hidden;
  background-color: #fff;
  padding: 40px 34px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: #efefef;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    padding: 26px 22px;
  }

  /* @media (prefers-color-scheme: dark) {
    background-color: #292a2d;
    color: #fff;
  } */
`

const cardList: {
  imgUrl: string
  date: string
  title: string
  categories: CategoryType[]
  desc: string
}[] = [
  {
    imgUrl: '/thumb.jpg',
    date: '2023年4月1日',
    title: 'Themeの使い方～TypeScriptでstyled-components〜',
    categories: ['react', 'typescript'],
    desc: 'この記事では、React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。Themeに型付けする方法等の説明していますが、型情報を無視すればJavaSciripterでも読めます。',
  },
  {
    imgUrl: '/thumb.jpg',
    date: '2023年4月1日',
    title: 'Themeの使い方～TypeScriptでstyled-components〜',
    categories: ['react', 'typescript'],
    desc: 'この記事では、React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。Themeに型付けする方法等の説明していますが、型情報を無視すればJavaSciripterでも読めます。',
  },
  {
    imgUrl: '/thumb.jpg',
    date: '2023年4月1日',
    title: 'Themeの使い方～TypeScriptでstyled-components〜',
    categories: ['react', 'typescript'],
    desc: 'この記事では、React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。Themeに型付けする方法等の説明していますが、型情報を無視すればJavaSciripterでも読めます。',
  },
  {
    imgUrl: '/thumb.jpg',
    date: '2023年4月1日',
    title: 'Themeの使い方～TypeScriptでstyled-components〜',
    categories: ['react', 'typescript'],
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

const MainArea = () => {
  return (
    <MainAreaWrapper>
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
    </MainAreaWrapper>
  )
}

export default MainArea
