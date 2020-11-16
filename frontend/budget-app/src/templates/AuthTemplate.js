import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledAuthCard = styled.div`
  width: 90%;
  max-width: 370px;
  height: 500px;
  margin: 30px auto 0 auto;
  border: 2px solid ${({ theme }) => theme.mainColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 600px;
    height: 500px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 100px;
  }
`;

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.decorativeFonts};
  font-size: 20px;
  color: ${({ theme }) => theme.greyColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 40px;
      color: ${({ theme }) => theme.mainColor};
      text-align: center;
      text-decoration: underline;
    `}
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledAuthCard>
      <Heading>Log in</Heading>
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
