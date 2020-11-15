import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from 'components/molecules/Logo/Logo';
import MainHeading from 'components/atoms/MainHeading/MainHeading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeadFrame = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 10px;
`;

const StyledButton = styled(Button)`
  margin-left: -236px;
  margin-right: 130px;
  width: 150px;
  height: 35px;
  font-size: 20px;
  background-color: #fff;
  color: #000;
  &:hover {
    background-color: black;
    color: #fff;
  }
`;

const StyledAccountsStateCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DashboardTemplate = ({ children }) => (
  <StyledWrapper>
    <Logo />
    <StyledHeadFrame>
      <StyledButton>Options</StyledButton>
      <MainHeading tertiary>
        Account Balance{' '}
        <span role="img" aria-label="accessible">
          💸
        </span>
      </MainHeading>
    </StyledHeadFrame>
    <StyledAccountsStateCard>{children}</StyledAccountsStateCard>
  </StyledWrapper>
);

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardTemplate;
