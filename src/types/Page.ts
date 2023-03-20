import type {
  GetFixedPageQuery,
  GetPostPageQuery,
} from '@/graphql/generated/request'

export type PrevPost = NonNullable<
  GetPostPageQuery['prevPost']
>['nodes'][number]
export type NextPost = NonNullable<
  GetPostPageQuery['nextPost']
>['nodes'][number]

export type FixedPageQuery = GetFixedPageQuery['page']
export type PostPageQuery =
  | GetPostPageQuery['post'] & {
      prevPost: PrevPost
    } & {
      nextPost: NextPost
    }
