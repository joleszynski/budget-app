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

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.secondary};
    `}
`;

export default Button;
