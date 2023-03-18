import type { ReactNode } from 'react'
import styled from 'styled-components'

import { SIDE_AREA_WIDTH } from '@/constants/number'

const SideAreaWrapper = styled.aside`
  flex: 0 0 ${SIDE_AREA_WIDTH};
  display: flex;
`

const SideAreaInner = styled.div`
  display: grid;
  align-content: start;
  gap: 26px;
  height: 100%;
`

type SideAreaProps = {
  children: ReactNode
}

const SideArea = ({ children }: SideAreaProps) => {
  return (
    <SideAreaWrapper>
      <SideAreaInner>{children}</SideAreaInner>
    </SideAreaWrapper>
  )
}

export default SideArea
