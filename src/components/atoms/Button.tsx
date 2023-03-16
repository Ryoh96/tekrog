import styled from 'styled-components'

const Button = styled.button`
  max-width: 200px;
  color: #fff;
  background: ${({ theme }) => theme.gradient.main};
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }

  &:disabled {
    background: #ccc;

    &:hover {
      transform: revert;
      box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15);
      cursor: revert;
    }
  }
`
export default Button
