import styled from 'styled-components';

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.decorativeFonts};
  text-align: center;
  font-size: 35px;
  color: ${({ theme }) => theme.mainColor};
`;

export default Heading;
