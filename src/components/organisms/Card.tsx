import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import CategoryTag from '@/components/molecules/CategoryTag'
import type { CategoryType } from '@/types/CategoryType'
import { name2Cat } from '@/utils/cat2name'

import _DateTime from '../atoms/DateTime'

type CardProps = {
  imgUrl: string
  date?: string
  title: string
  categories: {
    name: string
  }[]
  desc?: string
}

const CardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  transition: 0.3s;
  z-index: 1;
  display: grid;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`

const ImageWrapper = styled.figure`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    position: static !important;
  }
`

const Meta = styled.div`
  width: 100%;
  padding-inline: 10px;
  gap: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
`

const CategoryTagWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

const Description = styled.p`
  font-size: 14px;
`

const DateTime = styled(_DateTime)`
  /* margin-left: auto; */
`

const Card = ({ imgUrl, title, categories, date, desc }: CardProps) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image
          src={imgUrl}
          alt={title}
          fill
          style={{ objectFit: 'contain', aspectRatio: 'auto 2000 / 1125' }}
        />
      </ImageWrapper>
      <Title>{title}</Title>
      {desc && <Description>{desc}</Description>}
      <Meta>
        {date && <DateTime date={date} />}
        <CategoryTagWrapper>
          {categories.map((category) => (
            <Link href={`/category/${category.name}`} key={category.name}>
              <CategoryTag category={name2Cat[category.name]} />
            </Link>
          ))}
        </CategoryTagWrapper>
      </Meta>
    </CardWrapper>
  )
}

export default Card
