import axios from 'axios';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const OPTIONS_BOOL = 'OPTIONS_BOOL';

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

export const toggleOptions = () => ({
  type: OPTIONS_BOOL,
});
