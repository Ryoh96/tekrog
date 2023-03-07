import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'

const Base = createGlobalStyle`
  * {
    font-size: 16px;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: #383838;
    font-family: YuGothic, Hiragino Kaku Gothic Pro, Meiryo, sans-serif;;
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
