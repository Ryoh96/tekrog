import * as stylex from '@stylexjs/stylex'
import Link from 'next/link'
import { SM } from '@/types/BreakPoints'
import Card from '@/app/_components/organisms/Card'
import NumericPager from '@/app/_components/organisms/NumericPager'
import { Post } from '@/graphql/generated/graphql'

const CardGridLayout = ({
  posts,
  totalPages,
  current = 1,
  type = '/',
}: {
  posts: any
  totalPages: number
  current?: number
  type?: string
}) => {
  return (
    <>
      <div {...stylex.props(styles.wrapper)}>
        {posts.length !== 0 ? (
          posts.map(
            (node: any) =>
              node && (
                <Link href={node.uri} key={node.uri}>
                  <article>
                    <Card
                      title={node.title}
                      categories={node.categories.nodes.map(
                        (category: any) => ({
                          name: category.name,
                          link: category.uri,
                        }),
                      )}
                      date={node.date}
                      imgUrl={
                        node.featuredImage?.node.sourceUrl ??
                        '/thumb-tekrog.png'
                      }
                      description={node.excerpt.slice(
                        3,
                        node.excerpt.length - 5,
                      )}
                    />
                  </article>
                </Link>
              ),
          )
        ) : (
          <div>
            <p>
              記事が存在しません。
              <Link href="/" {...stylex.props(styles.link)}>
                トップページへ戻る。
              </Link>
            </p>
          </div>
        )}
      </div>
      <div {...stylex.props(styles.pager)}>
        <NumericPager totalPages={totalPages} current={current} type={type} /> 
      </div> 
    </>
  )
}
const MQ_SM: SM = 560

const styles = stylex.create({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '1fr',
    gap: '32px 3%',
    marginBlock: 20,
    [`@media (max-width: ${MQ_SM}px)`]: {
      gridTemplateColumns: "1fr",
      gap: "24px"
    },
  },
  pager: {
    marginTop: 49,
  },
  link: {
    color: '#1f2a82',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
})

export default CardGridLayout
