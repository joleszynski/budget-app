import { AUTH_FAILURE, AUTH_SUCCESS } from 'actions';

const initialState = {
  loggedIn: false,
  user: null,
  loginFailure: false,
};

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_SUCCESS:
      /* eslint-disable no-undef */
      localStorage.setItem('auth-token', payload.data[0]);
      return {
        loggedIn: true,
        user: payload,
        loginFailure: false,
      };
    case AUTH_FAILURE:
      return {
        loggedIn: false,
        user: null,
        dataError: payload,
        loginFailure: true,
      };
    default:
      return state;
  }
}
