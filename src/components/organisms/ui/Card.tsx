import Image from 'next/image'
import styled from 'styled-components'

import _DateTime from '@/components/atoms/DateTime'
import CategoryTag from '@/components/molecules/CategoryTag'

type CardProps = {
  imgUrl: string
  date?: string
  title: string
  categories?: {
    name: string
    uri: string
  }[]
  desc?: string
}

const CardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  transition: all 0.3s;
  z-index: 1;
  display: grid;
  align-content: space-between;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  height: 100%;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

    figure {
      img {
        transform: scale(1.1);
      }
    }
  }
`

const CardContentWrapper = styled.div`
  display: grid;
`

const ImageWrapper = styled.figure`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    position: static !important;
    transition: all 0.2s;
  }
`

const Meta = styled.div`
  width: 100%;
  padding-inline: 10px;
  gap: 14px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: auto;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 14px;
  }
`

const CategoryTagWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

const Description = styled.p`
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 12px;
  }
`

const DateTime = styled(_DateTime)`
  /* margin-left: auto; */
`

const Card = ({ imgUrl, title, categories, date, desc }: CardProps) => {
  return (
    <CardWrapper>
      <CardContentWrapper>
        <ImageWrapper>
          <Image
            src={imgUrl}
            alt={title}
            fill
            style={{ objectFit: 'contain', aspectRatio: 'auto 2000 / 1125' }}
            sizes="(max-width: 560px) 40vw, 30vw"
            quality={75}
          />
        </ImageWrapper>
        <Title>{title}</Title>
        {desc && <Description>{desc}</Description>}
      </CardContentWrapper>
      <Meta>
        {date && <DateTime>{date}</DateTime>}
        <CategoryTagWrapper>
          {categories?.map((category) => (
            <CategoryTag
              categoryName={category.name}
              key={category.name}
              link={category.uri}
            />
          ))}
        </CategoryTagWrapper>
      </Meta>
    </CardWrapper>
  )
}

export default Card