import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import DashboardPage from 'views/DashboardPage';
import LoginPage from 'views/LoginPage';

const Root = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={DashboardPage} />
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
