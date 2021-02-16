import { AUTH_FAILURE, AUTH_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT } from 'actions';

const initialState = {
  loggedIn: false,
  user: null,
  loginFailure: false,
  registered: false,
};

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_SUCCESS:
      /* eslint-disable no-undef */
      localStorage.setItem('auth-token', payload.data.token);
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
    case REGISTER_SUCCESS:
      /* eslint-disable no-undef */
      // localStorage.setItem('auth-token', payload.data[0]);
      return {
        registered: true,
      };
    case REGISTER_FAILURE:
      return {
        registered: false,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        initialState,
      };
    default:
      return state;
  }
}
