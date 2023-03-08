import styled from "styled-components";

const PcOnly = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    display: none;
  }
`
export default PcOnly