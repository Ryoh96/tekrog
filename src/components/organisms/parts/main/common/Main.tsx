import MainPost from '@/components/organisms/parts/main/post/MainPost'
import MainSingle from '@/components/organisms/parts/main/single/MainSingle'

type MainProps = {
  isSingle: boolean
  data: any
  blurImg: string | null
}

const Main = ({ isSingle, data, blurImg }: MainProps) => {
  return (
    <>
      {isSingle ? (
        <MainSingle content={data.content} title={data.title}/>
      ) : (
        <MainPost post={data} blurImg={blurImg}/>
      )}
    </>
  )
}

export default Main
