import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 200px;
  height: 47px;
  border: 1px solid ${({ theme }) => theme.secondary};
  background-color: white;
  cursor: pointer;
  letter-spacing: 2px;
  font-size: 20px;

  &:active {
    background-color: ${({ theme }) => theme.secondary};
  }

  ${({ option }) =>
    option &&
    css`
      width: 70px;
      height: 15px;
      font-size: 8px;
    `}
`;

export default Button;
