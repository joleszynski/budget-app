import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { toggleAccounts, toggleIncome, toggleOutgoings, toggleTransfers } from 'actions/toggle';

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
  background-color: ${({ toggleblack, theme }) =>
    toggleblack ? theme.mainColor : theme.whiteColor};
  color: ${({ toggleblack, theme }) => (toggleblack ? theme.whiteColor : theme.mainColor)};

  @media screen and (min-width: 1024px) {
    width: 300px;
    height: 60px;
    font-size: 30px;
  }
`;

const DownButtonBar = ({
  toggleAccountsAction,
  toggleIncomeAction,
  toggleOutgoingsAction,
  toggleTransfersAction,
  dashboardState,
}) => (
  <StyledButtonsWrapper>
    <StyledButtonLink
      as={NavLink}
      to="/accounts"
      secondary="true"
      onClick={toggleAccountsAction}
      toggleblack={dashboardState === '/accounts' ? 'true' : null}
      activeclass="active"
    >
      Account Balance
    </StyledButtonLink>
    <StyledButtonLink
      as={NavLink}
      to="/outgoings"
      secondary="true"
      onClick={toggleOutgoingsAction}
      toggleblack={dashboardState === '/outgoings' ? 'true' : null}
    >
      Outgoings
    </StyledButtonLink>
    <StyledButtonLink
      as={NavLink}
      to="/transfers"
      secondary="true"
      onClick={toggleTransfersAction}
      toggleblack={dashboardState === '/transfers' ? 'true' : null}
    >
      Transfers
    </StyledButtonLink>
    <StyledButtonLink
      as={NavLink}
      to="/income"
      secondary="true"
      onClick={toggleIncomeAction}
      toggleblack={dashboardState === '/income' ? 'true' : null}
    >
      Income
    </StyledButtonLink>
  </StyledButtonsWrapper>
);

DownButtonBar.propTypes = {
  toggleAccountsAction: PropTypes.func.isRequired,
  toggleIncomeAction: PropTypes.func.isRequired,
  toggleOutgoingsAction: PropTypes.func.isRequired,
  toggleTransfersAction: PropTypes.func.isRequired,
  dashboardState: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAccountsAction: () => dispatch(toggleAccounts()),
    toggleOutgoingsAction: () => dispatch(toggleOutgoings()),
    toggleTransfersAction: () => dispatch(toggleTransfers()),
    toggleIncomeAction: () => dispatch(toggleIncome()),
  };
};

const mapStateToProps = ({ toggle }) => {
  const { dashboardState } = toggle;
  return {
    dashboardState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DownButtonBar);
