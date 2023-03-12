/**
 * 見出しレベルの要素のY座標を取得するフック
 */

import { useEffect, useState } from 'react'

const useHeadingPositions = (headingAnchors: string[]) => {
  const [headingPositions, setHeadingPositions] = useState<number[]>([])
  useEffect(() => {
    if (!headingAnchors.length) return
    const targets = headingAnchors.map(
      (anchor) => document.getElementById(anchor.slice(1)) as HTMLSpanElement
    )
    const positions = targets.map(
      (target) => target.getBoundingClientRect().top + window.scrollY
    )
    setHeadingPositions(positions)
  }, [headingAnchors])

  return headingPositions
}

export default useHeadingPositions
