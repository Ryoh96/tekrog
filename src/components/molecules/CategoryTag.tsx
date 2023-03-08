import Image from 'next/image'
import styled from 'styled-components'

import Tag from '../atoms/Tag'

type CategoryTagProps = {
  imgUrl: string
  text: string
  bgColor: `#${string}`
  count: number
}

const ImageWrapper = styled.div`
  flex: 0 0 20px;
  height: 20px;
  position: relative;
`

const TagText = styled.span`
  word-break: keep-all;
`

const CategoryTag = ({ imgUrl, text, count, bgColor }: CategoryTagProps) => {
  return (
    <Tag color="#fff" bgColor={bgColor}>
      <ImageWrapper>
        <Image
          src={imgUrl}
          alt=""
          width={20}
          height={20}
          style={{ objectFit: 'contain' }}
        />
      </ImageWrapper>
      <TagText>
        {text} ({count})
      </TagText>
    </Tag>
  )
}

export default CategoryTag
