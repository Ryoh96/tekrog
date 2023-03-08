import type { ReactNode } from 'react'
import styled from 'styled-components'

const IconButtonWrrper = styled.div`
  display: grid;
  place-content: center;
  background: #1f2a82;
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
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
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
  return <IconButtonWrrper className={className}>{icon}</IconButtonWrrper>
}

export default IconButton
