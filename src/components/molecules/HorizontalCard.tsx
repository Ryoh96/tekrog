import Image from 'next/image'
import styled from 'styled-components'

type HorizontalCardProps = {
  src: string
  title: string
}

const HorizontalCardWrapper = styled.div`
  display: flex;
  gap: 6px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  z-index: 2;
  min-height: 82px;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  height: 100px;
  transition: all .3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`

const ImageWrapper = styled.figure`
  flex: 0 0 100px;
  position: relative;
  height: 100%;
`

const Title = styled.p`
  flex: 1 1 auto;
  font-weight: 700;
  font-size: 14px;
  padding: 4px;
`

const HorizontalCard = ({ src, title }: HorizontalCardProps) => {
  return (
    <HorizontalCardWrapper>
      <ImageWrapper>
        <Image
          src={src}
          alt={title}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </ImageWrapper>
      <Title>{title}</Title>
    </HorizontalCardWrapper>
  )
}

export default HorizontalCard
