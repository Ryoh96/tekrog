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
  margin-top: 62px;
  margin-bottom: 20px;
  border-radius: 0 5px 5px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #e8c7ce;
  line-height: 1.5;
  display: grid;
  gap: 1em;

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
  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 14px;
  }

  > li {
    display: flex;
    align-items: flex-start;
    gap: 0.6em;
    &::before {
      flex: 0 0 auto;
      content: '';
      display: grid;
      width: 6px;
      height: 6px;
      background-color: #821f32;
      border-radius: 50%;
      margin-top: 0.5em;
    }
  }
`

export default error
