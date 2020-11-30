import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { toggleAccounts, toggleIncome, toggleOutgoings, toggleTransfers } from 'actions/toggle';

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
  background-color: ${({ toggleBlack }) => (toggleBlack ? '#000' : '#FFF')};
  color: ${({ toggleBlack }) => (toggleBlack ? '#FFF' : '#000')};

  @media screen and (min-width: 1024px) {
    width: 300px;
    height: 60px;
    font-size: 30px;
  }
`;

const DashboardTemplate = ({
  children,
  toggleAccountsAction,
  toggleIncomeAction,
  toggleOutgoingsAction,
  toggleTransfersAction,
  dashboardState,
}) => (
  <StyledWrapper>
    <StyledItemsWrapper>{children}</StyledItemsWrapper>
    <StyledButtonsWrapper>
      <StyledButtonLink
        secondary
        onClick={toggleAccountsAction}
        toggleBlack={dashboardState === 'accounts' ? true : null}
      >
        Account Balance
      </StyledButtonLink>
      <StyledButtonLink
        secondary
        onClick={toggleOutgoingsAction}
        toggleBlack={dashboardState === 'outgoings' ? true : null}
      >
        Outgoings
      </StyledButtonLink>
      <StyledButtonLink
        secondary
        onClick={toggleTransfersAction}
        toggleBlack={dashboardState === 'transfers' ? true : null}
      >
        Transfers
      </StyledButtonLink>
      <StyledButtonLink
        secondary
        onClick={toggleIncomeAction}
        toggleBlack={dashboardState === 'income' ? true : null}
      >
        Income
      </StyledButtonLink>
    </StyledButtonsWrapper>
  </StyledWrapper>
);

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTemplate);
