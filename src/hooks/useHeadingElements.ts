/**
 * 見出しレベルの要素を返すフック
 */

import { useEffect, useState } from 'react'

const useHeadingElements = (headingAnchors: string[]) => {
  const [elements, setElements] = useState<HTMLElement[]>([])
  useEffect(() => {
    if (!headingAnchors.length) return
    const targets = headingAnchors.map(
      (anchor) => document.getElementById(anchor.slice(1)) as HTMLSpanElement
    )
    setElements(targets)
  }, [headingAnchors])

  return elements
}

export default useHeadingElements
