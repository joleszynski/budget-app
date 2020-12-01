import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAccounts } from 'actions/accountBalance';
import DashboardTemplate from 'templates/DashboardTemplate';
import AccountItem from 'components/atoms/AccountItem/AccountItem';

class AccountsPage extends React.Component {
  /* eslint-disable */
  state = {
    accounts: [],
  };

  componentDidMount() {
    const { getAccountsAction } = this.props;
    getAccountsAction();
  }

  componentDidUpdate() {
    const { getAccountsAction } = this.props;
    getAccountsAction();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.state.accounts !== nextProps.accounts) {
      this.setState({ accounts: nextProps.accounts });
    }
  }

  render() {
    const { accounts } = this.state;

    return (
      <DashboardTemplate name="Accounts Balance">
        <>
          {' '}
          {accounts.map(({ accountName, accountValue }, i) => (
            <AccountItem
              id={parseInt(i, 10)}
              accountName={accountName}
              accountValue={accountValue}
            />
          ))}
        </>
      </DashboardTemplate>
    );
  }
}

AccountsPage.propTypes = {
  getAccountsAction: PropTypes.func.isRequired,
  /* eslint-disable */
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
    getAccountsAction: async () => dispatch(await getAccounts),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
