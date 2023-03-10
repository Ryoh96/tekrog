import { css } from 'styled-components'

const point = css`
  border: 5px solid #1f2a82 !important;
  padding: 20px;
  position: relative;
  margin-top: 72px;
  margin-bottom: 40px;
  border-radius: 0 5px 5px;
  box-sizing: border-box;
  background-color: #5463d6;
  font-size: 16px;
  background-color: #edeef6;
  line-height: 1.8;

  &::before {
    white-space: pre-wrap;
    font-weight: 700;
    content: 'ポイント';
    position: absolute;
    top: -42px;
    left: -5px;
    background-color: #1f2a82;
    color: #fff;
    display: block;
    padding: 6px 26px 4px;
    box-sizing: border-box;
    border-radius: 5px 5px 0 0;
    line-height: 2;
  }
`

export default point
