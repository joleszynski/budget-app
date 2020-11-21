import axios from 'axios';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const OPTIONS_BOOL = 'OPTIONS_BOOL';
export const DISPLAY_MODAL_ON = 'DISPLAY_MODAL_ON';
export const DISPLAY_MODAL_OFF = 'DISPLAY_MODAL_OFF';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_FAILURE = 'DELETE_ACCOUNT_FAILURE';

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

export const displayModalOn = () => ({
  type: DISPLAY_MODAL_ON,
});

export const displayModalOff = () => ({
  type: DISPLAY_MODAL_OFF,
});

export const deleteAccount = (accountName) => (dispatch) => {
  axios
    .post(
      'http://localhost:3030/api/accounts/delete',
      {
        /* eslint-disable  */
        accountName,
      },
      {
        headers: {
          /* eslint-disable no-undef */
          'auth-token': localStorage.getItem('auth-token'),
        },
      },
    )
    .then((response) => {
      const { data } = response;
      dispatch({ type: DELETE_ACCOUNT_SUCCESS, payload: data });
    })
    .catch(({ response }) => {
      const { data } = response;
      dispatch({ type: DELETE_ACCOUNT_FAILURE, payload: data });
    });
};
