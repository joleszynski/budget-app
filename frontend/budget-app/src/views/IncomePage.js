import React from 'react';
import NameHeading from 'components/molecules/ColumnNameHeading/ColumnNameHeading';
import DashboardTemplate from 'templates/DashboardTemplate';

const IncomePage = () => (
  <DashboardTemplate name="Income">
    <NameHeading pageType="income" />
  </DashboardTemplate>
);

export default IncomePage;
