import MainPost from './MainPost'
import MainSingle from './MainSingle'

type MainProps = {
  isSingle: boolean
  data: any
}

const Main = ({ isSingle, data }: MainProps) => {
  console.log(88888, isSingle)
  return (
    <>
    {isSingle ? 
      <MainSingle content={data.page.content} /> : 
      <MainPost post={data} />}
    </>
  )
}

export default Main
