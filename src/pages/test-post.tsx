import Layout from '@/components/layout/Layout'

import MainPost from '../components/organisms/MainPost'

const data ={
  "post": {
    "content": "\n<p>JavaScriptの画像処理ライブラリ「Jimp」をTypeScriptで使い、ブラウザ上で画像処理を行う方法を説明します。Jimpは画像処理のアルゴリズムを知らない人も簡単に画像処理ができますし、独自でカーネルを定義できたりピクセル単位の操作が簡単に行えるので、ある程度のカスタマイズができて拡張性があります。</p>\n\n\n\n\n<!-- banner1 -->\n<div class=\"ad-hidden\">\n<ins class=\"adsbygoogle\"\nstyle=\"display:block\"\ndata-ad-client=\"ca-pub-5954645555619996\"\ndata-ad-slot=\"1703027587\"\ndata-ad-format=\"auto\"\ndata-full-width-responsive=\"false\"></ins>\n<script>\nwindow.onload = () => {\n  (adsbygoogle = window.adsbygoogle || []).push({});\n}\n</script>\n</div><div id=\"toc_container\" class=\"toc_white no_bullets\"><p class=\"toc_title\">目次</p><ul class=\"toc_list\"><li><a href=\"#i\"><span class=\"toc_number toc_depth_1\">1</span> この記事で説明すること</a></li><li><a href=\"#TypeScript\"><span class=\"toc_number toc_depth_1\">2</span> (前置き)TypeScriptで画像処理</a><ul><li><a href=\"#i-2\"><span class=\"toc_number toc_depth_2\">2.1</span> ライブラリを使わない画像処理</a></li><li><a href=\"#Jimp\"><span class=\"toc_number toc_depth_2\">2.2</span> Jimpは初心者から上級者まで使える</a></li></ul></li><li><a href=\"#TypeScriptJimp\"><span class=\"toc_number toc_depth_1\">3</span> ブラウザ上＆TypeScriptでJimpを使う準備</a><ul><li><a href=\"#i-3\"><span class=\"toc_number toc_depth_2\">3.1</span> インストールからインポートまで</a></li><li><a href=\"#i-4\"><span class=\"toc_number toc_depth_2\">3.2</span> ブラウザ上で画像処理を行うコード</a></li></ul></li><li><a href=\"#Jimp-2\"><span class=\"toc_number toc_depth_1\">4</span> Jimpの書式</a></li><li><a href=\"#i-5\"><span class=\"toc_number toc_depth_1\">5</span> 基本的なフィルターの説明</a><ul><li><a href=\"#i-6\"><span class=\"toc_number toc_depth_2\">5.1</span> リサイズ</a></li><li><a href=\"#i-7\"><span class=\"toc_number toc_depth_2\">5.2</span> クロップ</a></li><li><a href=\"#2\"><span class=\"toc_number toc_depth_2\">5.3</span> 2枚の画像を重ねた処理(重ねて表示、ブレンド、マスク)</a></li><li><a href=\"#i-8\"><span class=\"toc_number toc_depth_2\">5.4</span> 変形(反転、回転)</a></li><li><a href=\"#i-9\"><span class=\"toc_number toc_depth_2\">5.5</span> 色変換(明度、コントラスト、ディザリング、グレースケール、ネガポジ反転、正規化)</a></li><li><a href=\"#i-10\"><span class=\"toc_number toc_depth_2\">5.6</span> 透明度変換</a></li><li><a href=\"#i-11\"><span class=\"toc_number toc_depth_2\">5.7</span> ぼかし</a></li><li><a href=\"#i-12\"><span class=\"toc_number toc_depth_2\">5.8</span> エフェクト(ポスタリゼーション、セピア、モザイク)</a></li><li><a href=\"#i-13\"><span class=\"toc_number toc_depth_2\">5.9</span> 画質の操作</a></li></ul></li><li><a href=\"#i-14\"><span class=\"toc_number toc_depth_1\">6</span> 様々な色変換を詳細に行う</a><ul><li><a href=\"#i-15\"><span class=\"toc_number toc_depth_2\">6.1</span> ① 色相の回転</a></li><li><a href=\"#i-16\"><span class=\"toc_number toc_depth_2\">6.2</span> ② 彩度の変更</a></li><li><a href=\"#_RGB\"><span class=\"toc_number toc_depth_2\">6.3</span> ③ RGB成分を強く</a></li></ul></li><li><a href=\"#i-17\"><span class=\"toc_number toc_depth_1\">7</span> 空間フィルタリング(畳み込み)</a><ul><li><a href=\"#i-18\"><span class=\"toc_number toc_depth_2\">7.1</span> ① シャープ</a></li><li><a href=\"#i-19\"><span class=\"toc_number toc_depth_2\">7.2</span> ② エンボス</a></li></ul></li><li><a href=\"#i-20\"><span class=\"toc_number toc_depth_1\">8</span> ピクセル値の操作</a></li><li><a href=\"#i-21\"><span class=\"toc_number toc_depth_1\">9</span> その他のトピック</a></li><li><a href=\"#i-22\"><span class=\"toc_number toc_depth_1\">10</span> まとめ</a></li></ul></div>\n<h2><span id=\"i\">この記事で説明すること</span></h2>\n\n\n\n<ul class=\"ulOnly\"><li>TypeScript ＆ Jimpをブラウザで使うためのセットアップの方法</li><li>Jimpの基本的な使い方の紹介(用意されているフィルタの説明)</li><li>Jimpの発展的な使い方の紹介</li></ul>\n\n\n\n<p>Jimpの使い方について、TypeScriptのコードと実際の画像処理結果を共に記載します。</p>\n\n\n\n<h2><span id=\"TypeScript\">(前置き)TypeScriptで画像処理</span></h2>\n\n\n\n<p>前置きなので使用方法だけが知りたい方は次の章へ飛ばして下さい。</p>\n\n\n\n<h3><span id=\"i-2\">ライブラリを使わない画像処理</span></h3>\n\n\n\n<p>以前「TypeScriptを用いたブラウザ上の画像処理【ライブラリ不使用】」ということで、ライブラリを使わないで画像処理を行う記事を作成しました。興味のある方はご参照下さい。</p>\n\n\n<div class=\"linkcard\"><div class=\"lkc-internal-wrap\"><a class=\"lkc-link no_icon\" href=\"https://tekrog.com/image-processing-by-ts\"><div class=\"lkc-card\"><div class=\"lkc-info\"><img class=\"lkc-favicon\" src=\"https://www.google.com/s2/favicons?domain=tekrog.com\" alt=\"\" width=16 height=16 /><div class=\"lkc-domain\">TeKRog</div>&nbsp;<div class=\"lkc-url-info\">https://tekrog.com/image-processing-by-ts</div></div><div class=\"lkc-content\"><figure class=\"lkc-thumbnail\"><img class=\"lkc-thumbnail-img\" src=\"//tekrog.com/wp-content/uploads/2022/02/thumb-image-processing-on-browser-150x150.jpg\" alt=\"\" /></figure><div class=\"lkc-title\"><div class=\"lkc-title-text\">TypeScriptを用いたブラウザ上の画像処理【ライブラリ不使用】</div></div><div class=\"lkc-excerpt\">この記事では、ライブラリを一切用いず、TypeScriptを用いてブラウザ上で画像処理をする方法を紹介します。また、画像処理をする方法を解説するだけでなく、実際にコー...</div></div><div class=\"clear\"></div></div></a></div></div>\n\n\n\n<p>画像を1次元配列として操作する必要があったり、入力出力周りが面倒だったり、正直かなり画像処理が行いにくい言語です。</p>\n\n\n\n<h3><span id=\"Jimp\">Jimpは初心者から上級者まで使える</span></h3>\n\n\n\n<p>また、画像処理は大学数学レベルの内容になってくるので、初心者がとっつきにくい分野でもあると思います。</p>\n\n\n\n<p>そこでJimpです。<strong class=\"yellow-line\">行いたい画像処理を関数名で呼び出してパラメータを調整する、という直感的な操作</strong>ができます。<br><strong class=\"yellow-line\">用意されているフィルターより複雑な処理をしたくなったら、カーネルを定義したりピクセル単位で操作を行えるので、ある程度カスタマイズも出来ます</strong>。また、画像の類似度を計算する機能等もあります。</p>\n\n\n\n<p>有名なライブラリであるOpenCVほど複雑な処理はできませんが、画像の簡単な加工や変換だけの用途ならJimpのほうが楽です。</p>\n\n\n\n\n<!-- banner1 -->\n<div class=\"ad-hidden\">\n<ins class=\"adsbygoogle\"\nstyle=\"display:block\"\ndata-ad-client=\"ca-pub-5954645555619996\"\ndata-ad-slot=\"1703027587\"\ndata-ad-format=\"auto\"\ndata-full-width-responsive=\"false\"></ins>\n<script>\nwindow.onload = () => {\n  (adsbygoogle = window.adsbygoogle || []).push({});\n}\n</script>\n</div><h2><span id=\"TypeScriptJimp\">ブラウザ上＆TypeScriptでJimpを使う準備</span></h2>\n\n\n\n<h3><span id=\"i-3\">インストールからインポートまで</span></h3>\n\n\n\n<p>なにはともあれ、まずはnpmでJimpをインストールします。</p>\n\n\n\n<pre><code class=\"language-shell\">npm install --save jimp</code></pre>\n\n\n\n<p>TSファイルでimportしますが、<strong class=\"yellow-line\">ブラウザ上で画像処理が行いたい場合は次のimport先にします。</strong></p>\n\n\n\n<pre><code class=\"language-ts\">import Jimp from \"jimp/browser/lib/jimp\"</code></pre>\n\n\n\n<h3><span id=\"i-4\">ブラウザ上で画像処理を行うコード</span></h3>\n\n\n\n<p>今回は、inputフォームで選択したファイルに対してブラウザ上で画像処理を行うことにします。<br>入力も出力もimgタグとします。<br>このあたりの決まりはそれぞれでカスタマイズして下さい。</p>\n\n\n\n<pre class=\"line-numbers\"><code class=\"language-html\">&lt;input type=\"file\" id=\"file\">\n&lt;img src=\"\" alt=\"入力画像\" class=\"inputImage\">\n&lt;img src=\"\" alt=\"出力\" class=\"outputImage\"></code></pre>\n\n\n\n<pre class=\"line-numbers\"><code class=\"language-ts\">import Jimp from \"jimp/browser/lib/jimp\"\n\ndocument.querySelector&lt;HTMLInputElement>('#file')?.addEventListener('change',  e => {\n  const target = e.target as HTMLInputElement\n  if (target.files !== null)  {\n    const file = target.files&#091;0]\n    const url = URL.createObjectURL(file)\n    document.querySelector&lt;HTMLImageElement>('.inputImage')!.src = url\n    Jimp.read(url).then(image => {\n\n      // ここから画像処理を書く\n      /////  画像処理  /////\n      //ここまで\n\n      image.getBase64(Jimp.MIME_JPEG, (error, img) => {\n        document.querySelector&lt;HTMLImageElement>('.outputImage')!.src = img\n      })\n    })\n  }\n}, false)</code></pre>\n\n\n\n<p>たったのこれだけです。フォーム周りの処理の説明は割愛します。<br>Jimpで行っている処理は２つです</p>\n\n\n\n<h4>①画像の読み込み</h4>\n\n\n\n<pre><code class=\"language-ts\">Jimp.read(url).then(image => {/**画像処理 */})</code></pre>\n\n\n\n<p>Jimp.readに画像のURLを指定して読み込みを行っています。Promiseを返すのでthenでつなげており、コールバック関数内で画像処理を行います。コールバックの引数(上のコードだとimage)が処理対象の画像になります。画像はライブラリ固有のJimp型です。</p>\n\n\n\n<h4>②画像の出力</h4>\n\n\n\n<pre><code class=\"language-ts\">image.getBase64(Jimp.MIME_JPEG, (error, img) => {\n  document.querySelector&lt;HTMLImageElement>('.outputImage')!.src = img\n})</code></pre>\n\n\n\n<p>このコードは画像をどの形式で出力するかによって変わってくるので、あくまで参考程度にとらえてください。</p>\n\n\n\n<p>getBase64で画像のData URIが取得でき、コールバック内でアウトプット用のimgタグのsrc属性にセットしています。これによって、処理結果の画像がimgタグとしてブラウザ上で出力されます。</p>\n\n\n\n<p>それでは、実際に画像処理を行います。</p>\n\n\n\n<h2><span id=\"Jimp-2\">Jimpの書式</span></h2>\n\n\n\n<p>Jimpのコードは基本的に、</p>\n\n\n\n<p><code class=\"language-ts\">image.フィルタ(パラメータ)</code></p>\n\n\n\n<p>の書式です。フィルタを何個も適用したい場合はチェーンして書きます。</p>\n\n\n\n<pre><code class=\"language-ts\">Jimp.read(url).then(image => {\n\n  image.フィルター1()\n    .フィルター2()\n    .フィルター3()\n    \n  image.getBase64(Jimp.MIME_JPEG, (error, img) => {\n    document.querySelector&lt;HTMLImageElement>('.outputImage')!.src = img\n  })\n})</code></pre>\n\n\n\n<h2><span id=\"i-5\">基本的なフィルターの説明</span></h2>\n\n\n\n<p>それではJimpで予め用意されているフィルターを紹介します。<br>入力画像は次のお寿司の画像にします。</p>\n\n\n\n<figure class=\"wp-block-image size-full is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/04/osushi.jpg\" alt=\"\" class=\"wp-image-1895\" width=\"384\" height=\"384\" srcset=\"https://tekrog.com/wp-content/uploads/2022/04/osushi.jpg 512w, https://tekrog.com/wp-content/uploads/2022/04/osushi-300x300.jpg 300w, https://tekrog.com/wp-content/uploads/2022/04/osushi-150x150.jpg 150w\" sizes=\"(max-width: 384px) 100vw, 384px\" /></figure>\n\n\n\n<h3><span id=\"i-6\">リサイズ</span></h3>\n\n\n\n<h4>①contain</h4>\n\n\n\n<p>画像の大きさを変更します。<br>入力画像は、指定した幅と高さに収まるようにリサイズされます。足りない部分は黒で埋め尽くされます。</p>\n\n\n\n<pre><code class=\"language-ts\">image.contain(幅 , 高さ &#091;, Alignモード, Resizeモード])</code></pre>\n\n\n\n<p>結果： image.contain(500,300)</p>\n\n\n\n<figure class=\"wp-block-image size-full is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/04/contain1.jpeg\" alt=\"\" class=\"wp-image-1896\" width=\"375\" height=\"225\" srcset=\"https://tekrog.com/wp-content/uploads/2022/04/contain1.jpeg 500w, https://tekrog.com/wp-content/uploads/2022/04/contain1-300x180.jpeg 300w\" sizes=\"(max-width: 375px) 100vw, 375px\" /></figure>\n\n\n\n<p>元画像より小さいサイズを指定して、画像を縮小しました。<br>足りない部分は黒で塗りつぶされています。</p>\n\n\n\n<h4>Alignモードについて</h4>\n\n\n\n<p>省略可能なパラメータです。<br>Alignモードは画像を揃える位置を指定します。例えば <code class=\"language-ts\">Jimp.HORIZONTAL_ALIGN_LEFT;</code>とすると左添えになります。</p>\n\n\n\n<p>結果：image.contain(500, 300, Jimp.HORIZONTAL_ALIGN_LEFT)</p>\n\n\n\n<figure class=\"wp-block-image size-full is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/04/alignmode.jpeg\" alt=\"\" class=\"wp-image-1897\" width=\"375\" height=\"225\" srcset=\"https://tekrog.com/wp-content/uploads/2022/04/alignmode.jpeg 500w, https://tekrog.com/wp-content/uploads/2022/04/alignmode-300x180.jpeg 300w\" sizes=\"(max-width: 375px) 100vw, 375px\" /></figure>\n\n\n\n<p>この他にも揃える位置について次のAlignモードがあります。それぞれの意味は読んで字の如くです。</p>\n\n\n\n<pre><code class=\"language-ts\">Jimp.HORIZONTAL_ALIGN_LEFT;\nJimp.HORIZONTAL_ALIGN_CENTER;\nJimp.HORIZONTAL_ALIGN_RIGHT;\n \nJimp.VERTICAL_ALIGN_TOP;\nJimp.VERTICAL_ALIGN_MIDDLE;\nJimp.VERTICAL_ALIGN_BOTTOM;</code></pre>\n\n\n\n<h4>Resizeモードについて</h4>\n\n\n\n<p>これも省略可能なパラメータです。リサイズの際のアルゴリズムを指定します。<br>画像処理に詳しくない方は無視しても構いません。それぞれのアルゴリズムは読んで字の如く。</p>\n\n\n\n<pre><code class=\"language-ts\">Jimp.RESIZE_NEAREST_NEIGHBOR;\nJimp.RESIZE_BILINEAR;\nJimp.RESIZE_BICUBIC;\nJimp.RESIZE_HERMITE;\nJimp.RESIZE_BEZIER;</code></pre>\n\n\n\n<p>デフォルトはバイリニアです。</p>\n\n\n\n<h4>②cover</h4>\n\n\n\n<p>画像の大きさを変更します。<br>入力画像は、指定した幅と高さいっぱいに埋め尽くされます。比率は一定のままです。</p>\n\n\n\n<pre><code class=\"language-ts\">image.cover(幅 , 高さ &#091;, Alignモード, Resizeモード])</code></pre>\n\n\n\n<p>結果： image.cover(500, 300)</p>\n\n\n\n<figure class=\"wp-block-image size-full is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/04/cover.jpeg\" alt=\"\" class=\"wp-image-1898\" width=\"375\" height=\"225\" srcset=\"https://tekrog.com/wp-content/uploads/2022/04/cover.jpeg 500w, https://tekrog.com/wp-content/uploads/2022/04/cover-300x180.jpeg 300w\" sizes=\"(max-width: 375px) 100vw, 375px\" /></figure>\n\n\n\n<h4>③resize</h4>\n\n\n\n<p>画像の大きさを変更します。<br>入力画像は指定した高さと幅になります。比率も変わります。</p>\n\n\n\n<pre><code class=\"language-ts\">image.resize(幅 , 高さ &#091;, Resizeモード])</code></pre>\n\n\n\n<p>結果： image.resize(500, 300)</p>\n\n\n\n<figure class=\"wp-block-image size-full is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/04/resize.jpeg\" alt=\"\" class=\"wp-image-1899\" width=\"375\" height=\"225\" srcset=\"https://tekrog.com/wp-content/uploads/2022/04/resize.jpeg 500w, https://tekrog.com/wp-content/uploads/2022/04/resize-300x180.jpeg 300w\" sizes=\"(max-width: 375px) 100vw, 375px\" /></figure>\n\n\n\n<p>幅、高さの一方のみを指定して、一定の比率でのリサイズもできます。<br>その際、指定しない方のパラメータは<code class=\"language-ts\">Jimp.AUTO</code>と指定します。</p>\n\n\n\n<h4>④scale</h4>\n\n\n\n<p>画像の大きさを変更します。<br>比率は一定で[パラメータ]倍します。</p>\n\n\n\n<pre><code class=\"language-ts\">image.scale(倍率 &#091;, Resizeモード])</code></pre>\n\n\n\n<h3><span id=\"i-7\">クロップ</span></h3>\n\n\n\n<h4>①crop</h4>\n\n\n\n<p>画像の一部分を切り取ります。</p>\n\n\n\n<pre><code class=\"language-ts\">image.crop(x座標, y座標, 幅, 高さ)</code></pre>\n\n\n\n<p>結果：image.crop(100, 100, 200, 200)</p>\n\n\n\n<figure class=\"wp-block-image size-full is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/crop.jpg\" alt=\"\" class=\"wp-image-1975\" width=\"210\" height=\"214\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/crop.jpg 420w, https://tekrog.com/wp-content/uploads/2022/05/crop-294x300.jpg 294w\" sizes=\"(max-width: 210px) 100vw, 210px\" /></figure>\n\n\n\n<h4>②autocrop</h4>\n\n\n\n<p>同じ色の線を自動的にクロップしますが、使い勝手と結果があまり良くないので割愛します。</p>\n\n\n\n<h3><span id=\"2\">2枚の画像を重ねた処理(重ねて表示、ブレンド、マスク)</span></h3>\n\n\n\n<h4>①blit</h4>\n\n\n\n<p>画像の上に画像を重ねます。</p>\n\n\n\n<pre><code class=\"language-ts\">image1.blit(image2, x座標, y座標&#091;, image2のx座標, 2のy座標, 2の幅, 2の高さ])</code></pre>\n\n\n\n<p class=\"point\">image2もJimp形式の画像である必要があります。</p>\n\n\n\n<p>結果： image.blit(image2, 100, 100)</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/blit-1018x1024.jpg\" alt=\"\" class=\"wp-image-1976\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/blit-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/blit-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/blit-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/blit-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/blit.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h4>②composite</h4>\n\n\n\n<p>2つの画像を合成(ブレンド)します。PhosoShopの描画モードのようなものです。</p>\n\n\n\n<pre><code class=\"language-ts\">image.composite(image2, 0, 0, { // image2のx座標とy座標\n  mode: Jimp.BLEND_MULTIPLY, //モード\n  opacitySource: 1, //image2の透明度\n  opacityDest: 1 //image1の透明度\n});</code></pre>\n\n\n\n<p>お寿司の画像に次のグラデーション画像を合成してみます。</p>\n\n\n\n<figure class=\"wp-block-image size-full is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/grad.jpg\" alt=\"\" class=\"wp-image-1977\" width=\"384\" height=\"384\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/grad.jpg 512w, https://tekrog.com/wp-content/uploads/2022/05/grad-300x300.jpg 300w, https://tekrog.com/wp-content/uploads/2022/05/grad-150x150.jpg 150w\" sizes=\"(max-width: 384px) 100vw, 384px\" /></figure>\n\n\n\n<p>結果</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/composite-1018x1024.jpg\" alt=\"\" class=\"wp-image-1978\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/composite-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/composite-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/composite-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/composite-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/composite.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<p>描画モードは他にも次のようなものがあります。</p>\n\n\n\n<pre><code class=\"language-ts\">Jimp.BLEND_SOURCE_OVER;\nJimp.BLEND_DESTINATION_OVER;\nJimp.BLEND_MULTIPLY;\nJimp.BLEND_ADD;\nJimp.BLEND_SCREEN;\nJimp.BLEND_OVERLAY;\nJimp.BLEND_DARKEN;\nJimp.BLEND_LIGHTEN;\nJimp.BLEND_HARDLIGHT;\nJimp.BLEND_DIFFERENCE;\nJimp.BLEND_EXCLUSION;</code></pre>\n\n\n\n<div class=\"is-layout-flex wp-container-2 wp-block-columns\">\n<div class=\"is-layout-flow wp-block-column\"></div>\n</div>\n\n\n\n<h4>③mask</h4>\n\n\n\n<p>2枚の画像の平均画素値を求めます。2値画像を使えばマスクできます。</p>\n\n\n\n<pre><code class=\"language-ts\">image.mask(image2, x座標, y座標)</code></pre>\n\n\n\n<p>例として次の画像でマスクしてみます。</p>\n\n\n\n<figure class=\"wp-block-image size-full is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/mask2.jpg\" alt=\"\" class=\"wp-image-1980\" width=\"256\" height=\"256\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/mask2.jpg 512w, https://tekrog.com/wp-content/uploads/2022/05/mask2-300x300.jpg 300w, https://tekrog.com/wp-content/uploads/2022/05/mask2-150x150.jpg 150w\" sizes=\"(max-width: 256px) 100vw, 256px\" /></figure>\n\n\n\n<p>結果： image.mask(image2, 0, 0)</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/mask-1018x1024.jpg\" alt=\"\" class=\"wp-image-1981\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/mask-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/mask-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/mask-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/mask-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/mask.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h3><span id=\"i-8\">変形(反転、回転)</span></h3>\n\n\n\n<h4>① flip / mirror</h4>\n\n\n\n<p>左右、上下に反転します。mirrorはflipのエイリアスです。</p>\n\n\n\n<pre><code class=\"language-ts\">image.flip(左右に反転するか: boolean, 上下に反転するか: boolean)   </code></pre>\n\n\n\n<p>結果：image.flip(false, true)</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/flip-1018x1024.jpg\" alt=\"\" class=\"wp-image-1983\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/flip-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/flip-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/flip-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/flip-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/flip.jpg 1036w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h4>② rotate</h4>\n\n\n\n<p>画像を時計回りに回転します。</p>\n\n\n\n<pre><code class=\"language-ts\">image.rotate(角度, リサイズするか: boolean) </code></pre>\n\n\n\n<p>第２パラメータをtrueにすると回転した画像がリサイズされます。<br>falseにするとリサイズされず、回転によりはみ出た部分は切り取られます。</p>\n\n\n\n<p>結果：image.rotate(30, true)</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/rotate-1013x1024.jpg\" alt=\"\" class=\"wp-image-1985\" width=\"507\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/rotate-1013x1024.jpg 1013w, https://tekrog.com/wp-content/uploads/2022/05/rotate-297x300.jpg 297w, https://tekrog.com/wp-content/uploads/2022/05/rotate-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/rotate-768x777.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/rotate.jpg 1410w\" sizes=\"(max-width: 507px) 100vw, 507px\" /></figure>\n\n\n\n<h3><span id=\"i-9\">色変換(明度、コントラスト、ディザリング、グレースケール、ネガポジ反転、正規化)</span></h3>\n\n\n\n<h4>① brightness</h4>\n\n\n\n<p>明度を変更します。パラメータは-1 ~ 1で指定し、0より大きい場合は明るく、小さい場合は暗くなります。</p>\n\n\n\n<pre><code class=\"language-ts\">image.brightness(パラメータ)</code></pre>\n\n\n\n<p>結果：image.brightness(0.6)</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/brightness-1018x1024.jpg\" alt=\"\" class=\"wp-image-1986\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/brightness-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/brightness-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/brightness-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/brightness-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/brightness.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h4>② contrast</h4>\n\n\n\n<p>コントラストを変更します。パラメータは-1 ~ 1で指定し、0より大きい場合はコントラストが強く、0より小さい場合は弱くなります。</p>\n\n\n\n<pre><code class=\"language-ts\">image.contrast(パラメータ)</code></pre>\n\n\n\n<p>結果：image.contrast(0.6)</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/contrast-1018x1024.jpg\" alt=\"\" class=\"wp-image-1988\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/contrast-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/contrast-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/contrast-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/contrast-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/contrast.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h4>③ disher565</h4>\n\n\n\n<p>ディザリングをして、色空間を16bitに縮小します。</p>\n\n\n\n<pre><code class=\"language-ts\">image.dither565()</code></pre>\n\n\n\n<h4>④ greyscale</h4>\n\n\n\n<p>グレースケール画像に変換します。</p>\n\n\n\n<pre><code class=\"language-ts\">image.greyscale()</code></pre>\n\n\n\n<p>結果:</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/greyscale-1018x1024.jpg\" alt=\"\" class=\"wp-image-1990\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/greyscale-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/greyscale-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/greyscale-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/greyscale-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/greyscale.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h4>⑤ invert</h4>\n\n\n\n<p>ネガポジ反転します。</p>\n\n\n\n<pre><code class=\"language-ts\">image.invert()</code></pre>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/invert-1018x1024.jpg\" alt=\"\" class=\"wp-image-1991\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/invert-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/invert-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/invert-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/invert-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/invert.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h4>⑥ normalize</h4>\n\n\n\n<p>画像のチャネルを正規化します。</p>\n\n\n\n<pre><code class=\"language-ts\">image.normalize()</code></pre>\n\n\n\n<p></p>\n\n\n\n<p>これだけ？と思われるかもしれませんが、<strong>他の色変換処理は勝手が違うので、次章で説明します。</strong></p>\n\n\n\n<h3><span id=\"i-10\">透明度変換</span></h3>\n\n\n\n<h4>① fade / opacity</h4>\n\n\n\n<p>画像の透過度を設定します。パラメータは0 〜１の範囲を取ります。</p>\n\n\n\n<pre><code class=\"language-ts\">image.fade(パラメータ)</code></pre>\n\n\n\n<p>結果：image.fade(0.5)</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/fade-1018x1024.jpg\" alt=\"\" class=\"wp-image-1992\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/fade-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/fade-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/fade-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/fade-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/fade.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h4>② opaque</h4>\n\n\n\n<p>画像を不透明にします。</p>\n\n\n\n<pre><code class=\"language-ts\">image.opaque()</code></pre>\n\n\n\n<h3><span id=\"i-11\">ぼかし</span></h3>\n\n\n\n<h4>① gaussian</h4>\n\n\n\n<p>ガウシアンフィルタをかけます。ただし処理はとても遅いです。</p>\n\n\n\n<pre><code class=\"language-ts\">image.gaussian(ピクセル値)</code></pre>\n\n\n\n<p>結果：image.gaussian(6)</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/gausiaan-1018x1024.jpg\" alt=\"\" class=\"wp-image-1994\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/gausiaan-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/gausiaan-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/gausiaan-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/gausiaan-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/gausiaan.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h4>② blur</h4>\n\n\n\n<p>ガウシアンフィルタより高速にぼかします。</p>\n\n\n\n<pre><code class=\"language-ts\">image.blur(ピクセル値)</code></pre>\n\n\n\n<h3><span id=\"i-12\">エフェクト(ポスタリゼーション、セピア、モザイク)</span></h3>\n\n\n\n<h4>① posterize</h4>\n\n\n\n<p>ポスタリゼーションします。パラメータでレベルを指定します。</p>\n\n\n\n<pre><code class=\"language-ts\">image.posterize(レベル: number)</code></pre>\n\n\n\n<p>結果： image.posterize(4)</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/posterize-1018x1024.jpg\" alt=\"\" class=\"wp-image-1995\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/posterize-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/posterize-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/posterize-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/posterize-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/posterize.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h4>② sepia</h4>\n\n\n\n<p>セピアにします。</p>\n\n\n\n<pre><code class=\"language-ts\">image.sepia()</code></pre>\n\n\n\n<p>結果：</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/sepia-1018x1024.jpg\" alt=\"\" class=\"wp-image-1996\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/sepia-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/sepia-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/sepia-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/sepia-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/sepia.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h4>③ pixelate</h4>\n\n\n\n<p>ピクセレーションします。いわゆるモザイク処理です。部分的にモザイクをかけることも可能です。</p>\n\n\n\n<pre><code class=\"language-ts\">image.pixelate(サイズ [,x座標, y座標, 幅, 高さ])</code></pre>\n\n\n\n<p>結果: image.pixelate(20, 100, 100, 300, 300)</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/pixelation-1018x1024.jpg\" alt=\"\" class=\"wp-image-1997\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/pixelation-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/pixelation-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/pixelation-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/pixelation-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/pixelation.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h3><span id=\"i-13\">画質の操作</span></h3>\n\n\n\n<h4>① quality</h4>\n\n\n\n<p>JPEGの画質を変更できます。パラメータは0 ~ 100を取ります。</p>\n\n\n\n<pre><code class=\"language-ts\">image.quality(パラメータ)</code></pre>\n\n\n\n<p>結果：image.quality(1)</p>\n\n\n\n<p></p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/quality-1018x1024.jpg\" alt=\"\" class=\"wp-image-1998\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/quality-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/quality-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/quality-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/quality-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/quality.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h2><span id=\"i-14\">様々な色変換を詳細に行う</span></h2>\n\n\n\n<p>colorメソッドを用いると、色の変換を細かく調整できます。</p>\n\n\n\n<pre><code class=\"language-ts\">image.color(&#091;\n  { apply: 'hue', params: &#091;-90] },\n  { apply: 'lighten', params: &#091;50] },\n  { apply: 'xor', params: &#091;'#06D'] }\n])</code></pre>\n\n\n\n<p>colorにはapplyとparamsをキーに持つオブジェクトの配列を渡します。<br>applyには行いたい処理をstring型で、paramsにはパラメータを配列で渡します。</p>\n\n\n\n<p>applyで指定できる処理は以下のとおりです。</p>\n\n\n\n<figure class=\"wp-block-table\"><table><tbody><tr><th>apply</th><th>params</th><th>説明</th></tr><tr><td>lighten</td><td>0 ~ 100</td><td>明るくする</td></tr><tr><td>brighten</td><td>0 ~ 100</td><td>明るくする</td></tr><tr><td>darken</td><td>0 ~ 100</td><td>暗くする</td></tr><tr><td>desaturate</td><td>0 ~ 100</td><td>彩度を下げる</td></tr><tr><td>saturate</td><td>0 ~ 100</td><td>彩度を上げる</td></tr><tr><td>greyscale</td><td>&#8211;</td><td>グレースケールにする</td></tr><tr><td>spin</td><td>-360 ~ 360</td><td>色相を回転させる</td></tr><tr><td>hue</td><td>-360 ~ 360</td><td>spinのエイリアス</td></tr><tr><td>mix</td><td>色(hex), 0 ~ 100</td><td>指定した色でオーバーレイ。数値は透明度。</td></tr><tr><td>tint</td><td>0 ~ 100</td><td>白とmixしたのと同じ</td></tr><tr><td>shade</td><td>0 ~ 100</td><td>黒とmixしたのと同じ</td></tr><tr><td>xor</td><td>色(hex)</td><td>指定した色とxor演算</td></tr><tr><td>red</td><td>0 ~ </td><td>赤を強める</td></tr><tr><td>green</td><td>0 ~ </td><td>緑を強める</td></tr><tr><td>blue</td><td>0  ~</td><td>青を強める</td></tr></tbody></table></figure>\n\n\n\n<p>前章の説明にない画像処理を行った結果をいくつか載せます。</p>\n\n\n\n<h3><span id=\"i-15\">① 色相の回転</span></h3>\n\n\n\n<p>結果 { apply: &#8216;hue&#8217; , params:[60] }</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/hue-1018x1024.jpg\" alt=\"\" class=\"wp-image-2000\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/hue-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/hue-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/hue-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/hue-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/hue.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h3><span id=\"i-16\">② 彩度の変更</span></h3>\n\n\n\n<p>結果: { apply: &#8216;saturate&#8217;, params: [50] }</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/saturate-1018x1024.jpg\" alt=\"\" class=\"wp-image-2001\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/saturate-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/saturate-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/saturate-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/saturate-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/saturate.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h3><span id=\"_RGB\">③ RGB成分を強く</span></h3>\n\n\n\n<p>結果: { apply: &#8216;blue&#8217;, params: [80] }</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/blue-1018x1024.jpg\" alt=\"\" class=\"wp-image-2002\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/blue-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/blue-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/blue-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/blue-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/blue.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h2><span id=\"i-17\">空間フィルタリング(畳み込み)</span></h2>\n\n\n\n<p>カーネルを指定して空間フィルタリング(畳み込み演算)ができます。<br>カーネルは3 x 3の2次元配列で指定します。</p>\n\n\n\n<pre><code class=\"language-ts\">image.convolute(3 x 3の2次元配列)</code></pre>\n\n\n\n<p>具体的な使用例として、上で行っていない処理を２つほど紹介します。</p>\n\n\n\n<h3><span id=\"i-18\">① シャープ</span></h3>\n\n\n\n<p>結果: image.convolute([[-1, -1, -1], [-1, 9, -1], [-1, -1, -1]])</p>\n\n\n\n<p></p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/sharp-1018x1024.jpg\" alt=\"\" class=\"wp-image-2003\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/sharp-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/sharp-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/sharp-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/sharp-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/sharp.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h3><span id=\"i-19\">② エンボス</span></h3>\n\n\n\n<p>結果: image.convolute([[-2, -1, 0], [-1, 1, 1], [0, 1, 2]])</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/enbos-1018x1024.jpg\" alt=\"\" class=\"wp-image-2004\" width=\"509\" height=\"512\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/enbos-1018x1024.jpg 1018w, https://tekrog.com/wp-content/uploads/2022/05/enbos-298x300.jpg 298w, https://tekrog.com/wp-content/uploads/2022/05/enbos-150x150.jpg 150w, https://tekrog.com/wp-content/uploads/2022/05/enbos-768x772.jpg 768w, https://tekrog.com/wp-content/uploads/2022/05/enbos.jpg 1042w\" sizes=\"(max-width: 509px) 100vw, 509px\" /></figure>\n\n\n\n<h2><span id=\"i-20\">ピクセル値の操作</span></h2>\n\n\n\n<p>ピクセルレベルの操作もできます。</p>\n\n\n\n<p>scanメソッドを使い画像をラスタスキャンすることで、ピクセルレベルでRGBα値を操作できます。</p>\n\n\n\n<pre><code class=\"language-ts\">image.scan(開始位置x, 開始位置y, 走査幅, 走査高, コールバック)</code></pre>\n\n\n\n<p>scanする範囲を引数で指定できます。また、コールバックでスキャン中の画素に対してアクセスします。</p>\n\n\n\n<pre><code class=\"language-ts\">image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {\n  // 画像をピクセルレベルで左上から右下まで走査(ラスタスキャン)\n  // x, y は画像上のピクセルの2次元的な位置\n  // idx は、画素を1列に並べたときの、1次元的な画素位置\n  \n  // idx番目のとき、R、G、B、αへは以下でアクセスできる\n  let R = this.bitmap.data&#091;idx + 0];  \n  let G = this.bitmap.data&#091;idx + 1];\n  let B = this.bitmap.data&#091;idx + 2];\n  let alpha = this.bitmap.data&#091;idx + 3];\n\n});  </code></pre>\n\n\n\n<p>ここで、上のコードのように、<strong class=\"yellow-line\">image.bitmap.widthで画像幅、image.bitmap.heightで画像の高さ、 image.bitmap.dataで画素にアクセスできます。</strong></p>\n\n\n\n<p>コールバック内での画素へのアクセス方法はImageData型と同じです。</p>\n\n\n\n<p>(参考)ImageData型</p>\n\n\n\n<figure class=\"wp-block-image size-large is-resized\"><img decoding=\"async\" src=\"https://tekrog.com/wp-content/uploads/2022/05/imagedata-2-1024x803.png\" alt=\"\" class=\"wp-image-2006\" width=\"512\" height=\"402\" srcset=\"https://tekrog.com/wp-content/uploads/2022/05/imagedata-2-1024x803.png 1024w, https://tekrog.com/wp-content/uploads/2022/05/imagedata-2-300x235.png 300w, https://tekrog.com/wp-content/uploads/2022/05/imagedata-2-768x602.png 768w, https://tekrog.com/wp-content/uploads/2022/05/imagedata-2-1536x1204.png 1536w, https://tekrog.com/wp-content/uploads/2022/05/imagedata-2.png 1676w\" sizes=\"(max-width: 512px) 100vw, 512px\" /></figure>\n\n\n\n<h2><span id=\"i-21\">その他のトピック</span></h2>\n\n\n\n<p>以上で一通りの画像処理を紹介しましたが、Jimpでは次のようなこともできます。</p>\n\n\n\n<ul class=\"ulOnly\"><li>画像の生成</li><li>pHashアルゴリズムによる画像の類似度の計算</li><li>テキスト文字</li></ul>\n\n\n\n<p>興味のある方は、公式のドキュメントをお読みください</p>\n\n\n<div class=\"linkcard\"><div class=\"lkc-external-wrap\"><a class=\"lkc-link no_icon\" href=\"https://www.npmjs.com/package/jimp\" target=\"_blank\" rel=\"external noopener\"><div class=\"lkc-card\"><div class=\"lkc-info\"><img class=\"lkc-favicon\" src=\"https://www.google.com/s2/favicons?domain=www.npmjs.com\" alt=\"\" width=16 height=16 /><div class=\"lkc-domain\">npm</div>&nbsp;<div class=\"lkc-url-info\">https://www.npmjs.com/package/jimp</div></div><div class=\"lkc-content\"><figure class=\"lkc-thumbnail\"><img class=\"lkc-thumbnail-img\" src=\"//tekrog.com/wp-content/uploads/pz-linkcard/cache/b45ab5f42375fd9298d12bd571f22bcdf8f823ddd5e2a4919e9c8ebc2928475a.jpeg\" alt=\"\" /></figure><div class=\"lkc-title\"><div class=\"lkc-title-text\">jimp</div></div><div class=\"lkc-excerpt\">An image processing library written entirely in JavaScript (i.e. zero external or native dependencies). Latest version: 0.16.1, last published: 2 years ago. ...</div></div><div class=\"clear\"></div></div></a></div></div>\n\n\n\n<h2><span id=\"i-22\">まとめ</span></h2>\n\n\n\n<p>JavaScriptの画像処理ライブラリ「Jimp」をTypeScriptで使い、ブラウザ上で画像処理を行う方法を説明し、実際の処理結果とともに記載しました。紹介したとおり簡単に画像処理が行なえますし、空間フィルタリングやピクセル走査も簡単に行えます。基本的な画像処理のみ行いたいなら十分な機能を備えているでしょう。</p>\n",
    "date": "2022-05-21T01:34:28",
    "categories": {
      "nodes": [
        {
          "name": "HTML",
          "uri": "/category/html/",
          "posts": {
            "nodes": [
              {
                "title": "【Jimp】TypeScriptでブラウザ上の画像処理【ライブラリ使用】",
                "categories": {
                  "nodes": [
                    {
                      "uri": "/category/html/",
                      "name": "HTML"
                    },
                    {
                      "uri": "/category/typescript/",
                      "name": "TypeScript"
                    }
                  ]
                },
                "featuredImage": {
                  "node": {
                    "sourceUrl": "https://tekrog.com/wp-content/uploads/2022/05/thumb-ijimp-with-typescript-on-browser.jpg"
                  }
                }
              },
              {
                "title": "TypeScriptを用いたブラウザ上の画像処理【ライブラリ不使用】",
                "categories": {
                  "nodes": [
                    {
                      "uri": "/category/html/",
                      "name": "HTML"
                    },
                    {
                      "uri": "/category/typescript/",
                      "name": "TypeScript"
                    }
                  ]
                },
                "featuredImage": {
                  "node": {
                    "sourceUrl": "https://tekrog.com/wp-content/uploads/2022/02/thumb-image-processing-on-browser.jpg"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "TypeScript",
          "uri": "/category/typescript/",
          "posts": {
            "nodes": [
              {
                "title": "Themeの使い方～TypeScriptでstyled-components〜",
                "categories": {
                  "nodes": [
                    {
                      "uri": "/category/react/",
                      "name": "React"
                    },
                    {
                      "uri": "/category/typescript/",
                      "name": "TypeScript"
                    }
                  ]
                },
                "featuredImage": {
                  "node": {
                    "sourceUrl": "https://tekrog.com/wp-content/uploads/2023/03/thumb-styled-theme02.jpg"
                  }
                }
              },
              {
                "title": "【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】",
                "categories": {
                  "nodes": [
                    {
                      "uri": "/category/javascript/",
                      "name": "JavaScript"
                    },
                    {
                      "uri": "/category/typescript/",
                      "name": "TypeScript"
                    }
                  ]
                },
                "featuredImage": {
                  "node": {
                    "sourceUrl": "https://tekrog.com/wp-content/uploads/2023/03/thumb-promise-cocurrency.png"
                  }
                }
              },
              {
                "title": "【Promise】thenとasync/awaitの違い, 使い分けと同時利用法",
                "categories": {
                  "nodes": [
                    {
                      "uri": "/category/javascript/",
                      "name": "JavaScript"
                    },
                    {
                      "uri": "/category/typescript/",
                      "name": "TypeScript"
                    }
                  ]
                },
                "featuredImage": {
                  "node": {
                    "sourceUrl": "https://tekrog.com/wp-content/uploads/2023/02/thumb-await.png"
                  }
                }
              },
              {
                "title": "TypeScript4.9~4.6の新機能まとめ",
                "categories": {
                  "nodes": [
                    {
                      "uri": "/category/typescript/",
                      "name": "TypeScript"
                    }
                  ]
                },
                "featuredImage": {
                  "node": {
                    "sourceUrl": "https://tekrog.com/wp-content/uploads/2022/01/thumb-ts-4-1.jpg"
                  }
                }
              },
              {
                "title": "TypeScriptでstyled-components〜基礎から発展的な使い方〜",
                "categories": {
                  "nodes": [
                    {
                      "uri": "/category/react/",
                      "name": "React"
                    },
                    {
                      "uri": "/category/typescript/",
                      "name": "TypeScript"
                    }
                  ]
                },
                "featuredImage": {
                  "node": {
                    "sourceUrl": "https://tekrog.com/wp-content/uploads/2022/05/thumb-scs.jpg"
                  }
                }
              },
              {
                "title": "ProvideとInjectをComposition APIとTypeScriptで解説",
                "categories": {
                  "nodes": [
                    {
                      "uri": "/category/typescript/",
                      "name": "TypeScript"
                    },
                    {
                      "uri": "/category/vue-js/",
                      "name": "Vue.js"
                    }
                  ]
                },
                "featuredImage": {
                  "node": {
                    "sourceUrl": "https://tekrog.com/wp-content/uploads/2022/05/thumb-provide-inject.jpg"
                  }
                }
              }
            ]
          }
        }
      ]
    },
    "title": "【Jimp】TypeScriptでブラウザ上の画像処理【ライブラリ使用】",
    "featuredImage": {
      "node": {
        "sourceUrl": "https://tekrog.com/wp-content/uploads/2022/05/thumb-ijimp-with-typescript-on-browser.jpg"
      }
    },
    "uri": "/jimp-with-typescript-on-browser/"
  },
  "nextPost": {
    "nodes": [
      {
        "title": "JavaScript、TypeScriptで簡単画像処理【画像処理の知識不要】",
        "featuredImage": {
          "node": {
            "sourceUrl": "https://tekrog.com/wp-content/uploads/2022/04/thumb-easy-image-processing-by-ts.jpg"
          }
        },
        "uri": "/easy-image-processing-by-ts/"
      }
    ]
  },
  "prevPost": {
    "nodes": [
      {
        "title": "【PHP8.1】列挙型(Enum)について徹底解説",
        "featuredImage": {
          "node": {
            "sourceUrl": "https://tekrog.com/wp-content/uploads/2022/05/thumb-php-enum.jpg"
          }
        },
        "uri": "/how-to-use-enum-in-php8-1/"
      }
    ]
  },
  "recentPost": {
    "nodes": [
      {
        "title": "Themeの使い方～TypeScriptでstyled-components〜",
        "uri": "/styled-components-theme/",
        "featuredImage": {
          "node": {
            "sourceUrl": "https://tekrog.com/wp-content/uploads/2023/03/thumb-styled-theme02.jpg"
          }
        }
      },
      {
        "title": "【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】",
        "uri": "/typescript-promise-cocurrency/",
        "featuredImage": {
          "node": {
            "sourceUrl": "https://tekrog.com/wp-content/uploads/2023/03/thumb-promise-cocurrency.png"
          }
        }
      },
      {
        "title": "【GraphQL】beforeやafter, first, edgeとは何か？",
        "uri": "/graphql-relay-cursor/",
        "featuredImage": {
          "node": {
            "sourceUrl": "https://tekrog.com/wp-content/uploads/2023/02/thumb-relay.png"
          }
        }
      },
      {
        "title": "【Promise】thenとasync/awaitの違い, 使い分けと同時利用法",
        "uri": "/difference-between-then-and-await/",
        "featuredImage": {
          "node": {
            "sourceUrl": "https://tekrog.com/wp-content/uploads/2023/02/thumb-await.png"
          }
        }
      },
      {
        "title": "【es2022-2019】最近のJavaScriptの新機能を振り返る【まとめ】",
        "uri": "/recent-ecmascipt/",
        "featuredImage": {
          "node": {
            "sourceUrl": "https://tekrog.com/wp-content/uploads/2023/02/thumb-ecma2022.png"
          }
        }
      }
    ]
  },
  "categories": {
    "nodes": [
      {
        "count": 8,
        "name": "CSS",
        "uri": "/category/css/"
      },
      {
        "count": 2,
        "name": "HTML",
        "uri": "/category/html/"
      },
      {
        "count": 14,
        "name": "JavaScript",
        "uri": "/category/javascript/"
      },
      {
        "count": 3,
        "name": "Laravel",
        "uri": "/category/laravel/"
      },
      {
        "count": 5,
        "name": "PHP",
        "uri": "/category/php/"
      },
      {
        "count": 3,
        "name": "Python",
        "uri": "/category/python/"
      },
      {
        "count": 4,
        "name": "React",
        "uri": "/category/react/"
      },
      {
        "count": 2,
        "name": "Sass",
        "uri": "/category/sass/"
      },
      {
        "count": 14,
        "name": "TypeScript",
        "uri": "/category/typescript/"
      },
      {
        "count": 13,
        "name": "Vue.js",
        "uri": "/category/vue-js/"
      },
      {
        "count": 1,
        "name": "WordPress",
        "uri": "/category/wordpress/"
      },
      {
        "count": 3,
        "name": "アプリ",
        "uri": "/category/appli/"
      },
      {
        "count": null,
        "name": "お知らせ",
        "uri": "/category/news/"
      },
      {
        "count": null,
        "name": "三角関数",
        "uri": "/category/math/trigonometric/"
      },
      {
        "count": 5,
        "name": "数学",
        "uri": "/category/math/"
      }
    ]
  },
  "archivePosts": {
    "edges": [
      {
        "node": {
          "date": "2023-03-06T22:26:35"
        }
      },
      {
        "node": {
          "date": "2023-03-04T16:49:13"
        }
      },
      {
        "node": {
          "date": "2023-02-27T10:52:21"
        }
      },
      {
        "node": {
          "date": "2023-02-15T15:09:31"
        }
      },
      {
        "node": {
          "date": "2023-02-15T15:05:27"
        }
      },
      {
        "node": {
          "date": "2023-01-08T14:24:08"
        }
      },
      {
        "node": {
          "date": "2022-05-23T07:07:10"
        }
      },
      {
        "node": {
          "date": "2022-05-22T04:19:10"
        }
      },
      {
        "node": {
          "date": "2022-05-21T04:23:33"
        }
      },
      {
        "node": {
          "date": "2022-05-21T01:34:28"
        }
      },
      {
        "node": {
          "date": "2022-04-06T02:58:27"
        }
      },
      {
        "node": {
          "date": "2022-03-28T06:59:50"
        }
      },
      {
        "node": {
          "date": "2022-03-28T06:54:37"
        }
      },
      {
        "node": {
          "date": "2022-03-20T03:24:03"
        }
      },
      {
        "node": {
          "date": "2022-03-19T17:52:37"
        }
      },
      {
        "node": {
          "date": "2022-03-19T09:30:14"
        }
      },
      {
        "node": {
          "date": "2022-03-09T13:48:37"
        }
      },
      {
        "node": {
          "date": "2022-02-24T16:01:20"
        }
      },
      {
        "node": {
          "date": "2022-02-24T08:51:15"
        }
      },
      {
        "node": {
          "date": "2022-02-09T11:55:13"
        }
      },
      {
        "node": {
          "date": "2022-01-23T14:26:07"
        }
      },
      {
        "node": {
          "date": "2022-01-12T21:08:03"
        }
      },
      {
        "node": {
          "date": "2022-01-02T18:45:35"
        }
      },
      {
        "node": {
          "date": "2021-12-31T13:08:00"
        }
      },
      {
        "node": {
          "date": "2021-12-31T13:05:39"
        }
      },
      {
        "node": {
          "date": "2021-12-31T13:02:40"
        }
      },
      {
        "node": {
          "date": "2021-12-31T12:57:51"
        }
      },
      {
        "node": {
          "date": "2021-12-31T12:54:25"
        }
      },
      {
        "node": {
          "date": "2021-12-23T17:38:11"
        }
      },
      {
        "node": {
          "date": "2021-12-15T19:05:06"
        }
      },
      {
        "node": {
          "date": "2021-12-06T11:44:18"
        }
      },
      {
        "node": {
          "date": "2021-11-27T15:42:39"
        }
      },
      {
        "node": {
          "date": "2021-11-23T20:16:14"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:42:13"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:42:00"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:41:43"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:41:14"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:41:05"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:40:47"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:40:32"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:40:05"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:39:40"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:39:11"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:38:59"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:38:47"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:38:20"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:38:07"
        }
      },
      {
        "node": {
          "date": "2021-11-21T17:37:35"
        }
      }
    ]
  }
}
const Test = () => {
  const postData = {
    ...data.post,
    prevPost: data.prevPost,
    nextPost: data.nextPost,
  }
  const breadcrumbList = [
    {
      name: data.post.categories.nodes[0].name,
      href: data.post.categories.nodes[0].uri,
    },
    {
      name: data.post.title,
      href: data.post.uri,
    },
  ]
  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainPost post={postData} />
      </Layout>
    </>
  )
}

export default Test
