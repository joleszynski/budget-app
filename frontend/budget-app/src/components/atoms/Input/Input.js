import styled from 'styled-components';

const Input = styled.input`
  width: 300px;
  height: 50px;
  font-size: 27px;
  font-family: ${({ theme }) => theme.decorativeFonts};
  text-align: center;
`;

export default Input;
