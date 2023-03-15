import Postbody from '@/components/organisms/parts/main/post/PostBody'

type MainSingleProps = {
  content: any
}

const MainSingle = ({ content }: MainSingleProps) => {
  return (
    <>
      <Postbody content={content} />
    </>
  )
}

export default MainSingle
