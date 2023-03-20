import styled from 'styled-components'

const Button = styled.button`
  max-width: 200px;
  color: #fff;
  background: ${({ theme }) => theme.gradient.main};
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.near};
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.far};
    transform: scale(1.1);
  }

  &:disabled {
    background: #ccc;

    &:hover {
      box-shadow: ${({ theme }) => theme.boxShadow.near};
      transform: revert;
      cursor: revert;
    }
  }
`
export default Button
