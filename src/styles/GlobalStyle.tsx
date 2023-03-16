import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'

const Base = createGlobalStyle`
  * {
    font-size: 16px;
    box-sizing: border-box;
    line-height: 1.5;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: #323232;
    /* background-color: #6b7bb3; */
    font-family: YuGothic, Hiragino Kaku Gothic Pro, Meiryo, sans-serif;;
    word-break: break-all;
    animation: fadeIn 1s;

    @keyframes fadeIn {
      0%{
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  p {
    line-height: 1.7;
  }

  article {
    height: 100%;
  }

  input,
  textarea {
    &::placeholder {
    font-family: YuGothic, Hiragino Kaku Gothic Pro, Meiryo, sans-serif;;
    }
  }

  object {
    width: fit-content;
    overflow-clip-margin: 30px !important;
    overflow: visible !important;
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
