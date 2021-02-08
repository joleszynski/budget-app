import axios from 'axios';
import { AUTH_SUCCESS, AUTH_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE } from './index';

export const authenticate = (email, password) => (dispatch) => {
  axios
    .post('http://localhost:5000/api/user/login', {
      email,
      password,
    })
    .then((payload) => {
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch(({ message }) => {
      dispatch({ type: AUTH_FAILURE, payload: message });
    });
};

export const register = (name, email, password) => (dispatch) => {
  axios
    .post('http://localhost:5000/api/user/register', {
      name,
      email,
      password,
    })
    .then((payload) => {
      dispatch({ type: REGISTER_SUCCESS, payload });
    })
    .catch(({ response }) => {
      const { text } = response;
      dispatch({ type: REGISTER_FAILURE, payload: text });
    });
};
