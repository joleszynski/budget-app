import { AUTH_SUCCESS } from 'actions';

const initialState = {
  loggedIn: false,
  user: null,
};

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_SUCCESS:
      return {
        loggedIn: true,
        user: payload,
      };
    default:
      return state;
  }
}
