import React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import DashboardInnerTemplate from 'templates/DashboradInnerTemplate';

const IncomePage = () => (
  <DashboardTemplate name="Income">
    <DashboardInnerTemplate pageType="income" />
  </DashboardTemplate>
);

export default IncomePage;
