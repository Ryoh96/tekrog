import { css } from 'styled-components'

const ulOnly = css`
  border: 5px solid #1f2a82;
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
  margin-bottom: 1.5em;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #f7f7fc;
  counter-reset: b;
  font-size: 16px;
  display: grid;
  gap: 1em;
  line-height: 1.6;

  li {
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: block;
      flex: 0 0 auto;
      width: 6px;
      height: 6px;
      background-color: #1f2a82;
      margin-right: 0.6em;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 14px;
  }

`

export default ulOnly
