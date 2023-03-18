import parse, { domToReact } from 'html-react-parser'
import Image from 'next/image'
import Prism from 'prismjs'
import { useEffect } from 'react'
import styled from 'styled-components'

import { styles } from '@/components/article'
import GoogleAdsense from '@/components/organisms/adsense/GoogleAdsense'

const WordPressText = styled.div`
  ul,
  ol {
    line-height: 1.6;
  }

  h2 {
    ${styles.h2}
  }

  h3 {
    ${styles.h3}

    + p + h4 {
      margin-top: 2em;
    }
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
    line-height: 1.8;
  }
  /* 
  > p:not([class]) {
    &::before {
      content: "";
      display: inline-block;
      width: 1em;
    }
  } */

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

  .linkcard {
    a {
      color: currentColor !important;
      text-decoration: none;
    }
  }

  .point {
    ${styles.point}
  }

  .ulOnly {
    ${styles.ulOnly}
  }

  .ulUI {
    ${styles.ulUI}
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

  .warning {
    ${styles.warning}
  }

  a {
    text-decoration: underline;
    font-weight: bold;
    color: ${({ theme }) => theme.color.page.main};

    &:hover {
      opacity: 0.7;
    }
  }

  > *:last-child {
    margin-bottom: 50px;
  }
`

type PostBodyProps = {
  content: string
}

const Postbody = ({ content }: PostBodyProps) => {
  let count = 0

  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <>
      <WordPressText>
        {parse(content, {
          //@ts-ignore
          replace: ({ name, attribs, children }) => {
            if (name === 'img') {
              const { src, alt, width, height, class: clazz } = attribs
              const url = String(src).startsWith('//') ? 'https:' + src : src
              if (clazz === 'lkc-thumbnail-img') {
                return <Image src={url} alt={alt} width={150} height={150} />
              }
              return <Image src={url} width={width} alt={alt} height={height} />
            }
            if (name === 'h2') {
              return (
                <>
                  {count++ % 2 === 0 && (
                    <GoogleAdsense
                      style={{ display: 'block', textAlign: 'center' }}
                      layout="in-article"
                      format='fluid'
                      slot="1534380891"
                    />
                  )}
                  <h2 {...attribs}>{domToReact(children)}</h2>
                </>
              )
            }
          },
        })}
      </WordPressText>
    </>
  )
}

export default Postbody
