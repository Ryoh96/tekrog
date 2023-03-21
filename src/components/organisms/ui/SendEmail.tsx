"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

type SendEmailProps = {
  sec?: number
}

const BarWrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 20px;
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(186, 3, 3, 1) 0%,
    rgba(234, 255, 0, 1) 25%,
    rgba(67, 195, 91, 1) 50%,
    rgba(52, 48, 148, 1) 75%,
    rgba(179, 29, 196, 1) 100%,
    rgba(255, 0, 0, 1) 100%
  );
`

const Bar = styled.div<{ sec: number }>`
  position: absolute;
  height: 100%;
  inset: 0;
  background-color: #fff;
  animation: shrink linear ${({ sec }) => sec}s forwards;

  @keyframes shrink {
    0% {
      left: 100%;
    }

    100% {
      left: 0;
    }
  }
`

const Bold = styled.p`
  font-weight: bold;
`

const SendEmail = ({ sec = 10 }: SendEmailProps) => {
  const [count, setCount] = useState(sec)
  const router = useRouter()

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev - 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(id)
      router.push('/')
    }, sec * 1000)

    return () => clearInterval(id)
  }, [sec])

  return (
    <>
      <p>お問い合わせが完了しました！</p>
      <p>メッセージが確認でき次第、折り返しご連絡致します。</p>
      <div style={{ paddingBottom: '30px' }} />
      <Bold>※{count}秒後にトップページへ戻ります</Bold>
      <BarWrapper>
        <Bar sec={sec} />
      </BarWrapper>
    </>
  )
}

export default SendEmail
