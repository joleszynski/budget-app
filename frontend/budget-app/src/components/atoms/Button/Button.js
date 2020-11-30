import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-family: ${({ theme }) => theme.decorativeFonts};
  cursor: pointer;
  width: 260px;
  height: 45px;
  font-size: 25px;
  color: ${({ theme }) => theme.whiteColor};
  border: 1px solid ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.mainColor};

  &:hover {
    background-color: ${({ theme }) => theme.hoverBlack};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.mainColor};
      background-color: ${({ theme }) => theme.whiteColor};

      &:hover {
        color: ${({ theme }) => theme.whiteColor};
        background-color: ${({ theme }) => theme.mainColor};
      }
    `}
`;

export default Button;
