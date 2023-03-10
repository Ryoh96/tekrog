/**
 * 見出しレベルの要素の名前を取得するフック
 */

import { useEffect, useState } from 'react'

const useHeadingNames = () => {
  const [headingNames, setHeadingsNames] = useState<[string, string][]>([])
  useEffect(() => {
    const headingAnchors =
      document.querySelectorAll<HTMLAnchorElement>('#toc_container a')
    const names = [...headingAnchors].map(
      (headingAnchor) => headingAnchor.innerText.split('\n') as [string, string]
    )
    setHeadingsNames(names)
  }, [])

  return headingNames
}

export default useHeadingNames
