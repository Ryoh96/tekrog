'use client'

import React from 'react'
import Breadcrumb from './Breadcrumb'
import BlogName from '@/images/blog_name.png'
import Image from 'next/image'
import * as stylex from '@stylexjs/stylex'
import { SP } from '@/types/BreakPoints'
import { usePathname, useSearchParams } from 'next/navigation'
import style from './style.module.scss'
import { tokens } from '../../../_styles/tokens.stylex'
import { isPartialMatch } from '@/app/_utils/isPartialMatchString'
import HeroWithThumbnail from './HeroWithThumbnail'

const notThumbnailPageList = [
  '/about',
  '/category',
  '/contact',
  '/archive',
  '/page',
  '/search/',
  '/privacy-policy',
]

const Hero = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams().get('s') ?? undefined
  const hasNotThumbnail = isPartialMatch(pathname, notThumbnailPageList) || pathname === "/"

  return (
    <div className={style.wrapper}>
      {hasNotThumbnail ? (
        <>
          <div {...stylex.props(styles.container)}>
            <Image
              src={BlogName}
              alt="TekRog"
              sizes="100vw"
              {...stylex.props(styles.blogName)}
            />
            <p {...stylex.props(styles.p)}>プログラミングの備忘録と情報発信</p>
            <div {...stylex.props(styles.breadcrumb)}>
              <Breadcrumb pathname={pathname} searchParams={searchParams} />
            </div>
          </div>
        </>
      ) : (
        <HeroWithThumbnail
          pathname={pathname}
          breadCrumbStyle={styles.breadcrumb}
        />
      )}

      <div {...stylex.props(styles.filter)} />
    </div>
  )
}

const MQ_SP: SP = 768

const rotate = stylex.keyframes({
  from: { [tokens.angle]: '0deg' },
  to: { [tokens.angle]: '360deg' },
})

const styles = stylex.create({
  blogName: {
    position: 'relative',
    zIndex: 10,
    marginBlockStart: '0.2em',
    width: {
      default: 168,
      [`@media (max-width: ${MQ_SP}px)`]: 130,
    },
    height: 'auto',
  },
  container: {
    background: `linear-gradient(${tokens.angle}, #5c166e 0%,#28325d 100%)`,
    paddingBlock: 50,
    height: '100%',
    textAlign: 'center',
    zIndex: -2,
    animationName: rotate,
    animationDuration: '10s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationDirection: 'revert',
    [`@media (max-width: ${MQ_SP}px)`]: {
      paddingBlock: 'clamp(36px, 6.5vw, 50px)',
    },
  },
  filter: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  p: {
    color: '#fff',
    fontSize: 16,
    minHeight: 0,
    zIndex: 10,
    position: 'relative',
    textShadow: '1px 1px 5px #000',
    marginBlockStart: 10,
    paddingBottom: 20,
    [`@media (max-width: ${MQ_SP}px)`]: {
      fontSize: 'clamp(14px, 2vw, 16px)',
    },
  },
  breadcrumb: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#0006',
    zIndex: 5,
  },
})

export default Hero
