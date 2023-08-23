import FixedMain from '@/components/templates/main/fixed/FixedMain'
import PostMain from '@/components/templates/main/post/PostMain'
import type { FixedPageQuery, PostPageQuery } from '@/types/Page'

type MainProps = {
  data: FixedPageQuery | PostPageQuery
  isSingle: boolean
}

const Main = ({ data, isSingle }: MainProps) => {
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
        <PostMain post={data as PostPageQuery} />
      )}
    </>
  )
}

export default Main
