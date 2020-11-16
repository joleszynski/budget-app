import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    margin-top: 35px;
  }
`;

const StyledName = styled.div`
  font-family: ${({ theme }) => theme.decorativeFonts};
  font-size: 50px;

  @media screen and (min-width: 1024px) {
    font-size: 75px;
  }
`;

const StyledMotto = styled.div`
  font-family: ${({ theme }) => theme.decorativeFonts};
  color: ${({ theme }) => theme.mottoColor};
  font-size: 20px;
  @media screen and (min-width: 1024px) {
    font-size: 40px;
    margin-left: 190px;
  }
`;

const Logo = () => (
  <StyledWrapper>
    <StyledName>Budget App</StyledName>
    <StyledMotto>#TakeCareOfYourMoney</StyledMotto>
  </StyledWrapper>
);

export default Logo;
