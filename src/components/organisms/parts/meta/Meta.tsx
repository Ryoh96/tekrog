import Head from 'next/head'

type MetaProps = {
  pageTitle?: string
}

const Meta = ({ pageTitle }: MetaProps) => {
  const title = pageTitle
    ? `${pageTitle} | ${process.env.NEXT_PUBLIC_SITE_TITLE}`
    : process.env.NEXT_PUBLIC_SITE_TITLE
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
    </Head>
  )
}

export default Meta
