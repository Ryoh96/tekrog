import Image from 'next/image'
import styled from 'styled-components'

import { DEFAULT_IMAGE } from '@/constants/strings'

type HorizontalCardProps = {
  src?: string
  title: string
}

const HorizontalCardWrapper = styled.div`
  display: flex;
  gap: 6px;
  box-shadow: ${({ theme }) => theme.boxShadow.near};
  z-index: 2;
  min-height: 82px;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  height: 100px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.boxShadow.far};
  }
`

const ImageWrapper = styled.figure`
  flex: 0 0 100px;
  position: relative;
  height: 100%;

  img {
    animation: fade 2s;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const Title = styled.p`
  flex: 1 1 auto;
  font-weight: 700;
  font-size: 14px;
  padding: 4px;
`

const HorizontalCard = ({
  src = DEFAULT_IMAGE,
  title,
}: HorizontalCardProps) => {
  return (
    <HorizontalCardWrapper>
      <ImageWrapper>
        <Image
          src={src}
          alt={title}
          width={100}
          height={100}
          style={{
            objectFit: 'cover',
          }}
          sizes="200px"
          quality={70}
        />
      </ImageWrapper>
      <Title>{title}</Title>
    </HorizontalCardWrapper>
  )
}

export default HorizontalCard
