import type { ReactNode } from 'react'
import styled from 'styled-components'

const SideAreaWrapper = styled.aside`
  flex: 0 0 324px;
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
