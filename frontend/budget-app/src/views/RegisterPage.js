import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { register } from 'actions/auth';
import AuthTemplate from 'templates/AuthTemplate';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

class RegisterPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  render() {
    const { email, password, name } = this.state;
    const { registered, registerAction } = this.props;

    return registered ? (
      <Redirect to="/login" />
    ) : (
      <AuthTemplate title="Register">
        <>
          <Input
            id="name"
            placeholder="Name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
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
          <Button onClick={() => registerAction(name, email, password)}>Register</Button>
        </>
      </AuthTemplate>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { registered } = auth;
  return {
    registered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerAction: (name, email, password) => dispatch(register(name, email, password)),
  };
};

RegisterPage.propTypes = {
  registerAction: PropTypes.func.isRequired,
  registered: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
