import React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import AccountBoard from 'components/molecules/AccountBoard/AccountBoard';

const Profile = {
  accounts: [
    {
      id: 1,
      nameAccount: 'Konto Test',
      valuesAccount: 1000,
    },
    {
      id: 2,
      nameAccount: 'Konto Test Trzy',
      valuesAccount: 3000,
    },
    {
      id: 3,
      nameAccount: 'Konto Test Cztery',
      valuesAccount: 4000,
    },
    {
      id: 4,
      nameAccount: 'Konto Pięć',
      valuesAccount: 5000,
    },
  ],
};

const AccountsBalancePage = () => (
  <DashboardTemplate name="Accounts Balance">
    <AccountBoard accounts={Profile.accounts} name="Accounts Balance" />
  </DashboardTemplate>
);

export default AccountsBalancePage;

/* <AccountStateCard accounts={Profile.accounts} /> */
