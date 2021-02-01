import axios from 'axios';
import {
  DELETE_ACCOUNT_FAILURE,
  DELETE_ACCOUNT_SUCCESS,
  ADD_ACCOUNT_FAILURE,
  ADD_ACCOUNT_SUCCESS,
  GET_ACCOUNTS_LIST_SUCCESS,
  GET_ACCOUNTS_LIST_FAIL,
} from './index';

export const deleteAccount = (id) => (dispatch) => {
  axios
    .post(
      'http://localhost:5000/api/accounts/delete',
      {
        /* eslint-disable  */
        id,
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
      dispatch(getAccounts);
    })
    .catch(({ response }) => {
      const { data } = response;
      dispatch({ type: DELETE_ACCOUNT_FAILURE, payload: data });
    });
};

export const addAccount = (name, value) => (dispatch) => {
  axios
    .post(
      'http://localhost:5000/api/accounts/add',
      {
        /* eslint-disable  */
        name,
        value,
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
      dispatch({ type: ADD_ACCOUNT_SUCCESS, payload: data });
      dispatch(getAccounts);
    })
    .catch(({ response }) => {
      const { data } = response;
      dispatch({ type: ADD_ACCOUNT_FAILURE, payload: data });
    });
};

export const getAccounts = (dispatch) => {
  axios
    .get('http://localhost:5000/api/accounts', {
      headers: {
        /* eslint-disable no-undef */
        'auth-token': localStorage.getItem('auth-token'),
      },
    })
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_ACCOUNTS_LIST_SUCCESS, payload: data.accounts });
    })
    .catch(({ response }) => {
      // const { data } = response;
      dispatch({ type: GET_ACCOUNTS_LIST_FAIL, payload: response });
    });
};
