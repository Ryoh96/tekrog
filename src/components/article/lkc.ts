import { css } from 'styled-components'

const lkc = css`
  &-card {
    display: grid;
    grid-template-rows: auto 1em;
    grid-template-columns: auto;
    gap: 0.5em;
    position: relative;
    z-index: 1;
  }

  &-internal-wrap {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.5),
      0 1px 3px 1px rgba(60, 64, 67, 0.2);
    padding: 14px 24px 0;
    border-radius: 10px;
    margin-bottom: 2em;
    transition: all 0.3s;
    z-index: 1;
    position: relative;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
    }
    overflow: hidden;

    &::before {
      position: absolute;
      display: block;
      content: 'クリック!';
      width: 130px;
      height: 2em;
      z-index: 10;
      top: -10px;
      left: -47px;
      padding-top: 30px;
      background-color: red;
      color: #fff;
      display: grid;
      place-content: center;
      transform: rotate(-45deg);
    }
  }

  &-info {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    grid-row: 2;
    grid-column: 1 / -1;
    z-index: 1;
    align-self: center;
    justify-self: end;
    opacity: 0.7;

    /* &::before {
      content: '『';
    }

    &::after {
      content: ' 』';
    } */
  }

  &-domain {
    font-size: 14px;
    margin-right: 0.5em;
    font-weight: bold;
  }

  &-url-info {
    font-size: 12px;
    color: blue;
  }

  &-content {
    display: grid;
    grid-template-rows: auto auto;
    grid-column: auto auto;
    grid-template-areas:
      'figure title'
      'figure excerpt';
    column-gap: 1em;
    grid-row: 1;
    grid-column: 1 / -1;
    z-index: 2;
  }

  &-thumbnail {
    grid-area: figure;
    width: 110px;

    > img {
      width: 100%;
      height: auto;
    }
  }

  &-title {
    grid-area: title;
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.4;
    text-decoration: underline;
  }

  &-excerpt {
    grid-area: excerpt;
    align-self: center;
    line-height: 1.6;
    font-size: 15px;
  }
`

export default lkc
