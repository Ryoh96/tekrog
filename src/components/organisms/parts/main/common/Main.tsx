import MainPost from '@/components/organisms/parts/main/post/MainPost'
import MainSingle from '@/components/organisms/parts/main/single/MainSingle'

type MainProps = {
  isSingle: boolean
  data: any
}

const Main = ({ isSingle, data }: MainProps) => {
  return (
    <>
      {isSingle ? (
        <MainSingle content={data.page.content} />
      ) : (
        <MainPost post={data} />
      )}
    </>
  )
}

export default Main
