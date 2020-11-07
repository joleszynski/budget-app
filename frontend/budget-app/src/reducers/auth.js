import { AUTH_SUCCESS } from 'actions';

const initialState = {
  loggedIn: false,
  user: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      console.log('OK');
      return {
        loggedIn: true,
        user: action.payload,
      };
    default:
      console.log('ERRRRR');
      return state;
  }
}
