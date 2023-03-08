import type { ReactNode } from 'react'
import styled from 'styled-components'

import TitleBlock from '../atoms/TitleBlock'

const SideContentContainer = styled.div`
  padding: 20px 12px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}) {
    padding: 12px;
  }

  /* @media (prefers-color-scheme: dark) {
    background-color: #292a2d;
    color: #fff;
  } */
`

const SideContentTitleBlock = styled(TitleBlock)`
  border-radius: 10px 10px 0 0;
  padding-block-end: 14px;
`

type SideContentProps = {
  title: string
  children: ReactNode
}

const SideContent = ({ title, children }: SideContentProps) => {
  return (
    <div>
      <SideContentTitleBlock title={title} />
      <SideContentContainer>{children}</SideContentContainer>
    </div>
  )
}

export default SideContent
