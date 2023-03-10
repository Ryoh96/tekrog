/**
 * 見出しレベルの要素へ割り振られたID値を取得するフック
 */

import { useEffect, useState } from "react"

const useHeadingAnchors = () => {
  const [headingAnchors, setHeadingAnchors] = useState<string[]>([])
  useEffect(() => {
    const headingAnchors =
      document.querySelectorAll<HTMLAnchorElement>('#toc_container a')
    const ancs = [...headingAnchors].map((headingAnchor) => headingAnchor.hash)
    setHeadingAnchors(ancs)
  }, [])

  return headingAnchors
}

export default useHeadingAnchors