import styled from 'styled-components';

const Input = styled.input`
  width: 500px;
  height: 70px;
  font-size: 34px;
  font-family: ${({ theme }) => theme.mainFonts};
  padding-left: 30px;

  &:focus-visible {
    font-family: 'Montserrat';
  }
`;

export default Input;
