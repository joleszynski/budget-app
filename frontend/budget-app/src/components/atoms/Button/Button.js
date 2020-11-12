import styled from 'styled-components';

const Button = styled.button`
  width: 413px;
  height: 76px;
  border: 1px solid ${({ theme }) => theme.primaryBlack};
  background-color: ${({ theme }) => theme.primaryBlack};
  cursor: pointer;
  font-size: 35px;
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.mainFonts};

  &:hover {
    background-color: ${({ theme }) => theme.secondaryBlack};
  }
`;

export default Button;
