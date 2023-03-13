import { css } from 'styled-components'

const pre = css`
  &[class*='language-'],
  &[class*='file-httpd'] {
    overflow: visible !important;
    border-radius: 10px;
    margin-bottom: 2em;
    margin-top: -0.5em;

    &::before {
      white-space: pre-wrap;
      font-weight: 700;
      font-size: 15px;
      content: 'TypeScript';
      margin: -16px -16px 16px -16px;
      background: linear-gradient(90deg, #1f2a82, #de15ca);
      color: #fff;
      display: block;
      padding: 6px 18px 6px 16px;
      width: calc(100% + 32px);
      height: 40px;
      box-sizing: border-box;
      border-radius: 10px 10px 0 0;
      line-height: 1.8;
    }
  }

  &[class*='language-'].line-numbers,
  &[class*='file-httpd'].line-numbers  {
    &::before {
      width: calc(100% + 77px);
      margin-inline: -61px;
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
`

export default pre
