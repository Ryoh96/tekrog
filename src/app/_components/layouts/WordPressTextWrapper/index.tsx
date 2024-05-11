// @ts-nocheck
import type { DOMNode, HTMLReactParserOptions } from 'html-react-parser'
import parse, { domToReact } from 'html-react-parser'
import Link from 'next/link'
import Image from 'next/image'
import { BlockMath, InlineMath } from 'react-katex'
import styles from './styles/element-selector/index.module.scss'
import './styles/class-selector/index.scss'
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css'
import GoogleAdsenseBlock from '../../libs/GoogleAdsenseBlock'

const WordPressTextWrapper = ({ children }: { children: string }) => {
  let count = 0
  const src = process.env.NEXT_PUBLIC_SRC ?? ''
  const srcLength = src?.length
  const lsr = src?.slice(8, srcLength)

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
              <GoogleAdsenseBlock
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
      if (name === 'pre') {
        let preClassName = children[0]?.attribs.class
        let codeClassName = preClassName
        let language = preClassName?.slice(9)
        if (language === 'html') {
          language = 'markup'
        } else if (language === 'none') {
          language = 'markup'
          preClassName = 'file-httpd language-none'
        }
        const data = children[0]?.children[0]?.data
        const highlight = Prism.highlight(
          data,
          Prism.languages[language],
          language,
        )
        return (
          <pre className={`${preClassName} `}>
            <code className={codeClassName}>
              <div dangerouslySetInnerHTML={{ __html: highlight }} />
            </code>
          </pre>
        )
      }
    },
  }

  return (
    // <div {...stylex.props(styles.wrapper)}>
    <div className={styles.wrapper}>{parse(children, options)}</div>
  )
}
export default WordPressTextWrapper
