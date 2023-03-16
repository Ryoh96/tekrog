import type { ReactNode } from 'react'
import styled, { css } from 'styled-components'

type TagProps = {
  children: ReactNode
  bgColor: `#${string}`
  color: `#${string}`
  border?: {
    width: number
    color: `#${string}`
  }
  hoverable?: boolean
}

const TagWrapper = styled.span<TagProps>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: ${({ border }) => (border ? 'solid' : 'none')};
  border-width: ${({ border }) => border?.width};
  border-color: ${({ border }) => border?.color};
  font-size: 12px;
  padding: 5px 5px;
  display: inline-flex;
  gap: 5px;
  flex-wrap: nowrap;
  border-radius: 5px;
  align-items: center;
  transition: all 0.3s;
  z-index: 1;
  /* width: fit-content; */

  ${({ hoverable }) =>
    hoverable &&
    css`
      &:hover,
      &:focus {
        transform: scale(1.05);
        z-index: 2;
        box-shadow: ${({ theme }) => theme.boxShadow.far};
      }
    `}
`

const Tag = ({ children, hoverable = true, ...props }: TagProps) => {
  return (
    <TagWrapper {...props} hoverable={hoverable}>
      {children}
    </TagWrapper>
  )
}

export default Tag
