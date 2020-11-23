import axios from 'axios';
import {
  DELETE_ACCOUNT_FAILURE,
  DELETE_ACCOUNT_SUCCESS,
  ADD_ACCOUNT_FAILURE,
  ADD_ACCOUNT_SUCCESS,
} from './index';

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

export const addAccount = (accountName, accountValue) => (dispatch) => {
  axios
    .post(
      'http://localhost:3030/api/accounts/add',
      {
        /* eslint-disable  */
        accountName,
        accountValue,
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
    })
    .catch(({ response }) => {
      const { data } = response;
      dispatch({ type: ADD_ACCOUNT_FAILURE, payload: data });
    });
};
