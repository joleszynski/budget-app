import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 150px auto;
  width: 400px;
  height: 400px;
  border: 2px solid ${(theme) => theme.secondary};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledAuthCard = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledHeading = styled.h2`
  font-size: 23px;
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledHeading>Log In</StyledHeading>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthTemplate;
