import styled from 'styled-components'

const MainArea = styled.div`
  flex: 1 1 auto;
  overflow-x: hidden;
  background-color: #fff;
  padding: 40px 34px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}) {
    padding: 26px 22px;
  }

  /* @media (prefers-color-scheme: dark) {
    background-color: #292a2d;
    color: #fff;
  } */
`
export default MainArea
