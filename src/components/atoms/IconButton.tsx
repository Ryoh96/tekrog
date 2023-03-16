import type { ReactNode } from 'react'
import styled from 'styled-components'

const IconButtonWrapper = styled.div`
  display: grid;
  place-content: center;
  background: ${({theme}) => theme.gradient.main};
  height: 48px;
  width: 44px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1;
  font-size: 20px;
  color: #fff;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: ${({ theme }) => theme.boxShadow.far};
  }

  > * {
    font-size: 20px;
  }
`
type IconButtonProps = {
  icon: ReactNode
  className?: string
}

const IconButton = ({ icon, className }: IconButtonProps) => {
  return <IconButtonWrapper className={className}>{icon}</IconButtonWrapper>
}

export default IconButton
