import { css } from 'styled-components'

const table = css`
  width: 100%;
  border: 1px solid #f7f7fc;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  background: linear-gradient(
    149deg,
    rgba(176, 247, 249, 1) 0%,
    rgba(191, 198, 255, 1) 100%
  );
  color: #fff;
  margin-bottom: 1em;

  th {
    padding: 10px;
    border: 1px solid #fff;
    background-color: #4d4db8;
  }

  td {
    padding: 10px;
    border: 1px solid #fff;
    color: #000;
  }
`

export default table
