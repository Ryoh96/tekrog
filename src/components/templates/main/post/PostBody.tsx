import 'katex/dist/katex.min.css'

import type { HTMLReactParserOptions } from 'html-react-parser'
import parse, { domToReact } from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import Prism from 'prismjs'
import { useEffect } from 'react'
import { BlockMath,InlineMath } from 'react-katex'
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
    margin-top: 1em;
    margin-bottom: 1.5em;
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

    &-url-info {
      /* display: none; */
    }
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

  svg {
    max-width: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
      transform: scale(0.9);
      max-width: 105%;
    }
  }

  .def {
    border: 4px solid #ffabce;
    border-radius: 10px;
    padding: 16px 30px;
    @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
      padding: 8px 10px;
    }
    p {
      margin-top: 0;
      font-weight: 700;
      text-decoration: underline;

      &::before {
        content: '【定義】';
      }
    }
  }

  > *:last-child {
    margin-bottom: 50px;
  }

  figure.aligncenter {
    text-align: center;
    > img {
      margin-inline: auto;
    }
  }
`

type PostBodyProps = {
  content: string
}

const Postbody = ({ content }: PostBodyProps) => {
  let count = 0
  const src = process.env.NEXT_PUBLIC_SRC ?? ''
  const srcLength = src.length
  const lsr = src.slice(8, srcLength)

  useEffect(() => {
    Prism.highlightAll()
  })

  const options: HTMLReactParserOptions = {
    //@ts-ignore
    replace: ({ name, attribs, children }) => {
      if (name === 'img') {
        const { alt, width, height, class: clazz } = attribs
        const url = String(attribs.src).startsWith('//')
          ? 'https:' + attribs.src
          : attribs.src
        if (clazz === 'lkc-thumbnail-img') {
          return <Image src={url} alt={alt} width={150} height={150} />
        } else if (clazz === 'lkc-favicon' && attribs.src.includes(lsr)) {
          return (
            <Image
              src="/gear-kr-nb.svg"
              width={16}
              height={16}
              alt=""
              style={{
                backgroundColor: '#000',
              }}
            />
          )
        } else {
          return (
            <Image
              alt=""
              src={attribs.src}
              width={width}
              height={height}
              className={clazz}
            />
          )
        }
      }

      if (name === 'h2') {
        return (
          <>
            {count++ % 2 === 0 && count < 8 && (
              <GoogleAdsense
                style={{ display: 'block', textAlign: 'center' }}
                layout="in-article"
                format="fluid"
                slot="1534380891"
              />
            )}
            <h2 className={attribs.class}>{domToReact(children, options)}</h2>
          </>
        )
      }
      if (name === 'a') {
        const { class: clazz, href } = attribs
        if (clazz && clazz.includes('lkc-link')) {
          return (
            <Link href={href.slice(srcLength)} className={clazz}>
              {domToReact(children, options)}
            </Link>
          )
        }
      }
      if (name === 'div') {
        const { class: clazz, href } = attribs
        if (
          clazz &&
          clazz.includes('lkc-url-info') &&
          children[0] &&
          children[0].data &&
          children[0].data.includes(src)
        ) {
          return (
            <div className={clazz}>
              {`https://tekrog.com` + children[0].data.slice(srcLength)}
            </div>
          )
        }
      }
      if (name === 'p') {
        const { class: clazz } = attribs
        if (clazz && clazz.includes('math')) {
          return <BlockMath>{domToReact(children, options)}</BlockMath>
        }
      }
      if (name === 'strong') {
        const { class: clazz } = attribs
        if (clazz && clazz.includes('math')) {
          return <InlineMath>{domToReact(children, options)}</InlineMath>
        }
      }
    },
  }
  return (
    <>
      <WordPressText>{parse(content, options)}</WordPressText>
    </>
  )
}

export default Postbody
