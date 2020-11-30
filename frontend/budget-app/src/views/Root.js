import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { PrivateRoute } from 'components/atoms/PrivateRoute/PrivateRoute';
import LoginPage from 'views/LoginPage';
import AccountsPage from 'views/AccountsPage';
import OutgoingsPage from 'views/OutgoingsPage';
import TransfersPage from 'views/TransfersPage';
import IncomePage from 'views/IncomePage';

const Root = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <PrivateRoute exact path="/accounts" component={AccountsPage} />
        <PrivateRoute exact path="/outgoings" component={OutgoingsPage} />
        <PrivateRoute exact path="/transfers" component={TransfersPage} />
        <PrivateRoute exact path="/income" component={IncomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
