import Image from 'next/image'
import React from 'react'
import {
  GetThumbnailAndTitleDocument,
  GetThumbnailAndTitleQuery,
} from '@/graphql/generated/request'
import { useSuspenseQuery } from '@apollo/client'
import style from '../style.module.scss'
import Breadcrumb from '../Breadcrumb'
import * as stylex from '@stylexjs/stylex'

const HeroWithThumbnail = ({
  pathname,
  breadCrumbStyle,
}: {
  pathname: string
  breadCrumbStyle: stylex.StyleXStyles
}) => {
  const { data } = useSuspenseQuery<GetThumbnailAndTitleQuery>(
    GetThumbnailAndTitleDocument,
    {
      variables: {
        name: pathname.substring(1),
      },
    },
  )

  const imgUrl =
    data?.posts.nodes[0]?.featuredImage?.node.sourceUrl ?? '/thumb-tekrog.png'

  return (
    <>
      <figure className={style.figure}>
        <Image
          src={imgUrl}
          alt="thumbnail"
          fill
          style={{
            objectFit: 'cover',
            aspectRatio: '1700 / 825',
          }}
          sizes="50vw"
          quality={70}
          loading="eager"
          priority
          className={style.img}
        />
      </figure>
      <div {...stylex.props(breadCrumbStyle)}>
        <Breadcrumb pathname={pathname} title={data.posts.nodes[0]?.title} />
      </div>
    </>
  )
}

export default HeroWithThumbnail
