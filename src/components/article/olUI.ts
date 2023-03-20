import { css } from 'styled-components'

const olUI = css`
  p {
    margin-bottom: 0;
    padding: 6px 26px 1px 26px;
    display: inline-block;
    color: #fff;
    background-color: #3626bf;
    box-sizing: border-box;
    display: relative;
    border-radius: 5px 5px 0 0;
  }

  ol {
    border: 5px solid #1f2a82;
    line-height: 1.5;
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
    margin-bottom: 30px;
    border-radius: 0 5px 5px;
    box-sizing: border-box;
    background-color: #edeef6;
    counter-reset: b;
    font-size: 16px;
    display: grid;
    gap: 0.5em;

    li {
      display: flex;
      align-items: start;
      @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
        font-size: 14px;
      }

      &::before {
        text-align: center;
        counter-increment: b;
        content: counter(b);
        display: grid;
        place-content: center;
        margin-right: 0.7em;
        color: #fff;
        flex: 0 0 auto;
        width: 1.5em;
        height: 1.6em;
        vertical-align: middle;
        background-color: #3626bf;
        border-radius: 5px;
      }
    }
  }
`

export default olUI
