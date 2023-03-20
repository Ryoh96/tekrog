import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { ReactNode } from 'react'
import styled, { css } from 'styled-components'

type RoundedIconButtonProps = {
  icon?: IconDefinition
  bgColor: string
  className?: string
  content?: {
    text: string
    fontFamily: string
    fontWeight: number
  }
}

const RoundedIconButtonWrapper = styled.div<
  Pick<RoundedIconButtonProps, 'bgColor' | 'content'>
>`
  display: grid;
  place-content: center;
  background: ${(props) => props.bgColor};
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1;
  font-size: 20px;
  color: #fff;
  border-radius: 50%;
  overflow: hidden;

  ${({ content }) => {
    if (content) {
      return css`
        ::before {
          content: \"${content.text}\";
          font-family: ${content.fontFamily};
          font-weight: ${content.fontWeight};
        }
      `
    }
  }}

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: ${({ theme }) => theme.boxShadow.far};
  }

  > * {
    font-size: 20px;
    width: 30px;
  }

  ${({ bgColor }) => {
    if (bgColor === '#05c756') {
      return css`
        svg {
          color: ${bgColor};
          background-color: #fff;
          font-size: 100px;
          transform: scale(1.4);
        }
      `
    }
  }}
`

const RoundedIconButton = ({
  icon,
  bgColor,
  className,
  content,
}: RoundedIconButtonProps) => {
  return (
    <RoundedIconButtonWrapper
      className={className}
      bgColor={bgColor}
      content={content}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
    </RoundedIconButtonWrapper>
  )
}

export default RoundedIconButton
