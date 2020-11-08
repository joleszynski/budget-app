import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainHeading from 'components/atoms/MainHeading/MainHeading';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const DashboardTemplate = ({ children }) => (
  <StyledWrapper>
    <MainHeading>Budget App</MainHeading>
    {children}
  </StyledWrapper>
);

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardTemplate;
