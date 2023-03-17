import { css } from 'styled-components'

const h2 = css`
  font-size: 26px;
  margin-bottom: 0.5em;
  font-weight: 700;
  background: ${({ theme }) => theme.gradient.main};
  color: #fff;
  padding-bottom: 16px;
  padding-top: 18px;
  padding-left: 14px;
  border-left: 10px solid ${({ theme }) => theme.color.page.accent};
  line-height: 1.5;

  + * {
    margin-top: 0 !important;
  }

  > * + * {
    margin-top: 80px;
  }

  &:not(:first-of-type) {
    margin-top: 90px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
      margin-top: 60px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 22px;
    padding-block: 11px;
  }
`

export default h2
