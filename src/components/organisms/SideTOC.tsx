import { useEffect, useState } from 'react'

import useHeadingAnchors from '@/hooks/useHeadingAnchors'
import useHeadingNames from '@/hooks/useHeadingNames'
import useHeadingPositions from '@/hooks/useHeadingPositions'

import SideContent from '../molecules/SideContent'

const SideTOC = () => {
  const headingAnchors = useHeadingAnchors()
  const headingNames = useHeadingAnchors()
  const headingPositions = useHeadingPositions(headingAnchors)

  return (
    <SideContent title="目次">
      {headingNames.map((a) => (
        <p key={a[0]}>{a}</p>
      ))}
    </SideContent>
  )
}

export default SideTOC
