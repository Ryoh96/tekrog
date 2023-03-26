import Head from 'next/head'

type MetaProps = {
  title?: string
  desc?: string
  url?: string
  imgUrl?: string
}

const Meta = ({
  title: pageTitle,
  desc: pageDesc,
  url: pageUrl,
  imgUrl,
}: MetaProps) => {
  const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE
  const siteType = process.env.NEXT_PUBLIC_SITE_TYPE
  const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE
  const siteIcon = process.env.NEXT_PUBLIC_SITE_ICON
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

  const desc = pageDesc ?? process.env.NEXT_PUBLIC_SITE_DESC

  const url = pageUrl ? `${siteUrl}${pageUrl}` : siteUrl

  const img = imgUrl ?? '/thumb-null.png'

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />

      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="2000" />
      <meta property="og:image:height" content="1125" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={img} />
      
    </Head>
  )
}

export default Meta
