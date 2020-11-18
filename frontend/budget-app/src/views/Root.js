import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import AccountsBalancePage from 'views/AccountsBalancePage';
import LoginPage from 'views/LoginPage';

const Root = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={AccountsBalancePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
