import styled from 'styled-components'

const SpOnly = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.sp + 1}px) {
    display: none;
  }
`
export default SpOnly
