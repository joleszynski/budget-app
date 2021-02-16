import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { logout } from 'actions/auth';
import Logout from 'components/atoms/Logout/Logout';

const StyledWrapper = styled.div`
  margin: 70px auto 0 auto;
  width: 60%;
  display: flex;
`;

const MainFooter = ({ logoutAction, loggedIn }) => (
  <StyledWrapper>
    {!loggedIn && <Redirect to="/login" />}
    <Logout onClick={() => logoutAction()} />
  </StyledWrapper>
);

const mapStateToProps = ({ auth }) => {
  const { loggedIn } = auth;
  return {
    loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutAction: () => dispatch(logout()),
  };
};

MainFooter.propTypes = {
  logoutAction: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainFooter);
