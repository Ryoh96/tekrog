import { css } from 'styled-components'

const h3 = css`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.8em;
  padding: 8px;
  padding-left: 20px;
  border-top: 3px solid #1f2a82;
  border-bottom: 3px solid #1f2a82;
  line-height: 1.5;


  + * {
    margin-top: 0 !important;
  }

  &:not(:first-child) {
    margin-top: 40px;
  }
`

export default h3
