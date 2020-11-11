import React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import AccountStateCard from 'components/molecules/AccountStateCard/AccountStateCard';

const Profile = {
  accounts: [
    {
      nameAccount: 'Konto Test',
      valuesAccount: 1000,
    },
    {
      nameAccount: 'Konto Test Dwa',
      valuesAccount: 2000,
    },
    {
      nameAccount: 'Konto Test Dwa',
      valuesAccount: 2000,
    },
    {
      nameAccount: 'Konto Test Dwa',
      valuesAccount: 2000,
    },
    {
      nameAccount: 'Konto Test Dwa',
      valuesAccount: 2000,
    },
  ],
};

const DashboardPage = () => (
  <DashboardTemplate>
    <AccountStateCard accounts={Profile.accounts} />
  </DashboardTemplate>
);

export default DashboardPage;
