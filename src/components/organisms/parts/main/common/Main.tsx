import MainPost from '@/components/organisms/parts/main/post/MainPost'
import MainSingle from '@/components/organisms/parts/main/single/MainSingle'
import type {
  GetFixedPageQuery,
  GetPostPageQuery,
} from '@/graphql/generated/request'
import type {
  FixedPageQuery,
  NextPost,
  PostPageQuery,
  PrevPost,
} from '@/types/Page'

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
          <MainSingle
            content={data?.content as string}
            title={data?.title as string}
          />
        </>
      ) : (
        <MainPost post={data as PostPageQuery} blurImg={blurImg} />
      )}
    </>
  )
}

export default Main
