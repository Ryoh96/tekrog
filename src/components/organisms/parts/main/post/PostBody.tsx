import '@/prism/prism.js'

import parse from 'html-react-parser'
import Image from 'next/image'
import styled from 'styled-components'

import { styles } from '@/components/article'

const WordPressText = styled.div`
  ul,
  ol{
    line-height: 1.6;
  }

  h2 {
    ${styles.h2}
  }

  h3 {
    ${styles.h3}
  }

  h4 {
    ${styles.h4}
  }

  .toc {
    ${styles.toc}
  }

  p {
    margin-bottom: 1em;
    padding-inline: 0.5em;
    line-height: 2;

    /* &::before {
      content: "";
      display: inline-block;
      width: 1em; */

    }

    img {
    max-width: 100%;
    height: auto;
  }

    @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
      font-size: 14px;
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

  .ulOnly {
    ${styles.ulOnly}
  }

  .olUI {
    ${styles.olUI}
  }

  table {
    ${styles.table}
  }

  blockquote {
    ${styles.blockquote}
  }

  .error {
    ${styles.error}
  }

  > *:last-child {
    margin-bottom: 50px;
  }
`

type PostBodyProps = {
  content: string
}

const Postbody = ({ content }: PostBodyProps) => {
  return (
    <>
      <WordPressText>
        {parse(content, {
          replace: (node) => {
            //@ts-ignore
            if (node.name === 'img') {
              //@ts-ignore
              const { src, alt, width, height, class: clazz } = node.attribs
              console.log(203, clazz)
              const url = String(src).startsWith('//') ? 'https:' + src : src
              if (clazz === 'lkc-thumbnail-img') {
                return <Image src={url} alt={alt} width={150} height={150} />
              }
              return <Image src={url} width={width} alt={alt} height={height} />
            }
          },
        })}
      </WordPressText>
    </>
  )
}

export default Postbody
