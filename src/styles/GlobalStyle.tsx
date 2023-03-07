import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'

const Base = createGlobalStyle`
  * {
    font-size: 16px;
  }

  body {
    background-color: #383838;
  }

  a {
    text-decoration: none;
  }
`

const GlobalStyle = () => {
  return (
    <>
      <Reset />
      <Base />
    </>
  )
}

export default GlobalStyle
