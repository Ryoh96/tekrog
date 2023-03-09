import {
  faChevronLeft,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import styled, { css } from 'styled-components'

type PrevNextPagerProps = {
  mode: 'prev' | 'next'
  imgUrl: string
  title: string
}

const PrevNextPagerWrapper = styled.div<{ mode: 'prev' | 'next' }>`
  display: flex;
  ${({ mode }) =>
    mode === 'next' &&
    css`
      flex-direction: row-reverse;
      text-align: right;
    `}
  gap: 4.2%;
  min-height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  transition: 0.3s;
  z-index: 2;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  width: 92%;
  position: relative;
  margin-inline: auto;
  padding: 8px;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    z-index: 3;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

    &::after {
      z-index: -1;
    }
  }

  &::after {
    position: absolute;
    color: #f3f3f3;
    font-size: 90px;
    bottom: 0;
    font-weight: 700;
    line-height: 1;
    font-style: italic;
    z-index: 1;

    ${({ mode }) =>
      mode === 'prev' &&
      css`
        content: 'Prev';
        right: 30px;
      `}
    ${({ mode }) =>
      mode === 'next' &&
      css`
        content: 'Next';
        left: 30px;
      `}
  }
`

const IconWrapper = styled.div<{ mode: 'prev' | 'next' }>`
  flex: 1 1 auto;
  text-align: center;
  z-index: 2;

  svg {
    font-size: 40px;
    color: #555;
  }

  ${({ mode }) =>
    mode === 'next' &&
    css`
      transform: rotate(180deg);
    `}
`

const ImageWrapper = styled.figure`
  position: relative;
  min-height: 80px;
  flex: 0 0 120px;
  z-index: 2;

  img {
    position: static;
  }
`

const Title = styled.p`
  flex: 1 1 auto;
  z-index: 2;
`

const PrevNextPager = ({ mode, imgUrl, title }: PrevNextPagerProps) => {
  return (
    <PrevNextPagerWrapper mode={mode}>
      <IconWrapper mode={mode}>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </IconWrapper>
      <ImageWrapper>
        <Image
          src={imgUrl}
          alt={title}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </ImageWrapper>
      <Title>{title}</Title>
    </PrevNextPagerWrapper>
  )
}

export default PrevNextPager