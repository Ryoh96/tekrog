import { css } from 'styled-components'

const blockquote = css`
  display: grid;
  border-inline-start: #1f2a82 solid 8px;
  margin-top: 30px;

  p {
    font-weight: bold;
    margin-inline-start: 1em;
    padding: 0;
  }

  cite {
    font-size: 0.8em;
    color: #175a9c;
    text-decoration: underline;
    margin-inline-start: 1.3em;

    &:hover {
      opacity: 0.7;
    }
  }
`

export default blockquote
