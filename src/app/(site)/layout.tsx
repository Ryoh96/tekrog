import PageContainer from '../_components/layouts/PageContainer'
import SearchForm from '../_components/organisms/SearchForm'
import TwoColumnsContainer from './_components/layout/TwoColumnsContainer'
import MainArea from './_components/layout/TwoColumnsContainer/MainArea'
import SideArea from './_components/layout/TwoColumnsContainer/SideArea'
import SideArchives from './_components/layout/TwoColumnsContainer/SideArea/SideArchives'
import SideCategories from './_components/layout/TwoColumnsContainer/SideArea/SideCategories'
import SideRecentPosts from './_components/layout/TwoColumnsContainer/SideArea/SideRecentPosts'
import SideTOC from './_components/layout/TwoColumnsContainer/SideArea/SideTOC'
import SideGoogleAdsense from './_components/layout/TwoColumnsContainer/SideArea/SideGoogleAdsense'
import PageHead from './_components/templates/PageHead'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageContainer>
        <PageHead />
        <TwoColumnsContainer>
          <MainArea>{children}</MainArea>
          <SideArea>
            <SearchForm />
            <SideRecentPosts />
            <SideGoogleAdsense />
            <SideCategories />
            <SideArchives />
            <SideTOC />
          </SideArea>
        </TwoColumnsContainer>
      </PageContainer>
    </>
  )
}

export default Layout
