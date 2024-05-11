import { Suspense } from 'react'
import Base from '../_components/atoms/Base'
import PageContainer from '../_components/layouts/PageContainer'
import StaticPageTitle from './_components/StaticPageTitle'
import Loading from '../loading'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageContainer isNarrow>
      <Suspense fallback={<Loading />}>
        <StaticPageTitle />
      </Suspense>
      <Base>{children}</Base>
    </PageContainer>
  )
}

export default Layout
