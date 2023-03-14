import { css } from 'styled-components'

const error = css`
  border: 5px solid #821f32;
  border-image: linear-gradient(
    129deg,
    rgba(130, 31, 48, 1) 0%,
    rgba(174, 22, 181, 1) 49%,
    rgba(219, 17, 74, 1) 100%
  );
  border-image-slice: 1;
  padding: 20px;
  position: relative;
  margin-top: 72px;
  margin-bottom: 40px;
  border-radius: 0 5px 5px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #e8c7ce;

  &::before {
    white-space: pre-wrap;
    font-weight: 700;
    content: '重要';
    position: absolute;
    top: -42px;
    left: -5px;
    background-color: #821f32;
    color: #fff;
    display: block;
    padding: 6px 26px 4px;
    box-sizing: border-box;
    border-radius: 5px 5px 0 0;
    line-height: 2;
  }
`

export default error
