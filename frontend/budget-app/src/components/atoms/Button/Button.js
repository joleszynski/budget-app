import styled from 'styled-components';

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
`;

export default Button;
