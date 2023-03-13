import Layout from '@/components/layout/Layout'
import MainTop from '@/components/organisms/MainTop'

const data = {
  posts: {
    nodes: [
      {
        title: 'Themeの使い方～TypeScriptでstyled-components〜',
        uri: '/styled-components-theme/',
        date: '2023-03-06T22:26:35',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/03/thumb-styled-theme02.jpg',
          },
        },
        excerpt:
          '<p>React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。</p>\n',
        categories: {
          nodes: [
            {
              name: 'React',
              uri: '/category/react/',
            },
            {
              name: 'TypeScript',
              uri: '/category/typescript/',
            },
          ],
        },
      },
      {
        title:
          '【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】',
        uri: '/typescript-promise-cocurrency/',
        date: '2023-03-04T16:49:13',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/03/thumb-promise-cocurrency.png',
          },
        },
        excerpt:
          '<p>TypeScript/ JavaScriptのPromiseの並列処理メソッド『all, race, allSetteled, any』について、実際のコードと図を用いて分かりやすく解説します。</p>\n',
        categories: {
          nodes: [
            {
              name: 'JavaScript',
              uri: '/category/javascript/',
            },
            {
              name: 'TypeScript',
              uri: '/category/typescript/',
            },
          ],
        },
      },
      {
        title: '【GraphQL】beforeやafter, first, edgeとは何か？',
        uri: '/graphql-relay-cursor/',
        date: '2023-02-27T10:52:21',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-relay.png',
          },
        },
        excerpt:
          '<p>GraphQL APIで目にするbefore、after、firstやlastといった変数、並びにnodesやedges、cursorやpageInfoの意味について分かりやすく解説します。</p>\n',
        categories: {
          nodes: [
            {
              name: 'アプリ',
              uri: '/category/appli/',
            },
          ],
        },
      },
      {
        title: '【Promise】thenとasync/awaitの違い, 使い分けと同時利用法',
        uri: '/difference-between-then-and-await/',
        date: '2023-02-15T15:09:31',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-await.png',
          },
        },
        excerpt:
          '<p>JavaScript(TypeScript)のthenについて解説し、async/awaitとの違いを説明した後、使い分けや同時に使うケースなどを紹介します。</p>\n',
        categories: {
          nodes: [
            {
              name: 'JavaScript',
              uri: '/category/javascript/',
            },
            {
              name: 'TypeScript',
              uri: '/category/typescript/',
            },
          ],
        },
      },
      {
        title: '【es2022-2019】最近のJavaScriptの新機能を振り返る【まとめ】',
        uri: '/recent-ecmascipt/',
        date: '2023-02-15T15:05:27',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-ecma2022.png',
          },
        },
        excerpt:
          '<p>ここ数年で追加されたJavaScriptの新機能を遡ってまとめてざっと振り返る記事です。要点を絞って解説します。</p>\n',
        categories: {
          nodes: [
            {
              name: 'JavaScript',
              uri: '/category/javascript/',
            },
          ],
        },
      },
      {
        title: 'TypeScript4.9~4.6の新機能まとめ',
        uri: '/new-features-in-typescript4-2/',
        date: '2023-01-08T14:24:08',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2022/01/thumb-ts-4-1.jpg',
          },
        },
        excerpt:
          '<p>最新のTypeScript4.9から、TypeScript4.6に遡って新機能をまとめています。まとめてある内容は文法レベルの新機能で、細かい仕様変更についてはまとめていません。ざっと新機能だけを確認するのが目的です。</p>\n',
        categories: {
          nodes: [
            {
              name: 'TypeScript',
              uri: '/category/typescript/',
            },
          ],
        },
      },
      {
        title: 'TypeScriptでstyled-components〜基礎から発展的な使い方〜',
        uri: '/styled-components/',
        date: '2022-05-23T07:07:10',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2022/05/thumb-scs.jpg',
          },
        },
        excerpt:
          '<p>変数、propsやattrsの使い方、必要な型定義など、styled-componentsをTypeScriptで利用する方法を説明します。</p>\n',
        categories: {
          nodes: [
            {
              name: 'React',
              uri: '/category/react/',
            },
            {
              name: 'TypeScript',
              uri: '/category/typescript/',
            },
          ],
        },
      },
      {
        title: 'ProvideとInjectをComposition APIとTypeScriptで解説',
        uri: '/use-provide-and-inject-with-composition-api-and-typescript/',
        date: '2022-05-22T04:19:10',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2022/05/thumb-provide-inject.jpg',
          },
        },
        excerpt:
          '<p>Vue3におけるProvideとInjectをComposition APIとTypeScriptで解説していきます。</p>\n',
        categories: {
          nodes: [
            {
              name: 'TypeScript',
              uri: '/category/typescript/',
            },
            {
              name: 'Vue.js',
              uri: '/category/vue-js/',
            },
          ],
        },
      },
      {
        title: '【PHP8.1】列挙型(Enum)について徹底解説',
        uri: '/how-to-use-enum-in-php8-1/',
        date: '2022-05-21T04:23:33',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2022/05/thumb-php-enum.jpg',
          },
        },
        excerpt:
          '<p>PHPの列挙型について解説します。PHPの列挙型はメソッドを持てたりインターフェースの実装、トレイトを利用できたりと様々な表現が可能です。</p>\n',
        categories: {
          nodes: [
            {
              name: 'PHP',
              uri: '/category/php/',
            },
          ],
        },
      },
      {
        title: '【Jimp】TypeScriptでブラウザ上の画像処理【ライブラリ使用】',
        uri: '/jimp-with-typescript-on-browser/',
        date: '2022-05-21T01:34:28',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2022/05/thumb-ijimp-with-typescript-on-browser.jpg',
          },
        },
        excerpt:
          '<p>JavaScriptの画像処理ライブラリ「Jimp」をTypeScriptで使い、ブラウザ上で画像処理を行う方法を説明します。</p>\n',
        categories: {
          nodes: [
            {
              name: 'HTML',
              uri: '/category/html/',
            },
            {
              name: 'TypeScript',
              uri: '/category/typescript/',
            },
          ],
        },
      },
    ],
    edges: [
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIzMjQ=',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIyNjk=',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIxODQ=',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIxNTc=',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIxMzc=',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIxMTk=',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIwNDU=',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIwMzQ=',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjIwMjA=',
      },
      {
        cursor: 'YXJyYXljb25uZWN0aW9uOjE4OTI=',
      },
    ],
  },
  recentPost: {
    nodes: [
      {
        title: 'Themeの使い方～TypeScriptでstyled-components〜',
        uri: '/styled-components-theme/',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/03/thumb-styled-theme02.jpg',
          },
        },
        excerpt:
          '<p>React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。</p>\n',
      },
      {
        title:
          '【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】',
        uri: '/typescript-promise-cocurrency/',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/03/thumb-promise-cocurrency.png',
          },
        },
        excerpt:
          '<p>TypeScript/ JavaScriptのPromiseの並列処理メソッド『all, race, allSetteled, any』について、実際のコードと図を用いて分かりやすく解説します。</p>\n',
      },
      {
        title: '【GraphQL】beforeやafter, first, edgeとは何か？',
        uri: '/graphql-relay-cursor/',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-relay.png',
          },
        },
        excerpt:
          '<p>GraphQL APIで目にするbefore、after、firstやlastといった変数、並びにnodesやedges、cursorやpageInfoの意味について分かりやすく解説します。</p>\n',
      },
      {
        title: '【Promise】thenとasync/awaitの違い, 使い分けと同時利用法',
        uri: '/difference-between-then-and-await/',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-await.png',
          },
        },
        excerpt:
          '<p>JavaScript(TypeScript)のthenについて解説し、async/awaitとの違いを説明した後、使い分けや同時に使うケースなどを紹介します。</p>\n',
      },
      {
        title: '【es2022-2019】最近のJavaScriptの新機能を振り返る【まとめ】',
        uri: '/recent-ecmascipt/',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-ecma2022.png',
          },
        },
        excerpt:
          '<p>ここ数年で追加されたJavaScriptの新機能を遡ってまとめてざっと振り返る記事です。要点を絞って解説します。</p>\n',
      },
    ],
  },
  categories: {
    nodes: [
      {
        count: 8,
        name: 'CSS',
        uri: '/category/css/',
      },
      {
        count: 2,
        name: 'HTML',
        uri: '/category/html/',
      },
      {
        count: 14,
        name: 'JavaScript',
        uri: '/category/javascript/',
      },
      {
        count: 3,
        name: 'Laravel',
        uri: '/category/laravel/',
      },
      {
        count: 5,
        name: 'PHP',
        uri: '/category/php/',
      },
      {
        count: 3,
        name: 'Python',
        uri: '/category/python/',
      },
      {
        count: 4,
        name: 'React',
        uri: '/category/react/',
      },
      {
        count: 2,
        name: 'Sass',
        uri: '/category/sass/',
      },
      {
        count: 14,
        name: 'TypeScript',
        uri: '/category/typescript/',
      },
      {
        count: 13,
        name: 'Vue.js',
        uri: '/category/vue-js/',
      },
      {
        count: 1,
        name: 'WordPress',
        uri: '/category/wordpress/',
      },
      {
        count: 3,
        name: 'アプリ',
        uri: '/category/appli/',
      },
      {
        count: null,
        name: 'お知らせ',
        uri: '/category/news/',
      },
      {
        count: null,
        name: '三角関数',
        uri: '/category/math/trigonometric/',
      },
      {
        count: 5,
        name: '数学',
        uri: '/category/math/',
      },
    ],
  },
  archivePosts: {
    edges: [
      {
        node: {
          date: '2023-03-06T22:26:35',
        },
      },
      {
        node: {
          date: '2023-03-04T16:49:13',
        },
      },
      {
        node: {
          date: '2023-02-27T10:52:21',
        },
      },
      {
        node: {
          date: '2023-02-15T15:09:31',
        },
      },
      {
        node: {
          date: '2023-02-15T15:05:27',
        },
      },
      {
        node: {
          date: '2023-01-08T14:24:08',
        },
      },
      {
        node: {
          date: '2022-05-23T07:07:10',
        },
      },
      {
        node: {
          date: '2022-05-22T04:19:10',
        },
      },
      {
        node: {
          date: '2022-05-21T04:23:33',
        },
      },
      {
        node: {
          date: '2022-05-21T01:34:28',
        },
      },
      {
        node: {
          date: '2022-04-06T02:58:27',
        },
      },
      {
        node: {
          date: '2022-03-28T06:59:50',
        },
      },
      {
        node: {
          date: '2022-03-28T06:54:37',
        },
      },
      {
        node: {
          date: '2022-03-20T03:24:03',
        },
      },
      {
        node: {
          date: '2022-03-19T17:52:37',
        },
      },
      {
        node: {
          date: '2022-03-19T09:30:14',
        },
      },
      {
        node: {
          date: '2022-03-09T13:48:37',
        },
      },
      {
        node: {
          date: '2022-02-24T16:01:20',
        },
      },
      {
        node: {
          date: '2022-02-24T08:51:15',
        },
      },
      {
        node: {
          date: '2022-02-09T11:55:13',
        },
      },
      {
        node: {
          date: '2022-01-23T14:26:07',
        },
      },
      {
        node: {
          date: '2022-01-12T21:08:03',
        },
      },
      {
        node: {
          date: '2022-01-02T18:45:35',
        },
      },
      {
        node: {
          date: '2021-12-31T13:08:00',
        },
      },
      {
        node: {
          date: '2021-12-31T13:05:39',
        },
      },
      {
        node: {
          date: '2021-12-31T13:02:40',
        },
      },
      {
        node: {
          date: '2021-12-31T12:57:51',
        },
      },
      {
        node: {
          date: '2021-12-31T12:54:25',
        },
      },
      {
        node: {
          date: '2021-12-23T17:38:11',
        },
      },
      {
        node: {
          date: '2021-12-15T19:05:06',
        },
      },
      {
        node: {
          date: '2021-12-06T11:44:18',
        },
      },
      {
        node: {
          date: '2021-11-27T15:42:39',
        },
      },
      {
        node: {
          date: '2021-11-23T20:16:14',
        },
      },
      {
        node: {
          date: '2021-11-21T17:42:13',
        },
      },
      {
        node: {
          date: '2021-11-21T17:42:00',
        },
      },
      {
        node: {
          date: '2021-11-21T17:41:43',
        },
      },
      {
        node: {
          date: '2021-11-21T17:41:14',
        },
      },
      {
        node: {
          date: '2021-11-21T17:41:05',
        },
      },
      {
        node: {
          date: '2021-11-21T17:40:47',
        },
      },
      {
        node: {
          date: '2021-11-21T17:40:32',
        },
      },
      {
        node: {
          date: '2021-11-21T17:40:05',
        },
      },
      {
        node: {
          date: '2021-11-21T17:39:40',
        },
      },
      {
        node: {
          date: '2021-11-21T17:39:11',
        },
      },
      {
        node: {
          date: '2021-11-21T17:38:59',
        },
      },
      {
        node: {
          date: '2021-11-21T17:38:47',
        },
      },
      {
        node: {
          date: '2021-11-21T17:38:20',
        },
      },
      {
        node: {
          date: '2021-11-21T17:38:07',
        },
      },
      {
        node: {
          date: '2021-11-21T17:37:35',
        },
      },
    ],
  },
}
const Test = () => {
  const breadcrumbList: {
    name: string
    href: string
  }[] = []
  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainTop posts={data.posts} />
      </Layout>
    </>
  )
}

export default Test
