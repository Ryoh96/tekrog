export const mockedPost = {
  data: {
    post: {
      content:
        '\n<p>この記事では、React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。Themeに型付けする方法等の説明していますが、型情報を無視すればJavaSciripterでも読めます。</p>\n\n\n\n\n<!-- banner1 -->\n<div class="ad-hidden">\n<ins class="adsbygoogle"\nstyle="display:block"\ndata-ad-client="ca-pub-5954645555619996"\ndata-ad-slot="1703027587"\ndata-ad-format="auto"\ndata-full-width-responsive="false"></ins>\n<script>\nwindow.onload = () => {\n  (adsbygoogle = window.adsbygoogle || []).push({});\n}\n</script>\n</div><div id="toc_container" class="toc_white no_bullets"><p class="toc_title">目次</p><ul class="toc_list"><li><a href="#Theme"><span class="toc_number toc_depth_1">1</span> Themeとは</a></li><li><a href="#i"><span class="toc_number toc_depth_1">2</span> 最も基本的な使い方</a></li><li><a href="#Theme-2"><span class="toc_number toc_depth_1">3</span> Themeの型について</a></li><li><a href="#Theme-3"><span class="toc_number toc_depth_1">4</span> 関数テーマ～部分的にThemeを変える～</a></li><li><a href="#styled-componentsTheme"><span class="toc_number toc_depth_1">5</span> styled-components外でThemeを使う</a><ul><li><a href="#withTheme"><span class="toc_number toc_depth_2">5.1</span> withThemeでラップする高次のコンポーネント</a></li><li><a href="#useContext"><span class="toc_number toc_depth_2">5.2</span> useContextを使う</a></li><li><a href="#useTheme"><span class="toc_number toc_depth_2">5.3</span> useThemeを使う</a></li></ul></li><li><a href="#theme_props"><span class="toc_number toc_depth_1">6</span> theme propsで値のオーバーライド</a></li><li><a href="#i-2"><span class="toc_number toc_depth_1">7</span> まとめ</a></li></ul></div>\n<h2><span id="Theme">Themeとは</span></h2>\n\n\n\n<p><strong class="yellow-line">Themeを使うと、styled-componentsで利用する値を『共通の値』として色々なパーツで使いまわせます。</strong>themeで値を一元管理することで、デザインの一貫性を担保できたり修正に強いコンポーネントの作成が可能となります。</p>\n\n\n\n<p>なお、Theme以外のstyled-componentsの解説は次の記事で行っております。</p>\n\n\n<div class="linkcard"><div class="lkc-internal-wrap"><a class="lkc-link no_icon" href="https://tekrog.com/styled-components"><div class="lkc-card"><div class="lkc-info"><img class="lkc-favicon" src="https://www.google.com/s2/favicons?domain=tekrog.com" alt="" width=16 height=16 /><div class="lkc-domain">TeKRog</div>&nbsp;<div class="lkc-url-info">https://tekrog.com/styled-components</div></div><div class="lkc-content"><figure class="lkc-thumbnail"><img class="lkc-thumbnail-img" src="//tekrog.com/wp-content/uploads/2022/05/thumb-scs-150x150.jpg" alt="" /></figure><div class="lkc-title"><div class="lkc-title-text">TypeScriptでstyled-components〜基礎から発展的な使い方〜</div></div><div class="lkc-excerpt">この記事ではstyled-componentsをTypeScriptで利用する方法と代表的な機能をまとめています。変数、propsやattrsの使用方法、必要な型定義なども説明します。これら基本...</div></div><div class="clear"></div></div></a></div></div>\n\n\n\n<h2><span id="i">最も基本的な使い方</span></h2>\n\n\n\n<p>まずは、テーマ(theme)をオブジェクトで記述します。<br>ここでは例として&#8221;main&#8221;と&#8221;sub&#8221;という値をthemeとして定義しています。</p>\n\n\n\n<pre><code class="language-ts">const theme = {\n  main: "blue",\n  sub: "purple"\n}</code></pre>\n\n\n\n<p>このようにthemeとして定義したmainとsubは、styled-componentsのpropsから自由にアクセスできるようになります。</p>\n\n\n\n<pre><code class="language-ts">const Button1 = styled.button`\n  background-color: ${props =&gt; props.theme.main};\n  padding: 10px;\n`\n\nconst Button2 = styled.button`\n  background-color: ${props =&gt; props.theme.sub};\n  padding: 10px;\n`</code></pre>\n\n\n\n<p>ただし、themeを使いたいコンポーネントはThemeProviderで囲む必要があります。この時、定義したthemeをpropsとして渡します。</p>\n\n\n\n<pre><code class="language-tsx">&lt;ThemeProvider theme={theme}&gt;\n  &lt;Button1&gt;Button1&lt;/Button1&gt;\n  &lt;Button2&gt;Button2&lt;/Button2&gt;\n&lt;/ThemeProvider&gt;</code></pre>\n\n\n\n<figure class="wp-block-image size-full is-resized"><img decoding="async" src="https://tekrog.com/wp-content/uploads/2023/03/styled01.png" alt="" class="wp-image-2327" width="255" height="74" srcset="https://tekrog.com/wp-content/uploads/2023/03/styled01.png 510w, https://tekrog.com/wp-content/uploads/2023/03/styled01-300x86.png 300w" sizes="(max-width: 255px) 100vw, 255px" /></figure>\n\n\n\n<p>続いて発展的な使い方を見ていきます。</p>\n\n\n\n\n<!-- banner1 -->\n<div class="ad-hidden">\n<ins class="adsbygoogle"\nstyle="display:block"\ndata-ad-client="ca-pub-5954645555619996"\ndata-ad-slot="1703027587"\ndata-ad-format="auto"\ndata-full-width-responsive="false"></ins>\n<script>\nwindow.onload = () => {\n  (adsbygoogle = window.adsbygoogle || []).push({});\n}\n</script>\n</div><h2><span id="Theme-2">Themeの型について</span></h2>\n\n\n\n<p>宣言のマージを利用して、Themeの型を型定義ファイル(d.ts)で宣言することができます。例えば、styled.d.tsを用意し、先ほどのThemeの型を宣言します。</p>\n\n\n\n<pre><code class="language-ts">import \'styled-components\'\ndeclare module \'styled-components\' {\n  export interface DefaultTheme {\n    main: string\n    sub: string\n  }\n}\n</code></pre>\n\n\n\n<p>DefaultThemeはもともと用意されている型ですが中身は空で、このようにThemeの型として拡張して利用することが可能です。あとはThemeの型が必要なところで、次のようにimportして使えます。</p>\n\n\n\n<pre><code class="language-ts">import type { DefaultTheme } from \'styled-components\'</code></pre>\n\n\n\n<h2><span id="Theme-3">関数テーマ～部分的にThemeを変える～</span></h2>\n\n\n\n<p>『親ThemeProvider』の中に『子ThemeProvider』を定義し、子ThemeProviderの中だけでThemeの値を変更することが可能です。その際に利用するのが関数テーマ(function theme)です。</p>\n\n\n\n<p>例えば、次の例のように、mainとsubの値を逆にする関数を考えます。</p>\n\n\n\n<pre><code class="language-ts">const theme = {\n  main: \'blue\',\n  sub: \'purple\',\n}\n\nconst invertTheme = ({ main, sub }: DefaultTheme) =&gt; ({\n  main: sub,\n  sub: main,\n})</code></pre>\n\n\n\n<p>親ThemeProviderにtheme, 子ThemeProviderにinvertThemeを与えると、子Themeの中だけでmainとsubの値が逆になります。</p>\n\n\n\n<pre><code class="language-tsx">&lt;ThemeProvider theme={theme}>\n  &lt;Button1>Button1&lt;/Button1>\n  &lt;Button2>Button2&lt;/Button2>\n  &lt;Space />\n  &lt;ThemeProvider theme={invertTheme}>\n    &lt;Button1>Invert1&lt;/Button1>\n    &lt;Button2>Invert2&lt;/Button2>\n  &lt;/ThemeProvider>\n&lt;/ThemeProvider></code></pre>\n\n\n\n<figure class="wp-block-image size-full is-resized"><img decoding="async" src="https://tekrog.com/wp-content/uploads/2023/03/styled02.png" alt="" class="wp-image-2328" width="253" height="162" srcset="https://tekrog.com/wp-content/uploads/2023/03/styled02.png 506w, https://tekrog.com/wp-content/uploads/2023/03/styled02-300x192.png 300w" sizes="(max-width: 253px) 100vw, 253px" /></figure>\n\n\n\n<h2><span id="styled-componentsTheme">styled-components外でThemeを使う</span></h2>\n\n\n\n<p>『styled.タグ』で定義したstyled-componentsではなく、通常のコンポーネントでThemeの値を利用する方法を3つ紹介します。</p>\n\n\n\n<h3><span id="withTheme">withThemeでラップする高次のコンポーネント</span></h3>\n\n\n\n<p>コンポーネントをwithThemeでラップすると、themeにアクセスが可能となります。</p>\n\n\n\n<pre><code class="language-tsx">const Component = withTheme(({ theme }: { theme: DefaultTheme }) => {\n  return &lt;>{console.log(theme.main)}&lt;/> //blueと表示される\n})\nconst Wrapper = () => {\n  return (\n    &lt;ThemeProvider theme={theme}>\n      &lt;Component />\n    &lt;/ThemeProvider>\n  )\n}</code></pre>\n\n\n\n<h3><span id="useContext">useContextを使う</span></h3>\n\n\n\n<p>useContext(ThemeContext)でThemeの値にアクセスできるようになります。</p>\n\n\n\n<pre><code class="language-tsx">import { useContext } from \'react\'\nimport { ThemeContext } from \'styled-components\'\nconst Component = () => {\n  const themeContext = useContext(ThemeContext)\n  return &lt;>{console.log(themeContext.main)}&lt;/> //blue\n}\nconst Wrapper = () => {\n  return (\n    &lt;ThemeProvider theme={theme}>\n      &lt;Component />\n    &lt;/ThemeProvider>\n  )\n}</code></pre>\n\n\n\n<h3><span id="useTheme">useThemeを使う</span></h3>\n\n\n\n<p>もっとも簡単なのが、usetThemeカスタムフックを利用する方法です。</p>\n\n\n\n<pre><code class="language-tsx">import { useTheme } from \'styled-components\'\nconst Component = () => {\n  const theme = useTheme()\n  return &lt;>{console.log(theme.main)}&lt;/> //blue\n}\nconst Wrapper = () => {\n  return (\n    &lt;ThemeProvider theme={theme}>\n      &lt;Component />\n    &lt;/ThemeProvider>\n  )\n}</code></pre>\n\n\n\n<h2><span id="theme_props">theme propsで値のオーバーライド</span></h2>\n\n\n\n<p>styled-componentsのpropsにDefaultTheme型のthemeプロパティを渡すと、値がオーバーライドされます。</p>\n\n\n\n<pre><code class="language-tsx">const theme = {\n  main: \'blue\',\n  sub: \'purple\',\n}\nconst Button = styled.button`\n  background-color: ${(props) => props.theme.main};\n  border-color: ${(props) => props.theme.sub};\n`\nconst Wrapper = () => {\n  return (\n    &lt;ThemeProvider theme={theme}>\n      &lt;Button theme={{ main: "tomato", sub: "maroon" }}>Button&lt;/Button>\n    &lt;/ThemeProvider>\n  )\n}</code></pre>\n\n\n\n<figure class="wp-block-image size-full is-resized"><img decoding="async" src="https://tekrog.com/wp-content/uploads/2023/03/styled03.png" alt="" class="wp-image-2332" width="90" height="45"/></figure>\n\n\n\n<h2><span id="i-2">まとめ</span></h2>\n\n\n\n<p>以上、styled-componentsのThemeに関連する解説をReact + TypeScriptで行いました。<br>その他のstyled-componentsの解説は次の記事で行っております。</p>\n\n\n<div class="linkcard"><div class="lkc-internal-wrap"><a class="lkc-link no_icon" href="https://tekrog.com/styled-components"><div class="lkc-card"><div class="lkc-info"><img class="lkc-favicon" src="https://www.google.com/s2/favicons?domain=tekrog.com" alt="" width=16 height=16 /><div class="lkc-domain">TeKRog</div>&nbsp;<div class="lkc-url-info">https://tekrog.com/styled-components</div></div><div class="lkc-content"><figure class="lkc-thumbnail"><img class="lkc-thumbnail-img" src="//tekrog.com/wp-content/uploads/2022/05/thumb-scs-150x150.jpg" alt="" /></figure><div class="lkc-title"><div class="lkc-title-text">TypeScriptでstyled-components〜基礎から発展的な使い方〜</div></div><div class="lkc-excerpt">この記事ではstyled-componentsをTypeScriptで利用する方法と代表的な機能をまとめています。変数、propsやattrsの使用方法、必要な型定義なども説明します。これら基本...</div></div><div class="clear"></div></div></a></div></div>\n',
      date: '2023-03-06T22:26:35',
      excerpt:
        '<p>React＋TypeScriptでstyled-componentsのThemeを利用する方法について解説します。</p>\n',
      categories: {
        nodes: [
          {
            name: 'React',
            uri: '/category/react/',
            posts: {
              nodes: [
                {
                  title: 'Themeの使い方～TypeScriptでstyled-components〜',
                  uri: '/styled-components-theme/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/react/',
                        name: 'React',
                      },
                      {
                        uri: '/category/typescript/',
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
                {
                  title:
                    'TypeScriptでstyled-components〜基礎から発展的な使い方〜',
                  uri: '/styled-components/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/react/',
                        name: 'React',
                      },
                      {
                        uri: '/category/typescript/',
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
                {
                  title: '【React】Sliceを用いたReduxの簡単な実装方法',
                  uri: '/how-to-use-slice/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/react/',
                        name: 'React',
                      },
                    ],
                  },
                  featuredImage: {
                    node: {
                      sourceUrl:
                        'https://tekrog.com/wp-content/uploads/2022/03/thumb-redux-slice.png',
                    },
                  },
                },
                {
                  title:
                    '【解決方法】エラー Cannot read properties of undefined (reading ‘transformFie’)【React Native】',
                  uri: '/react-native-error-resolution/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/react/',
                        name: 'React',
                      },
                    ],
                  },
                  featuredImage: {
                    node: {
                      sourceUrl:
                        'https://tekrog.com/wp-content/uploads/2022/03/thunm-react-native-error.png',
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
                  uri: '/styled-components-theme/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/react/',
                        name: 'React',
                      },
                      {
                        uri: '/category/typescript/',
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
                {
                  title:
                    '【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】',
                  uri: '/typescript-promise-cocurrency/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/javascript/',
                        name: 'JavaScript',
                      },
                      {
                        uri: '/category/typescript/',
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
                {
                  title:
                    '【Promise】thenとasync/awaitの違い, 使い分けと同時利用法',
                  uri: '/difference-between-then-and-await/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/javascript/',
                        name: 'JavaScript',
                      },
                      {
                        uri: '/category/typescript/',
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
                {
                  title: 'TypeScript4.9~4.6の新機能まとめ',
                  uri: '/new-features-in-typescript4-2/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/typescript/',
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
                {
                  title:
                    'TypeScriptでstyled-components〜基礎から発展的な使い方〜',
                  uri: '/styled-components/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/react/',
                        name: 'React',
                      },
                      {
                        uri: '/category/typescript/',
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
                {
                  title: 'ProvideとInjectをComposition APIとTypeScriptで解説',
                  uri: '/use-provide-and-inject-with-composition-api-and-typescript/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/typescript/',
                        name: 'TypeScript',
                      },
                      {
                        uri: '/category/vuejs/',
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
                {
                  title:
                    '【Jimp】TypeScriptでブラウザ上の画像処理【ライブラリ使用】',
                  uri: '/jimp-with-typescript-on-browser/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/html/',
                        name: 'HTML',
                      },
                      {
                        uri: '/category/typescript/',
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
                {
                  title:
                    'JavaScript、TypeScriptで簡単画像処理【画像処理の知識不要】',
                  uri: '/easy-image-processing-by-ts/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/css/',
                        name: 'CSS',
                      },
                      {
                        uri: '/category/javascript/',
                        name: 'JavaScript',
                      },
                      {
                        uri: '/category/typescript/',
                        name: 'TypeScript',
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
                  title:
                    'TypeScriptを用いたブラウザ上の画像処理【ライブラリ不使用】',
                  uri: '/image-processing-by-ts/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/html/',
                        name: 'HTML',
                      },
                      {
                        uri: '/category/typescript/',
                        name: 'TypeScript',
                      },
                    ],
                  },
                  featuredImage: {
                    node: {
                      sourceUrl:
                        'https://tekrog.com/wp-content/uploads/2022/02/thumb-image-processing-on-browser.jpg',
                    },
                  },
                },
                {
                  title: 'TypeScript4.5~4.0の新機能まとめ',
                  uri: '/new-features-in-typescript4/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/typescript/',
                        name: 'TypeScript',
                      },
                    ],
                  },
                  featuredImage: {
                    node: {
                      sourceUrl:
                        'https://tekrog.com/wp-content/uploads/2022/01/thumb-ts-1.jpg',
                    },
                  },
                },
                {
                  title:
                    'TypeScriptで学ぶ！asyncとawait、Promiseの分かりやすい解説',
                  uri: '/learn-async-await-promise/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/javascript/',
                        name: 'JavaScript',
                      },
                      {
                        uri: '/category/typescript/',
                        name: 'TypeScript',
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
                {
                  title:
                    '【Vue+Router】CompositionAPIのナビゲーションガードの書き方',
                  uri: '/compositionapi-and-navigationgurad/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/typescript/',
                        name: 'TypeScript',
                      },
                      {
                        uri: '/category/vuejs/',
                        name: 'Vue.js',
                      },
                    ],
                  },
                  featuredImage: {
                    node: {
                      sourceUrl:
                        'https://tekrog.com/wp-content/uploads/2021/11/navigataion-guard.png',
                    },
                  },
                },
                {
                  title: '【Vue.js3】カスタムコンポーネントでv-modelを使う方法',
                  uri: '/v-model-in-vue3/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/typescript/',
                        name: 'TypeScript',
                      },
                      {
                        uri: '/category/vuejs/',
                        name: 'Vue.js',
                      },
                    ],
                  },
                  featuredImage: {
                    node: {
                      sourceUrl:
                        'https://tekrog.com/wp-content/uploads/2021/11/vue3-vmodel-thumb.jpg',
                    },
                  },
                },
                {
                  title: 'Vue3でTypeScriptを使う方法【CompositionAPI】',
                  uri: '/vue3-ts-quickmanual/',
                  categories: {
                    nodes: [
                      {
                        uri: '/category/typescript/',
                        name: 'TypeScript',
                      },
                      {
                        uri: '/category/vuejs/',
                        name: 'Vue.js',
                      },
                    ],
                  },
                  featuredImage: {
                    node: {
                      sourceUrl:
                        'https://tekrog.com/wp-content/uploads/2021/10/vuexts_thumb.jpg',
                    },
                  },
                },
              ],
            },
          },
        ],
      },
      title: 'Themeの使い方～TypeScriptでstyled-components〜',
      featuredImage: {
        node: {
          sourceUrl:
            'https://tekrog.com/wp-content/uploads/2023/03/thumb-styled-theme02.jpg',
        },
      },
      uri: '/styled-components-theme/',
    },
    nextPost: {
      nodes: [
        {
          title:
            '【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】',
          featuredImage: {
            node: {
              sourceUrl:
                'https://tekrog.com/wp-content/uploads/2023/03/thumb-promise-cocurrency.png',
            },
          },
          uri: '/typescript-promise-cocurrency/',
        },
      ],
    },
    prevPost: {
      nodes: [],
    },
  },
}
