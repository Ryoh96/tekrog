import Link from 'next/link'
import Base from './_components/atoms/Base'
import PageContainer from './_components/layouts/PageContainer'
import StaticPageTitle from './(static)/_components/StaticPageTitle'
import * as stylex from '@stylexjs/stylex'

export default function NotFound() {
  return (
    <PageContainer isNarrow>
      <StaticPageTitle />
      <Base>
        <h2 {...stylex.props(styles.h2)}>404 Not Found</h2>
        <p>お探しのページが見つかりません</p>
        <Link href="/" {...stylex.props(styles.link)}>
          こちらからトップページへお戻りください。
        </Link>
      </Base>
    </PageContainer>
  )
}

const styles = stylex.create({
  link: {
    color: '#1f2a82',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    marginBottom: 8,
  },
})
