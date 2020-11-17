import styled, { css } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  width: 260px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.mainColor};
  font-size: 25px;
  color: ${({ theme }) => theme.whiteColor};
  font-family: ${({ theme }) => theme.decorativeFonts};

  &:hover {
    background-color: ${({ theme }) => theme.hoverBlack};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.whiteColor};
      color: ${({ theme }) => theme.mainColor};

      &:hover {
        background-color: ${({ theme }) => theme.mainColor};
        color: ${({ theme }) => theme.whiteColor};
      }
    `}
`;

export default Button;
