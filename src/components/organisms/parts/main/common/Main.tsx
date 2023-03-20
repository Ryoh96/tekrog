import FixedMain from '@/components/organisms/parts/main/fixed/FixedMain'
import PostMain from '@/components/organisms/parts/main/post/PostMain'
import type { FixedPageQuery, PostPageQuery } from '@/types/Page'

type MainProps = {
  data: FixedPageQuery | PostPageQuery

  blurImg: string | null
  isSingle: boolean
}

const Main = ({ data, blurImg, isSingle }: MainProps) => {
  return (
    <>
      {isSingle ? (
        <>
          <FixedMain
            content={data?.content as string}
            title={data?.title as string}
          />
        </>
      ) : (
        <PostMain post={data as PostPageQuery} blurImg={blurImg} />
      )}
    </>
  )
}

export default Main
