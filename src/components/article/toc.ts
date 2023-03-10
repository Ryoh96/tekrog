import { css } from 'styled-components'

const toc = css`
  &_white {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    margin-block: 32px;
    /* background-color: #fcfceb; */
  }

  &_title {
    font-weight: bold;
    padding-top: 16px !important;
    padding-bottom: 12px !important;
    margin: 0 !important;
    background: linear-gradient(273deg, #038fba, #117caf 41%, #1f2a82);
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    font-weight: 400;
    border-radius: 10px 10px 0 0;
    line-height: 1;
    padding-inline-start: 30px;

    &::before {
      content: '';
      display: block;
      background-image: url(/book.svg);
      margin-right: 0.4em;
      width: 24px;
      height: 24px;
      background-size: cover;
      margin-top: -2px;
    }
  }

  &_list {
    color: #175a9c;
    padding: 12px;
    font-size: 16px;
    display: grid;
    text-decoration: underline;

    a:hover {
      opacity: 0.6;
    }

    li {
      margin: 8px 1em;

      ul {
        padding-left: 1em;
        padding-top: 0.2em;
        font-weight: normal;
        display: grid;
      }

      > a {
        display: flex;
        align-items: center;
        gap: 0.5em;
      }
    }

    > li {
      font-weight: bold;
    }
  }

  &_depth_1 {
    font-size: 0.9em;
    /* font-weight: normal; */
    display: inline-flex;
    place-content: center;
    width: 24px;
    color: #fff;
    background-color: #1f2a82;
    aspect-ratio: 1 / 1;
    clip-path: circle(50%);
    line-height: 1;
    overflow: hidden;
    align-items: center;
  }

  &_depth_2 {
    font-size: 0.9em;
  }
`
export default toc
