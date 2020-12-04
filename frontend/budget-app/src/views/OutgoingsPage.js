import React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import DashboardInnerTemplate from 'templates/DashboradInnerTemplate';

const OutgoingsPage = () => (
  <DashboardTemplate name="Outgoings">
    <DashboardInnerTemplate pageType="outgoings" />
  </DashboardTemplate>
);

export default OutgoingsPage;
