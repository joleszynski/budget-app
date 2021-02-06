import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAccounts } from 'actions/accountBalance';
import DashboardTemplate from 'templates/DashboardTemplate';
import AccountItem from 'components/atoms/AccountItem/AccountItem';
import ToggleModalButton from 'components/molecules/ToggleModalButton/ToggleModalButton';

class AccountsPage extends React.Component {
  componentDidMount() {
    const { getAccountsAction } = this.props;
    getAccountsAction();
  }

  render() {
    const { accounts } = this.props;

    return (
      <DashboardTemplate name="Accounts Balance">
        <>
          {' '}
          {accounts.map(({ id, name, value }) => (
            <AccountItem key={id} id={id} accountName={name} accountValue={value} />
          ))}
          <ToggleModalButton />
        </>
      </DashboardTemplate>
    );
  }
}

AccountsPage.propTypes = {
  getAccountsAction: PropTypes.func.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object),
};

AccountsPage.defaultProps = {
  accounts: [{ accountName: 'Error', valuesAccount: '0' }],
};

const mapStateToProps = ({ accountBalance }) => {
  const { accounts } = accountBalance;
  return {
    accounts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAccountsAction: () => dispatch(getAccounts),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
