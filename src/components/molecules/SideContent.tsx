import type { ReactNode } from 'react'
import styled from 'styled-components'

import TitleBlock from '../atoms/TitleBlock'

const SideContentContainer = styled.div`
  padding: 20px 16px;
  background-color: #fff;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}) {
    padding: 15px;
  }
`

type SideContentProps = {
  title: string
  children: ReactNode
}

const SideContent = ({ title, children }: SideContentProps) => {
  return (
    <div>
      <TitleBlock title={title} />
      <SideContentContainer>{children}</SideContentContainer>
    </div>
  )
}

export default SideContent
