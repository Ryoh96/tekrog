import { getClient } from '@/graphql/apollo/client'
import {
  GetAllCategoriesDocument,
  GetAllCategoriesQuery,
} from '@/graphql/generated/request'
import Image from 'next/image'
import Link from 'next/link'
import * as stylex from '@stylexjs/stylex'
import { shadow } from '../../_styles/shadow.stylex'
import { SP } from '@/types/BreakPoints'
import { meta } from '@/app/_libs/meta'

export function generateMetadata() {
  return meta({
    title: 'カテゴリー一覧',
    description: 'このブログのカテゴリー一覧です。',
    url: '/category',
  })
}

const Page = async () => {
  const { data } = await getClient().query<GetAllCategoriesQuery>({
    query: GetAllCategoriesDocument,
  })

  const url = data.mainCategory.nodes.map((node) =>
    node.uri && node.uri.split('/').length === 5
      ? node.uri.slice(node.uri.indexOf('/', node.uri.indexOf('/') + 1))
      : node.uri,
  )

  return (
    <div {...stylex.props(styles.div)}>
      {data.mainCategory.nodes.map((node, index) => (
        <Link
          href={url[index] ?? ''}
          key={node.uri}
          {...stylex.props(styles.link)}
        >
          <Image
            src={`/ttl-${node.slug}.png`}
            alt=""
            height={44}
            width={44}
            style={{ objectFit: 'contain' }}
          />
          <p {...stylex.props(styles.p)}>{node.name}</p>
        </Link>
      ))}
    </div>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  div: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
  },
  link: {
    display: 'flex',
    gap: '0.5em',
    alignItems: 'center',
    boxShadow: shadow.near,
    padding: 10,
    borderRadius: 10,
    transition: 'all 0.3s',
    zIndex: 1,
    position: 'relative',
    ':hover': {
      transform: 'scale(1.05)',
      zIndex: 2,
      boxShadow: shadow.far,
    },
  },
  p: {
    fontSize: 20,
    [`@media (max-width: ${MQ_SP}px)`]: {
      fontSize: 18,
    },
  },
})

export default Page
