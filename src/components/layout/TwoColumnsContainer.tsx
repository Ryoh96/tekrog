import styled from 'styled-components'

const TwoColumnContainer = styled.div`
  display: flex;
  gap: 2.131147541%;
  margin-bottom: 40px;
  align-items: start;

  @media (max-width: 1030px) {
    flex-direction: column;
    gap: 30px;
  }
`

export default TwoColumnContainer
