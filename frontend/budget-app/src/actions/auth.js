import axios from 'axios';
import { AUTH_SUCCESS, AUTH_FAILURE } from './index';

export const authenticate = (email, password) => (dispatch) => {
  axios
    .post('http://localhost:3030/api/user/login', {
      email,
      password,
    })
    .then((payload) => {
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch(({ response }) => {
      const { text } = response;
      dispatch({ type: AUTH_FAILURE, payload: text });
    });
};
