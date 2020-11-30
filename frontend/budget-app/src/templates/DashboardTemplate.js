import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DownButtonsBar from 'components/molecules/DownButtonsBar/DownButtonsBar';
import DashboardHeading from 'components/molecules/DashboardHeading/DashboardHeading';

const StyledWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
`;

const StyledItemsWrapper = styled.div`
  width: 90%;
  margin: 10px auto 0 auto;

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

const DashboardTemplate = ({ children }) => (
  <StyledWrapper>
    <DashboardHeading />
    <StyledItemsWrapper>{children}</StyledItemsWrapper>
    <DownButtonsBar />
  </StyledWrapper>
);

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardTemplate;
