import { css } from 'styled-components'

const h2 = css`
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: 700;
  background: linear-gradient(273deg, #038fba, #117caf 41%, #1f2a82);
  color: #fff;
  padding-bottom: 16px;
  padding-top: 18px;
  padding-left: 14px;
  border-left: 10px solid #ffcf08;

  > * + * {
    margin-top: 80px;
  }

  &:not(:first-of-type) {
    margin-top: 60px;
  }
`

export default h2
