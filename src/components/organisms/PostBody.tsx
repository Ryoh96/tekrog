import '@/prism/prism.js'

import parse from 'html-react-parser'
import styled from 'styled-components'

import { styles } from '@/components/article'


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
      <WordPressText>{parse(content)}</WordPressText>
    </>
  )
}

export default Postbody
