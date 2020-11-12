import styled, { css } from 'styled-components';

const MainHeading = styled.h1`
  font-family: ${({ theme }) => theme.mainFonts};
  color: ${({ theme }) => theme.primaryBlack};
  font-size: 72px;
  text-align: center;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 35px;
      color: ${({ theme }) => theme.moneyGreen};
      text-align: ${({ center }) => (center ? 'center' : 'right')};
      font-weight: ${({ theme }) => theme.light};
    `}
`;

export default MainHeading;
