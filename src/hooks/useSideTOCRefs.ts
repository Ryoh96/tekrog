import type { RefObject } from 'react'
import { createRef, useEffect, useRef } from 'react'

const useSideTOCRefs = (
  headingNames: [string, string][],
  currentHeadingIndex: number
) => {
  const sideContentInnerRef = useRef<HTMLDivElement | null>()
  const offset = 60
  const titleRef = useRef<RefObject<HTMLAnchorElement>[]>([])

  headingNames.forEach((_, index) => {
    titleRef.current[index] = createRef<HTMLAnchorElement>()
  })

  useEffect(() => {
    sideContentInnerRef.current?.scroll({
      top:
        (titleRef.current?.[currentHeadingIndex]?.current
          ?.offsetTop as number) - offset,
    })
  }, [currentHeadingIndex])

  return [sideContentInnerRef, titleRef] as const
}

export default useSideTOCRefs