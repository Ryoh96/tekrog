import { css } from 'styled-components'

const h4 = css`
  border-bottom: 4px solid #1f2a82;
  border-image: linear-gradient(
    149deg,
    rgba(2, 54, 144, 1) 0%,
    rgba(49, 168, 200, 1) 100%
  );
  border-image-slice: 1;
  padding: 0.5em;
  font-weight: 700;
  font-size: 18px;
  margin: 3em 0.3em 0.6em;

  + * {
    margin-top: 0;
  }
`

export default h4
