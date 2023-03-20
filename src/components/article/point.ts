import { css } from 'styled-components'

const point = css`
  border: 5px solid #1f2a82;
  padding: 20px;
  position: relative;
  margin-top: 62px;
  margin-bottom: 20px;
  border-radius: 0 5px 5px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #edeef6;
  line-height: 1.8;
  border: 5px solid #1f2a82;
  border-image: linear-gradient(
    317deg,
    rgba(34, 93, 195, 1) 0%,
    rgba(63, 159, 171, 1) 47%,
    rgba(65, 49, 200, 1) 100%
  );
  border-image-slice: 1;
  line-height: 1.5;

  &::before {
    white-space: pre-wrap;
    font-weight: 700;
    content: 'ポイント';
    position: absolute;
    top: -42px;
    left: -5px;
    background-color: #3626bf;
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
      background-color: #3626bf;
      border-radius: 50%;
      margin-top: 0.5em;
    }
  }
`

export default point
