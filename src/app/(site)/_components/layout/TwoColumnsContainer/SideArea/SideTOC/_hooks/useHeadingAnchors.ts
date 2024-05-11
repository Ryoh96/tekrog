/**
 * 見出しレベルの要素へ割り振られたID値を取得するフック
 */

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const useHeadingAnchors = (path: string) => {
  const [headingAnchors, setHeadingAnchors] = useState<string[]>([])
  useEffect(() => {
    const headingAnchors =
      document.querySelectorAll<HTMLAnchorElement>('#toc_container a')
    const ancs = Array.from(headingAnchors).map(
      (headingAnchor) => headingAnchor.hash,
    )
    setHeadingAnchors(ancs)
  }, [path])

  return headingAnchors
}

export default useHeadingAnchors
