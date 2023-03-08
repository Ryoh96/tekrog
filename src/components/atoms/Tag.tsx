import type { ReactNode } from 'react'
import styled from 'styled-components'

type TagProps = {
  children: ReactNode
  bgColor: `#${string}`
  color: `#${string}`
  border?: {
    width: number
    color: `#${string}`
  }
}

const TagWrapper = styled.span<TagProps>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: ${({ border }) => (border ? 'solid' : 'none')};
  border-width: ${({ border }) => border?.width};
  border-color: ${({ border }) => border?.color};
  font-size: 12px;
  padding: 5px 10px;
  display: inline-flex;
  gap: 5px;
  flex-wrap: nowrap;
  border-radius: 5px;
  align-items: center;
  transition: all 0.3s;
  z-index: 1;
  width: fit-content;

  &:hover,
  &:focus {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`

const Tag = ({ children, ...props }: TagProps) => {
  return <TagWrapper {...props}>{children}</TagWrapper>
}

export default Tag
