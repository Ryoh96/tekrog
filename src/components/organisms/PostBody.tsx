import '@/prism/prism.js'

import parse from 'html-react-parser'
import Image from 'next/image'
import styled from 'styled-components'

import { styles } from '@/components/article'

const WordPressText = styled.div`
  h2 {
    ${styles.h2}
  }

  h3 {
    ${styles.h3}
  }

  h4 {
    border-bottom: 4px solid #1f2a82;
    border-image: linear-gradient(
      149deg,
      rgba(2, 54, 144, 1) 0%,
      rgba(49, 168, 200, 1) 100%
    );
    border-image-slice: 1;
    padding: 0.5em;
    font-weight: 700;
    font-size: 18px;
    margin-top: 2.5em;
    margin-bottom: 1em;
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

  .ulOnly {
    border: 5px solid #1f2a82;
    border-image: linear-gradient(
      317deg,
      rgba(34, 93, 195, 1) 0%,
      rgba(63, 159, 171, 1) 47%,
      rgba(65, 49, 200, 1) 100%
    );
    border-image-slice: 1;
    padding: 20px;
    position: relative;
    margin-top: 0;
    margin-bottom: 1.5em;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #f7f7fc;
    counter-reset: b;
    font-size: 16px;
    display: grid;
    gap: 1em;

    li {
      display: flex;
      align-items: center;

      &::before {
        content: '';
        display: block;
        flex: 0 0 auto;
        width: 6px;
        height: 6px;
        background-color: #1f2a82;
        margin-right: 0.6em;
      }
    }
  }

  table {
    width: 100%;
    border: 1px solid #f7f7fc;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
    background: linear-gradient(
      149deg,
      rgba(176, 247, 249, 1) 0%,
      rgba(191, 198, 255, 1) 100%
    );
    color: #fff;
      margin-bottom: 1em;;

    th {
      padding: 10px;
      border: 1px solid #fff;
      background-color: #4d4db8;
    }

    td {
      padding: 10px;
      border: 1px solid #fff;
      color: #000;
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
