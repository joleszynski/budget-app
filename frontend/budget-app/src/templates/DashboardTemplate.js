import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';

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

const StyledButtonsWrapper = styled.div`
  margin: 10px auto;
  width: 90%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 70%;
    height: 120px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
    height: 160px;
    justify-content: space-around;
  }
`;

const StyledButtonLink = styled(Button)`
  @media screen and (min-width: 1024px) {
    width: 300px;
    height: 60px;
    font-size: 30px;
  }
`;

const DashboardTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledItemsWrapper>{children}</StyledItemsWrapper>
    <StyledButtonsWrapper>
      <StyledButtonLink secondary>Account Balance</StyledButtonLink>
      <StyledButtonLink secondary>Outgoings</StyledButtonLink>
      <StyledButtonLink secondary>Transfers</StyledButtonLink>
      <StyledButtonLink secondary>Income</StyledButtonLink>
    </StyledButtonsWrapper>
  </StyledWrapper>
);

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardTemplate;
