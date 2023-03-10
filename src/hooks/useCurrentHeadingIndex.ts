/**
 * 現在のスクロール位置の見出しレベルのインデックスを返す
 */

import { useEffect, useState } from 'react'

const useCurrentHeadingIndex = (
  headingNum: number,
  headingPositions: number[]
) => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0)
  const offset = 300
  const setCurrentClass = () => {
    const currentPosition = window.scrollY
    for (let i = 0; i < headingNum; i++) {
      if (
        i < headingNum - 1 &&
        currentPosition + offset >= headingPositions[i] &&
        currentPosition + offset < headingPositions[i + 1]
      ) {
        setCurrentHeadingIndex(i)
      } else if (
        i === headingNum - 1 &&
        currentPosition + offset >= headingPositions[i]
      ) {
        setCurrentHeadingIndex(i)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setCurrentClass)
    return () => window.removeEventListener('scroll', setCurrentClass)
  })

  return currentHeadingIndex
}

export default useCurrentHeadingIndex
