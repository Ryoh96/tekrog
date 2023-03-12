import { useState } from 'react'
import styled from 'styled-components'

import MainArea from '@/components/layout/MainArea'
import PageContainer from '@/components/layout/PageContainer'
import SideArea from '@/components/layout/SideArea'
import TwoColumnContainer from '@/components/layout/TwoColumnsContainer'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import SearchForm from '@/components/molecules/SearchForm'
import Archive from '@/components/organisms/Archive'
import Card from '@/components/organisms/Card'
import Category from '@/components/organisms/Category'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import RecentPosts from '@/components/organisms/RecentPosts'

import formatDate from '../utils/formatDate'

const data = {
  posts: {
    edges: [
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIzMjQ=',
        node: {
          title: 'Themeの使い方～TypeScriptでstyled-components〜',
          date: '2023-03-06T22:26:35',
          excerpt:
            '<p>React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。</p>\n',
          categories: {
            nodes: [
              {
                name: 'React',
              },
              {
                name: 'TypeScript',
              },
            ],
          },
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2023/03/thumb-styled-theme02.jpg',
            },
          },
        },
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIyNjk=',
        node: {
          title:
            '【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】',
          date: '2023-03-04T16:49:13',
          excerpt:
            '<p>TypeScript/ JavaScriptのPromiseの並列処理メソッド『all, race, allSetteled, any』について、実際のコードと図を用いて分かりやすく解説します。</p>\n',
          categories: {
            nodes: [
              {
                name: 'JavaScript',
              },
              {
                name: 'TypeScript',
              },
            ],
          },
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2023/03/thumb-promise-cocurrency.png',
            },
          },
        },
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIxODQ=',
        node: {
          title: '【GraphQL】beforeやafter, first, edgeとは何か？',
          date: '2023-02-27T10:52:21',
          excerpt:
            '<p>GraphQL APIで目にするbefore、after、firstやlastといった変数、並びにnodesやedges、cursorやpageInfoの意味について分かりやすく解説します。</p>\n',
          categories: {
            nodes: [
              {
                name: 'アプリ',
              },
            ],
          },
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2023/02/thumb-relay.png',
            },
          },
        },
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIxNTc=',
        node: {
          title: '【Promise】thenとasync/awaitの違い, 使い分けと同時利用法',
          date: '2023-02-15T15:09:31',
          excerpt:
            '<p>JavaScript(TypeScript)のthenについて解説し、async/awaitとの違いを説明した後、使い分けや同時に使うケースなどを紹介します。</p>\n',
          categories: {
            nodes: [
              {
                name: 'JavaScript',
              },
              {
                name: 'TypeScript',
              },
            ],
          },
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2023/02/thumb-await.png',
            },
          },
        },
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIxMzc=',
        node: {
          title: '【es2022-2019】最近のJavaScriptの新機能を振り返る【まとめ】',
          date: '2023-02-15T15:05:27',
          excerpt:
            '<p>ここ数年で追加されたJavaScriptの新機能を遡ってまとめてざっと振り返る記事です。要点を絞って解説します。</p>\n',
          categories: {
            nodes: [
              {
                name: 'JavaScript',
              },
            ],
          },
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2023/02/thumb-ecma2022.png',
            },
          },
        },
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIxMTk=',
        node: {
          title: 'TypeScript4.9~4.6の新機能まとめ',
          date: '2023-01-08T14:24:08',
          excerpt:
            '<p>最新のTypeScript4.9から、TypeScript4.6に遡って新機能をまとめています。まとめてある内容は文法レベルの新機能で、細かい仕様変更についてはまとめていません。ざっと新機能だけを確認するのが目的です。</p>\n',
          categories: {
            nodes: [
              {
                name: 'TypeScript',
              },
            ],
          },
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2022/01/thumb-ts-4-1.jpg',
            },
          },
        },
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIwNDU=',
        node: {
          title: 'TypeScriptでstyled-components〜基礎から発展的な使い方〜',
          date: '2022-05-23T07:07:10',
          excerpt:
            '<p>変数、propsやattrsの使い方、必要な型定義など、styled-componentsをTypeScriptで利用する方法を説明します。</p>\n',
          categories: {
            nodes: [
              {
                name: 'React',
              },
              {
                name: 'TypeScript',
              },
            ],
          },
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2022/05/thumb-scs.jpg',
            },
          },
        },
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIwMzQ=',
        node: {
          title: 'ProvideとInjectをComposition APIとTypeScriptで解説',
          date: '2022-05-22T04:19:10',
          excerpt:
            '<p>Vue3におけるProvideとInjectをComposition APIとTypeScriptで解説していきます。</p>\n',
          categories: {
            nodes: [
              {
                name: 'TypeScript',
              },
              {
                name: 'Vue.js',
              },
            ],
          },
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2022/05/thumb-provide-inject.jpg',
            },
          },
        },
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIwMjA=',
        node: {
          title: '【PHP8.1】列挙型(Enum)について徹底解説',
          date: '2022-05-21T04:23:33',
          excerpt:
            '<p>PHPの列挙型について解説します。PHPの列挙型はメソッドを持てたりインターフェースの実装、トレイトを利用できたりと様々な表現が可能です。</p>\n',
          categories: {
            nodes: [
              {
                name: 'PHP',
              },
            ],
          },
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2022/05/thumb-php-enum.jpg',
            },
          },
        },
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjE4OTI=',
        node: {
          title: '【Jimp】TypeScriptでブラウザ上の画像処理【ライブラリ使用】',
          date: '2022-05-21T01:34:28',
          excerpt:
            '<p>JavaScriptの画像処理ライブラリ「Jimp」をTypeScriptで使い、ブラウザ上で画像処理を行う方法を説明します。</p>\n',
          categories: {
            nodes: [
              {
                name: 'HTML',
              },
              {
                name: 'TypeScript',
              },
            ],
          },
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2022/05/thumb-ijimp-with-typescript-on-browser.jpg',
            },
          },
        },
      },
    ],
  },
}

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 3%;
  margin-block: 20px;
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
            <CardWrapper> */}
              {/* {data?.posts?.edges.map(({ cursor, node }) => (
                <Card
                  key={cursor}
                  title={node.title}
                  categories={node.categories.nodes}
                  date={formatDate(node.date)}
                  imgUrl={node.featuredImage.node.sourceUrl}
                  desc={node.excerpt.slice(3, node.excerpt.length - 5)}
                />
              ))} */}
            {/* </CardWrapper>
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
