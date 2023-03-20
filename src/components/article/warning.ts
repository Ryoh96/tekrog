import { css } from 'styled-components'

const warning = css`
  padding: 20px;
  position: relative;
  margin-top: 62px;
  margin-bottom: 20px;
  border-radius: 0 5px 5px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #fdffde;
  line-height: 1.8;
  border: 5px solid #1f2a82;
  border-image: linear-gradient(
    129deg,
    rgba(241, 184, 11, 1) 0%,
    rgba(221, 228, 90, 1) 50%,
    rgba(204, 205, 8, 1) 100%
  );
  border-image-slice: 1;
  line-height: 1.5;

  &::before {
    white-space: pre-wrap;
    font-weight: 700;
    content: '注意';
    position: absolute;
    top: -42px;
    left: -5px;
    background-color: rgba(241, 184, 11, 1);
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

export default warning
