import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from 'components/molecules/Logo/Logo';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAccountsStateCard = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 35px;
  display: flex;
  justify-content: center;
`;

const DashboardTemplate = ({ children }) => (
  <StyledWrapper>
    <Logo />
    <StyledAccountsStateCard>{children}</StyledAccountsStateCard>
  </StyledWrapper>
);

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardTemplate;
