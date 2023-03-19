import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'

import type { NextPost, PrevPost } from '@/types/Page'

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
  box-shadow: ${({ theme }) => theme.boxShadow.near};
  z-index: 2;
  width: 92%;
  position: relative;
  margin-inline: auto;
  padding: 8px;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    z-index: 3;
    box-shadow: ${({ theme }) => theme.boxShadow.far};

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
  flex: 0 0 auto;
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
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 14px;
  }
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
          sizes="15vw"
          quality={60}
        />
      </ImageWrapper>
      <Title>{title}</Title>
    </PrevNextPagerWrapper>
  )
}

const PrevNextPagersWrapper = styled.div`
  display: grid;
  gap: 30px;
`

type PrevNextPagersProp = {
  prevPost: PrevPost
  nextPost: NextPost
}

const PrevNextPagers = ({ prevPost, nextPost }: PrevNextPagersProp) => {
  return (
    <PrevNextPagersWrapper>
      {prevPost && (
        <Link href={prevPost.uri as string}>
          <PrevNextPager
            mode="prev"
            imgUrl={prevPost.featuredImage?.node.sourceUrl as string}
            title={prevPost.title as string}
          />
        </Link>
      )}
      {nextPost && (
        <Link href={nextPost.uri as string}>
          <PrevNextPager
            mode="next"
            imgUrl={nextPost.featuredImage?.node.sourceUrl as string}
            title={nextPost.title as string}
          />
        </Link>
      )}
    </PrevNextPagersWrapper>
  )
}

export default PrevNextPagers
