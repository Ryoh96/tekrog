import '@/prism/prism.js'

import parse from 'html-react-parser'
import Image from 'next/image'
import styled from 'styled-components'

import { styles } from '@/components/article'

import DateTime from '../atoms/DateTime'
import CategoryTags from './CategoryTags'
import _Share from './Share'

const WordPressText = styled.div`
  h2 {
    ${styles.h2}
  }

  h3 {
    ${styles.h3}
  }

  .toc {
    ${styles.toc}
  }

  p {
    margin-bottom: 1em;
    padding-inline: 0.5em;
    line-height: 2;
  }

  strong {
    font-weight: bold;
  }

  .yellow-line {
    background: transparent linear-gradient(transparent 60%, #ff8 0) repeat
      scroll 0 0;
  }

  pre {
    ${styles.pre}
  }

  .lkc {
    ${styles.lkc}
  }

  .point {
    ${styles.point}
  }
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.6;
`

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const CategoryTagsWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const Thumbnail = styled.figure`
  width: 100%;
  height: auto;
  margin-bottom: 24px;

  img {
    position: static !important;
  }
`

const Share = styled(_Share)`
  margin-bottom: 28px;
  justify-content: flex-end;
  padding-right: 20px;
`

type PostBodyProps = {
  data: any
}

const Postbody = ({ data }: PostBodyProps) => {
  return (
    <>
      <Title>{data.post.title}</Title>
      <Meta>
        <CategoryTagsWrapper>
          <CategoryTags categories={data.post.categories} />
        </CategoryTagsWrapper>
        <DateTime>{data.post.date}</DateTime>
      </Meta>
      <Thumbnail>
        <Image
          src={data.post.featuredImage.node.sourceUrl}
          alt={data.post.title}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Thumbnail>
      <Share />
      <WordPressText>{parse(data.post.content)}</WordPressText>
    </>
  )
}

export default Postbody
