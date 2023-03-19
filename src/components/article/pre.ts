import { css } from 'styled-components'

const pre = css`
  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 12px;
  }

  border: none !important;
  > code {
    /* overflow: auto !important; */
    white-space: pre-wrap !important;
    word-wrap: break-word !important;
    overflow: auto !important;
  }

  &[class*='language-'],
  &[class*='file-httpd'] {
    border-radius: 10px;
    margin-bottom: 2em;
    margin-top: 10px;

    &::before {
      white-space: pre-wrap;
      font-weight: 700;
      font-size: 15px;
      content: 'TypeScript';
      margin: -16px -16px 16px -16px;
      background: linear-gradient(
        132deg,
        rgba(8, 68, 163, 1) 0%,
        rgba(162, 31, 149, 1) 100%
      );
      /* background-color:rgba(162, 31, 149, 1); */
      color: #fff;
      display: block;
      padding: 6px 18px 6px 16px;
      width: calc(100% + 32px);
      height: 40px;
      box-sizing: border-box;
      border-radius: 10px 10px 0 0;
      line-height: 1.8;

      @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
        margin-inline: -14px 0px;
        width: calc(100% + 28px);
        padding-left: 20px;
        padding-top: 8px;
      }
    }
  }

  &[class*='language-'].line-numbers,
  &[class*='file-httpd'].line-numbers {
    &::before {
      width: calc(100% + 77px);
      margin-inline: -61px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
        margin-inline: -53px;
        width: calc(100% + 67px);
      }
    }
  }

  &[class*='language-ts']::before {
    content: 'TypeScript';
  }
  &[class*='language-js']::before {
    content: 'JavaScript';
  }
  &[class*='language-html']::before,
  &[class*='language-svg']::before {
    content: 'HTML';
  }
  &[class*='language-css']::before {
    content: 'CSS';
  }
  &[class*='language-php']::before {
    content: 'PHP';
  }
  &[class*='file-httpd']::before {
    content: 'httpd.conf';
  }
  &[class*='language-scss']::before {
    content: 'Sass';
  }
  &[class*='language-python']::before {
    content: 'Python';
  }
  &[class*='language-shell']::before {
    content: 'Shell';
  }
  &[class*='language-tsx']::before {
    content: 'React';
  }
  &[class*='language-graphql']::before {
    content: 'GraphQL';
  }
`

export default pre
