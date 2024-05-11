/**
 * 見出しレベルの要素の名前を取得するフック
 */

import { useEffect, useState } from 'react'

const useHeadingNames = (path: string) => {
  const [headingNames, setHeadingsNames] = useState<[string, string][]>([])
  useEffect(() => {
    const headingAnchors =
      document.querySelectorAll<HTMLAnchorElement>('#toc_container a')
    const names = Array.from(headingAnchors).map(
      (headingAnchor) =>
        headingAnchor.innerText.split('\n') as [string, string],
    )
    setHeadingsNames(names)
  }, [path])

  return headingNames
}

export default useHeadingNames
