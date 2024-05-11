export function meta({
  title: pageTitle,
  description: pageDesc,
  url: pageUrl,
  imgUrl,
}: {
  title?: string
  description?: string
  url?: string
  imgUrl?: string
}) {
  const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE
  const siteType = process.env.NEXT_PUBLIC_SITE_TYPE as 'website'
  const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE
  const siteIcon = process.env.NEXT_PUBLIC_SITE_ICON
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

  const description = pageDesc ?? process.env.NEXT_PUBLIC_SITE_DESC

  let url = pageUrl?.[0] === '/' ? pageUrl?.substring(1) : pageUrl
  url = url ? `${siteUrl}${url}` : siteUrl
  url = url?.replace(/\/$/, '') || url

  const img = imgUrl ?? '/thumb-tekrog.png'

  return {
    title,
    description,
    icons: siteIcon,
    openGraph: {
      title,
      description,
      url,
      siteName: siteTitle,
      type: siteType,
      locale: siteLocale,
      images: [
        {
          url: img,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
    twitter: {
      title,
      card: 'summary_large_image',
      description,
      image: img,
    },
  }
}
