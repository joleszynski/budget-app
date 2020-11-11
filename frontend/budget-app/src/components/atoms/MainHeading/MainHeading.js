import styled, { css } from 'styled-components';

const MainHeading = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.primaryBlue};
  text-align: center;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 25px;
      color: ${({ theme }) => theme.primaryBlack};
      text-align: ${({ center }) => (center ? 'center' : 'right')};
      font-weight: 300;
    `}
`;

export default MainHeading;
