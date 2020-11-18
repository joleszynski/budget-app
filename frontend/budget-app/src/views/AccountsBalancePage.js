import React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import AccountBoard from 'components/molecules/AccountBoard/AccountBoard';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// const Profile = {
//   accounts: [
//     {
//       id: 1,
//       nameAccount: 'Konto Test',
//       valuesAccount: 1000,
//     },
//     {
//       id: 2,
//       nameAccount: 'Konto Test Trzy',
//       valuesAccount: 3000,
//     },
//     {
//       id: 3,
//       nameAccount: 'Konto Test Cztery',
//       valuesAccount: 4000,
//     },
//     {
//       id: 4,
//       nameAccount: 'Konto Pięć',
//       valuesAccount: 5000,
//     },
//   ],
// };

class AccountsBalancePage extends React.Component {
  /* eslint-disable react/no-unused-state */
  state = {
    accounts: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3030/api/accounts', {
        headers: {
          /* eslint-disable no-undef */
          'auth-token': localStorage.getItem('auth-token'),
        },
      })
      .then((response) => {
        this.setState({ accounts: response.data });
      })
      .then((err) => err);
  }

  render() {
    const { accounts } = this.state;
    return (
      <>
        {
          /* eslint-disable no-undef */
          localStorage.getItem('auth-token') ? (
            <DashboardTemplate name="Accounts Balance">
              <AccountBoard accounts={accounts} name="Accounts Balance" />
            </DashboardTemplate>
          ) : (
            <Redirect to="/login" />
          )
        }
      </>
    );
  }
}

export default AccountsBalancePage;

/* <AccountStateCard accounts={Profile.accounts} /> */
