import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styled from 'styled-components'

import HorizontalCard from '@/components/molecules/HorizontalCard'
import SideContent from '@/components/molecules/SideContent'

const dummy = [
  {
    src: '/thumb.jpg',
    title: `【TypeScript】allとraceだけじゃない！4つのPromise並列処理の違い【JavaScript】`,
    href: '/hoge',
  },
  {
    src: '/thumb.jpg',
    title: `Themeの使い方～TypeScriptでstyled-components〜`,
    href: '/hoge',
  },
  {
    src: '/thumb.jpg',
    title: `dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy`,
    href: '/hoge',
  },
  {
    src: '/thumb.jpg',
    title: `dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy`,
    href: '/hoge',
  },
  {
    src: '/thumb.jpg',
    title: `dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy`,
    href: '/hoge',
  },
]

const HorizontalCardWrapper = styled.div`
  display: grid;
  gap: 18px;
`

const RecentPosts = () => {
  return (
    <SideContent
      title="最近の記事"
      icon={<FontAwesomeIcon icon={faNoteSticky} />}
    >
      <HorizontalCardWrapper>
        {dummy.map((data, index) => (
          <Link href={data.href} key={index}>
            <article>
              <HorizontalCard src={data.src} title={data.title} />
            </article>
          </Link>
        ))}
      </HorizontalCardWrapper>
    </SideContent>
  )
}

export default RecentPosts
