'use client'
import * as stylex from '@stylexjs/stylex'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const GoBackMater = ({ sec, href = '/' }: { sec: number; href?: string }) => {
  const [count, setCount] = useState(sec)
  const router = useRouter()

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev - 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(id)
      router.push(href)
    }, sec * 1000)

    return () => clearInterval(id)
  }, [router, sec, href])

  return (
    <>
      <p>
        {count}秒後に
        <Link href="/" {...stylex.props(styles.link)}>
          トップへ戻ります。
        </Link>
      </p>
      <div {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.bar(sec))} />
      </div>
    </>
  )
}

const shrink = stylex.keyframes({
  from: { left: '100%' },
  to: { left: '0%' },
})

const styles = stylex.create({
  wrapper: {
    borderRadius: 10,
    width: '100%',
    height: 20,
    position: 'relative',
    background: `linear-gradient(90deg,rgba(186, 3, 3, 1) 0%,rgba(234, 255, 0, 1) 25%,rgba(67, 195, 91, 1) 50%,rgba(52, 48, 148, 1) 75%,rgba(179, 29, 196, 1) 100%, rgba(255, 0, 0, 1) 100%)`,
    marginTop: 10,
  },
  bar: (sec) => ({
    position: 'absolute',
    height: '100%',
    inset: 0,
    backgroundColor: '#fff',
    animation: `${shrink} linear ${sec}s forwards`,
  }),
  link: {
    color: '#1f2a82',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
})

export default GoBackMater
