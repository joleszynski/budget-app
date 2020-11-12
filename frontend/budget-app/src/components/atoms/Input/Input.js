import styled from 'styled-components';

const Input = styled.input`
  width: 500px;
  height: 70px;
  font-size: 37px;
  font-family: ${({ theme }) => theme.mainFonts};
  padding-left: 30px;
`;

export default Input;
