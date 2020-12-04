import React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import DashboardInnerTemplate from 'templates/DashboradInnerTemplate';

const TransfersPage = () => (
  <DashboardTemplate name="Transfers">
    <DashboardInnerTemplate pageType="transfers" />
  </DashboardTemplate>
);

export default TransfersPage;
