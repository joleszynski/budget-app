import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from 'components/molecules/Logo/Logo';
import MainHeading from 'components/atoms/MainHeading/MainHeading';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAuthCard = styled.div`
  width: 590px;
  height: 660px;
  margin-top: 40px;
  border: 2px solid ${({ theme }) => theme.primaryBlack};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.mainFonts};
  font-size: 27px;
  color: ${({ theme }) => theme.primaryGrey};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 50px;
      color: ${({ theme }) => theme.primaryBlack};
      text-align: center;
      text-decoration: underline;
    `}
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <Logo />
    <StyledAuthCard>
      <MainHeading tertiary>Log in</MainHeading>
      {children}
      <StyledLink to="#">Have you forgot your password ?</StyledLink>
      <StyledLink secondary="true" to="/register">
        Sign up
      </StyledLink>
    </StyledAuthCard>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthTemplate;
