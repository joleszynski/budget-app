import React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import NameHeading from 'components/molecules/ColumnNameHeading/ColumnNameHeading';

const OutgoingsPage = () => (
  <DashboardTemplate name="Outgoings">
    <NameHeading pageType="outgoings" />
  </DashboardTemplate>
);

export default OutgoingsPage;
