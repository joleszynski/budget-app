import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { authSuccess } from 'actions';
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

  requestAuth = () => {
    const { email, password } = this.state;
    /* eslint-disable no-shadow */
    const { authSuccess } = this.props;

    axios
      .post('http://localhost:3030/api/user/login', {
        email,
        password,
      })
      .then((response) => {
        const { data } = response;
        console.log('LoginPage');
        authSuccess(data);
      })
      .catch((err) => {
        return err;
      });
  };

  render() {
    const { email, password } = this.state;

    return (
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
          <Button onClick={() => this.requestAuth()}>Log In</Button>
        </>
      </AuthTemplate>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authSuccess: (data) => dispatch(authSuccess(data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);

LoginPage.propTypes = {
  authSuccess: PropTypes.func.isRequired,
};
