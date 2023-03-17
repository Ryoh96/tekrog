import { css } from 'styled-components'

const h3 = css`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.8em;
  margin-inline: 0.5em;
  padding: 8px;
  padding-left: 0.7em;
  border-top: 3px solid #1f2a82;
  border-bottom: 3px solid #1f2a82;
  line-height: 1.5;

  + * {
    margin-top: 0 !important;
  }

  &:not(:first-child) {
    margin-top: 70px;
    @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
      margin-top: 40px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 18px;
    padding: 4px 16px;
  }
`

export default h3
