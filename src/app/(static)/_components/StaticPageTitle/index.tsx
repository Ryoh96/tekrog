'use client'

import * as stylex from '@stylexjs/stylex'
import { gradient } from '../../../_styles/gradient.stylex'
import { SP, XL } from '@/types/BreakPoints'
import { usePathname } from 'next/navigation'

const StaticPageTitle = () => {
  const pathname = usePathname()
  let title: string

  if (pathname === '/about') {
    title = 'このページについて'
  } else if (pathname === '/privacy-policy') {
    title = 'プライバシーポリシー'
  } else if (pathname === '/contact') {
    title = 'お問い合わせ'
  } else if (pathname === '/contact/thanks') {
    title = 'お問い合わせ完了'
  } else {
    title = '404 ページが見つかりません'
  }

  return <h1 {...stylex.props(styles.h1)}>{title}</h1>
}

const MQ_XL: XL = 1300
const MQ_SP: SP = 768

const styles = stylex.create({
  h1: {
    background: gradient.accent,
    backgroundClip: 'text',
    color: 'rgba(0, 0, 0, 0)',
    textAlign: 'center',
    paddingInline: 10,
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 24,
    lineHeight: 1.6,
    marginTop: 28,
    [`@media (min-width: ${MQ_XL}px)`]: {
      fontSize: 48,
      marginBlock: '10px 36px',
    },
    [`@media (max-width: ${MQ_SP}px)`]: {
      fontSize: 26,
    },
  },
})

export default StaticPageTitle
