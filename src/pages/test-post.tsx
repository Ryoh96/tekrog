import styled from 'styled-components'

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

import MainPost from '../components/organisms/MainPost'
import PrevNextPagers from '../components/organisms/PrevNextPager'

const data = {
  post: {
    content:
      '\n<p>JavaScript(TypeScript)のthenについて解説し、async/awaitとの違いを説明した後、使い分けや同時に使うケースなどを紹介します。この記事はTypeScriptで解説しますが、型情報を無視すればTypeScriptをご存じない方もJavaScriptコードとして読めます。</p>\n\n\n\n\n<!-- banner1 -->\n<div class="ad-hidden">\n<ins class="adsbygoogle"\nstyle="display:block"\ndata-ad-client="ca-pub-5954645555619996"\ndata-ad-slot="1703027587"\ndata-ad-format="auto"\ndata-full-width-responsive="false"></ins>\n<script>\nwindow.onload = () => {\n  (adsbygoogle = window.adsbygoogle || []).push({});\n}\n</script>\n</div><div id="toc_container" class="toc_white no_bullets"><p class="toc_title">目次</p><ul class="toc_list"><li><a href="#thenasyncawait"><span class="toc_number toc_depth_1">1</span> thenとasync/awaitはいつからある？</a></li><li><a href="#thenasyncawait-2"><span class="toc_number toc_depth_1">2</span> thenとasync/awaitの違い</a></li><li><a href="#then"><span class="toc_number toc_depth_1">3</span> thenについておさらい</a><ul><li><a href="#i"><span class="toc_number toc_depth_2">3.1</span> 簡単な例</a></li><li><a href="#i-2"><span class="toc_number toc_depth_2">3.2</span> 非同期処理の例</a></li></ul></li><li><a href="#thenasync_await"><span class="toc_number toc_depth_1">4</span> thenをasync/ awaitで書き換える</a></li><li><a href="#thenawait"><span class="toc_number toc_depth_1">5</span> then句とawait句の使い分けについて</a></li><li><a href="#thenawait-2"><span class="toc_number toc_depth_1">6</span> then句とawait句を同時に使ってよりシンプルに</a></li><li><a href="#i-3"><span class="toc_number toc_depth_1">7</span> まとめ</a></li></ul></div>\n<h2><span id="thenasyncawait">thenとasync/awaitはいつからある？</span></h2>\n\n\n\n<p>まず初めにこれらの構文がJavaScriptに搭載された順番を知っておくといいでしょう。<br>PromiseとthenはES2015で採用され、async/awaitはそれよりも後のES2017で採用されました。<br><strong class="yellow-line">つまりthenのほうが昔からある構文になります。</strong></p>\n\n\n\n<h2><span id="thenasyncawait-2">thenとasync/awaitの違い</span></h2>\n\n\n\n<p><strong class="yellow-line">これらの2つの違いは書き方の違いくらいです。thenで書かれた処理はasync /awaitに置き換え可能です。</strong></p>\n\n\n\n<p>書き換え可能なら新しい記述方法のasync / awaitの方が良いのでは？と思うかもしれませんが、<strong class="yellow-line">どちらが良いかは状況によります</strong>。また、<strong class="yellow-line">同時に利用することでコードが簡潔になる</strong>こともあります。</p>\n\n\n\n<p>使い分けや併用についてこの記事で解説します。</p>\n\n\n\n\n<!-- banner1 -->\n<div class="ad-hidden">\n<ins class="adsbygoogle"\nstyle="display:block"\ndata-ad-client="ca-pub-5954645555619996"\ndata-ad-slot="1703027587"\ndata-ad-format="auto"\ndata-full-width-responsive="false"></ins>\n<script>\nwindow.onload = () => {\n  (adsbygoogle = window.adsbygoogle || []).push({});\n}\n</script>\n</div><h2><span id="then">thenについておさらい</span></h2>\n\n\n\n<h3><span id="i">簡単な例</span></h3>\n\n\n\n<p>まずは以下のようなPromiseを例に考えます。</p>\n\n\n\n<pre><code class="language-ts">const promise = new Promise(resolve =&gt; resolve(10))\n</code></pre>\n\n\n\n<p>単純に10を返すだけのPromiseです。これは下記のように簡単な式で書き換えられます。</p>\n\n\n\n<pre><code class="language-ts">const promise = Promise.resolve(10)</code></pre>\n\n\n\n<p>さて本題のthenですが、これはPromiseがresolveされた場合に実行されます。Promise型のオブジェクトからメソッドとして生やして利用します。<br>then句の中にはコールバック関数を記述し、その関数の引数にresolveの引数が代入されることになります。</p>\n\n\n\n<pre><code class="language-ts">const promise = Promise.resolve(10)\npromise.then(data =&gt; console.log(data)) // 10と表示。dataには10が入る</code></pre>\n\n\n\n<p>Promiseがrejectされた場合は、then句ではなくcatch句でエラーを捕捉します。<br>また、resolveされようがrejectされようが共通の処理を書きたい場合はfinally句を続けます。</p>\n\n\n\n<pre><code class="language-ts">const promise = Promise.reject("ERROR")\npromise\n  .then(() => console.log("正常な処理"))\n  .catch(err => console.error(err)) // ERRORと表示\n  .finally(() => console.log("いずれにしろ表示")) // ここも表示</code></pre>\n\n\n\n<h3><span id="i-2">非同期処理の例</span></h3>\n\n\n\n<p>実際に非同期処理をthen句で書いてみます。非同期処理として、引数に渡した秒数待機する関数を例に挙げます。</p>\n\n\n\n<pre><code class="language-ts">const timer = (sec: number): Promise&lt;string> =>\n  new Promise((resolve) => setTimeout(() => resolve(`${sec}秒待機`), sec * 1000))\ntimer(2)\n  .then((data) => {\n    console.log(data)\n    return timer(5)\n  })\n  .then((data) => {\n    console.log(data)\n    return timer(4)\n  })\n  .then((data) => {\n    console.log(data)\n    return timer(3)\n  })\n  .then(console.log)\n// 出力\n// 2秒待機\n// 5秒待機\n// 4秒待機\n// 3秒待機</code></pre>\n\n\n\n<p>このようにthen句の中で更にPromiseをreturnしてthen句をチェーンすることで、逐次タイマーが作動していきます。</p>\n\n\n\n<ul>\n<li class="point">最後のthen(console.log)のように、thenの中に関数名(この場合console.log)を直接書くと、thenの引数に渡されたパラメータを自動で関数に流します。</li>\n</ul>\n\n\n\n<h2><span id="thenasync_await">thenをasync/ awaitで書き換える</span></h2>\n\n\n\n<p>async/ awaitとは何かという解説はこの記事では行っていないので、ご存じなかったり不安な方は次の記事を参照ください。</p>\n\n\n<div class="linkcard"><div class="lkc-internal-wrap"><a class="lkc-link no_icon" href="https://tekrog.com/learn-async-await-promise"><div class="lkc-card"><div class="lkc-info"><img class="lkc-favicon" src="https://www.google.com/s2/favicons?domain=tekrog.com" alt="" width=16 height=16 /><div class="lkc-domain">TeKRog</div>&nbsp;<div class="lkc-url-info">https://tekrog.com/learn-async-await-promise</div></div><div class="lkc-content"><figure class="lkc-thumbnail"><img class="lkc-thumbnail-img" src="//tekrog.com/wp-content/uploads/2021/12/thumb-async-150x150.jpg" alt="" /></figure><div class="lkc-title"><div class="lkc-title-text">TypeScriptで学ぶ！asyncとawait、Promiseの分かりやすい解説</div></div><div class="lkc-excerpt">モダンなJavaScriptの開発ではPromiseやasync、awaitの利用が欠かせません。今回はこれらの意味について極限まで簡単にして説明します。10分程度で理解できる内容です。...</div></div><div class="clear"></div></div></a></div></div>\n\n\n\n<p>さて、先ほどのタイマーの例をasync/ awaitで書き直してみます。</p>\n\n\n\n<pre><code class="language-ts">const timer = (sec: number): Promise&lt;string> =>\n  new Promise((resolve) => setTimeout(() => resolve(`${sec}秒待機`), sec * 1000))\n;(async () => {\n  let data = await timer(2)\n  console.log(data)\n  data = await timer(5)\n  console.log(data)\n  data = await timer(4)\n  console.log(data)\n  data = await timer(3)\n  console.log(data)\n})()\n</code></pre>\n\n\n\n<p>then句の時よりもシンプルで、より従来のコードに近くて分かりやすくなります。<br>ただし、awaitはasync関数で囲む必要があるため、上の例ではasyncの即時関数として実行しています。</p>\n\n\n\n<p class="warning">ES2022からはトップレベルでawaitを使う場合はasync関数で囲む必要がなくなりました。関数の中で使うには従来通りasyncが必要です。</p>\n\n\n\n<p>※参考</p>\n\n\n<div class="linkcard"><div class="lkc-internal-wrap"><a class="lkc-link no_icon" href="https://tekrog.com/recent-ecmascipt"><div class="lkc-card"><div class="lkc-info"><img class="lkc-favicon" src="https://www.google.com/s2/favicons?domain=tekrog.com" alt="" width=16 height=16 /><div class="lkc-domain">TeKRog</div>&nbsp;<div class="lkc-url-info">https://tekrog.com/recent-ecmascipt</div></div><div class="lkc-content"><figure class="lkc-thumbnail"><img class="lkc-thumbnail-img" src="//tekrog.com/wp-content/uploads/2023/02/thumb-ecma2022-150x150.png" alt="" /></figure><div class="lkc-title"><div class="lkc-title-text">【es2022-2019】最近のJavaScriptの新機能を振り返る【まとめ】</div></div><div class="lkc-excerpt">ここ数年で追加されたJavaScrip(ECMAScript)tの新機能を遡ってまとめてざっと振り返る記事です。機能と使い方の要点を簡潔にまとめておさらいするような記事なので、よ...</div></div><div class="clear"></div></div></a></div></div>\n\n\n\n<h2><span id="thenawait">then句とawait句の使い分けについて</span></h2>\n\n\n\n<p>さて、今回の例を見てthen句とawait句のどちらがいいでしょうか。<br>正直、プロジェクトのルールがあるならそれに従って、でないのであれば好みで使って構わないと思います。<br>この例ですと個人的にawait句のほうがコードが少なくてすっきりとしてて読みやすいです。</p>\n\n\n\n<p><strong>コードをシンプルに書ける方を採用する、という観点も使い分ける際に重要だと思います。</strong></p>\n\n\n\n<p>逆にthen句を使った方がシンプルになる例も載せます。</p>\n\n\n\n<pre><code class="language-ts">// then句の方がシンプルな例\nfetch("/api/hoge").then(setData)\n// ↑と同じ処理をawait句で\n(async () => {\n  const data = await fetch("/api/hoge")\n  setData(data)\n})()</code></pre>\n\n\n\n<h2><span id="thenawait-2">then句とawait句を同時に使ってよりシンプルに</span></h2>\n\n\n\n<p>then句とawait句は同時に使えます。<br>そして、<strong class="yellow-line">同時に使った方がシンプルに書けることもあります。</strong></p>\n\n\n\n<p>先ほどのタイマーのawait句の例で考えます。<br>まずは先ほどのコードを再掲します。</p>\n\n\n\n<pre><code class="language-ts">const timer = (sec: number): Promise&lt;string> =>\n  new Promise((resolve) => setTimeout(() => resolve(`${sec}秒待機`), sec * 1000))\n;(async () => {\n  let data = await timer(2)\n  console.log(data)\n  data = await timer(5)\n  console.log(data)\n  data = await timer(4)\n  console.log(data)\n  data = await timer(3)\n  console.log(data)\n})()\n</code></pre>\n\n\n\n<p>このコードはawait句とthen句を利用して、より少ない行数で書き直すことが可能です。</p>\n\n\n\n<pre><code class="language-ts">const timer = (sec: number): Promise&lt;string> =>\n  new Promise((resolve) => setTimeout(() => resolve(`${sec}秒待機`), sec * 1000))\n;(async () => {\n  await timer(2).then(console.log)\n  await timer(5).then(console.log)\n  await timer(4).then(console.log)\n  await timer(3).then(console.log)\n})()</code></pre>\n\n\n\n<p><strong>行数が半分になったうえ、dataという変数すらいらなくなりました</strong>！</p>\n\n\n\n<p>timerはPromise型なのでthen句が使えますし、Promise.then()もPromise型なのでawait句も使えるのです。</p>\n\n\n\n<h2><span id="i-3">まとめ</span></h2>\n\n\n\n<p>then句とasync/await句の違いや使い分け、併用方法について解説しました。Promiseの処理はthenの後に登場したasync / await句に完全に取って代わられたわけでなく、それぞれ使い分けたり併用することで、コードをよりシンプルに分かりやすく書くことが可能となります。</p>\n',
    date: '2023-02-15T15:09:31',
    uri: '/difference-between-then-and-await/',
    categories: {
      nodes: [
        {
          name: 'JavaScript',
          uri: '/category/javascript/',
          posts: {
            nodes: [
              {
                title:
                  '【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】',
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
                featuredImage: {
                  node: {
                    sourceUrl:
                      'https://tekrog.com/wp-content/uploads/2023/03/thumb-promise-cocurrency.png',
                  },
                },
              },
              {
                title:
                  '【Promise】thenとasync/awaitの違い, 使い分けと同時利用法',
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
                featuredImage: {
                  node: {
                    sourceUrl:
                      'https://tekrog.com/wp-content/uploads/2023/02/thumb-await.png',
                  },
                },
              },
              {
                title:
                  '【es2022-2019】最近のJavaScriptの新機能を振り返る【まとめ】',
                categories: {
                  nodes: [
                    {
                      name: 'JavaScript',
                      uri: '/category/javascript/',
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
              {
                title:
                  'JavaScript、TypeScriptで簡単画像処理【画像処理の知識不要】',
                categories: {
                  nodes: [
                    {
                      name: 'CSS',
                      uri: '/category/css/',
                    },
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
                featuredImage: {
                  node: {
                    sourceUrl:
                      'https://tekrog.com/wp-content/uploads/2022/04/thumb-easy-image-processing-by-ts.jpg',
                  },
                },
              },
              {
                title: '追従＆ハイライト、自動スクロールする目次の作り方',
                categories: {
                  nodes: [
                    {
                      name: 'JavaScript',
                      uri: '/category/javascript/',
                    },
                    {
                      name: 'WordPress',
                      uri: '/category/wordpress/',
                    },
                  ],
                },
                featuredImage: {
                  node: {
                    sourceUrl:
                      'https://tekrog.com/wp-content/uploads/2022/01/fy.jpg',
                  },
                },
              },
              {
                title:
                  'TypeScriptで学ぶ！asyncとawait、Promiseの分かりやすい解説',
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
                featuredImage: {
                  node: {
                    sourceUrl:
                      'https://tekrog.com/wp-content/uploads/2021/12/thumb-async.jpg',
                  },
                },
              },
            ],
          },
        },
        {
          name: 'TypeScript',
          uri: '/category/typescript/',
          posts: {
            nodes: [
              {
                title: 'Themeの使い方～TypeScriptでstyled-components〜',
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
                featuredImage: {
                  node: {
                    sourceUrl:
                      'https://tekrog.com/wp-content/uploads/2023/03/thumb-styled-theme02.jpg',
                  },
                },
              },
              {
                title:
                  '【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】',
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
                featuredImage: {
                  node: {
                    sourceUrl:
                      'https://tekrog.com/wp-content/uploads/2023/03/thumb-promise-cocurrency.png',
                  },
                },
              },
              {
                title:
                  '【Promise】thenとasync/awaitの違い, 使い分けと同時利用法',
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
                featuredImage: {
                  node: {
                    sourceUrl:
                      'https://tekrog.com/wp-content/uploads/2023/02/thumb-await.png',
                  },
                },
              },
              {
                title: 'TypeScript4.9~4.6の新機能まとめ',
                categories: {
                  nodes: [
                    {
                      name: 'TypeScript',
                      uri: '/category/typescript/',
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
              {
                title:
                  'TypeScriptでstyled-components〜基礎から発展的な使い方〜',
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
                featuredImage: {
                  node: {
                    sourceUrl:
                      'https://tekrog.com/wp-content/uploads/2022/05/thumb-scs.jpg',
                  },
                },
              },
              {
                title: 'ProvideとInjectをComposition APIとTypeScriptで解説',
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
                featuredImage: {
                  node: {
                    sourceUrl:
                      'https://tekrog.com/wp-content/uploads/2022/05/thumb-provide-inject.jpg',
                  },
                },
              },
            ],
          },
        },
      ],
    },
    title: '【Promise】thenとasync/awaitの違い, 使い分けと同時利用法',
    featuredImage: {
      node: {
        sourceUrl:
          'https://tekrog.com/wp-content/uploads/2023/02/thumb-await.png',
      },
    },
    link: 'https://tekrog.com/difference-between-then-and-await/',
  },
  nextPost: {
    nodes: [
      {
        title: '【es2022-2019】最近のJavaScriptの新機能を振り返る【まとめ】',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-ecma2022.png',
          },
        },
        uri: '/recent-ecmascipt/',
      },
    ],
  },
  prevPost: {
    nodes: [
      {
        title: '【GraphQL】beforeやafter, first, edgeとは何か？',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-relay.png',
          },
        },
        uri: '/graphql-relay-cursor/',
      },
    ],
  },
  recentPost: {
    nodes: [
      {
        title: 'Themeの使い方～TypeScriptでstyled-components〜',
        link: 'https://tekrog.com/styled-components-theme/',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/03/thumb-styled-theme02.jpg',
          },
        },
      },
      {
        title:
          '【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】',
        link: 'https://tekrog.com/typescript-promise-cocurrency/',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/03/thumb-promise-cocurrency.png',
          },
        },
      },
      {
        title: '【GraphQL】beforeやafter, first, edgeとは何か？',
        link: 'https://tekrog.com/graphql-relay-cursor/',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-relay.png',
          },
        },
      },
      {
        title: '【Promise】thenとasync/awaitの違い, 使い分けと同時利用法',
        link: 'https://tekrog.com/difference-between-then-and-await/',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-await.png',
          },
        },
      },
      {
        title: '【es2022-2019】最近のJavaScriptの新機能を振り返る【まとめ】',
        link: 'https://tekrog.com/recent-ecmascipt/',
        featuredImage: {
          node: {
            sourceUrl:
              'https://tekrog.com/wp-content/uploads/2023/02/thumb-ecma2022.png',
          },
        },
      },
    ],
  },
  categories: {
    nodes: [
      {
        count: 8,
        name: 'CSS',
        link: 'https://tekrog.com/category/css/',
      },
      {
        count: 2,
        name: 'HTML',
        link: 'https://tekrog.com/category/html/',
      },
      {
        count: 14,
        name: 'JavaScript',
        link: 'https://tekrog.com/category/javascript/',
      },
      {
        count: 3,
        name: 'Laravel',
        link: 'https://tekrog.com/category/laravel/',
      },
      {
        count: 5,
        name: 'PHP',
        link: 'https://tekrog.com/category/php/',
      },
      {
        count: 3,
        name: 'Python',
        link: 'https://tekrog.com/category/python/',
      },
      {
        count: 4,
        name: 'React',
        link: 'https://tekrog.com/category/react/',
      },
      {
        count: 2,
        name: 'Sass',
        link: 'https://tekrog.com/category/sass/',
      },
      {
        count: 14,
        name: 'TypeScript',
        link: 'https://tekrog.com/category/typescript/',
      },
      {
        count: 13,
        name: 'Vue.js',
        link: 'https://tekrog.com/category/vue-js/',
      },
    ],
  },
}
const Test = () => {
  return (
    <>
      <Header />
      <Hero />
      <Breadcrumb
        breadcrumbList={[
          {
            name: data.post.categories.nodes[0].name,
            href: data.post.categories.nodes[0].uri,
          },
          {
            name: data.post.title,
            href: data.post.uri,
          },
        ]}
      />
      <PageContainer>
        <TwoColumnContainer>
          <MainArea>
            <MainPost post={data.post} />
            <PrevNextPagers prevPost={data.prevPost} nextPost={data.nextPost} />
          </MainArea>
          <SideArea>
            <SearchForm />
            <SideRecentPosts posts={data.recentPost} />
            <SideCategory categories={data.categories} />
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
