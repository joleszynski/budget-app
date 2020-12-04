import React from 'react';
import NameHeading from 'components/molecules/ColumnNameHeading/ColumnNameHeading';
import DashboardTemplate from 'templates/DashboardTemplate';

const TransfersPage = () => (
  <DashboardTemplate name="Transfers">
    <NameHeading pageType="transfers" />
  </DashboardTemplate>
);

export default TransfersPage;
