import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { authenticate } from 'actions/index';
import AuthTemplate from 'templates/AuthTemplate';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  render() {
    const { email, password } = this.state;
    const { loggedIn, authenticateAction } = this.props;

    return loggedIn ? (
      <Redirect to="/" />
    ) : (
      <AuthTemplate>
        <>
          <Input
            id="email"
            placeholder="Email"
            type="text"
            value={email}
            onChange={this.handleChange}
          />
          <Input
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <Button onClick={() => authenticateAction(email, password)}>Log In</Button>
        </>
      </AuthTemplate>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loggedIn } = auth;
  return {
    loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateAction: (email, password) => dispatch(authenticate(email, password)),
  };
};

LoginPage.propTypes = {
  authenticateAction: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
