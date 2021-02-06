import axios from 'axios';
import {
  GET_TRANSFERS_LIST,
  FAILURE_ADD_TRANSFER_RECORD,
  FAILURE_DELETE_TRANSFER_RECORD,
} from 'actions';

export const getTransfersList = (dispatch) => {
  axios
    .get('http://localhost:5000/api/transfers', {
      headers: {
        /* eslint-disable no-undef */
        'auth-token': localStorage.getItem('auth-token'),
      },
    })
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_TRANSFERS_LIST, payload: data.transfers });
    });
};

export const addTransferRecord = (date, account, category, value) => (dispatch) => {
  axios
    .post(
      'http://localhost:5000/api/transfers/add',
      {
        date,
        account,
        category,
        value,
      },
      {
        headers: {
          /* eslint-disable no-undef */
          'auth-token': localStorage.getItem('auth-token'),
        },
      },
    )
    .then(() => dispatch(getTransfersList))
    .catch(({ response }) => {
      const { data } = response;
      dispatch({ type: FAILURE_ADD_TRANSFER_RECORD, payload: data.message });
    });
};

export const deleteTransferRecord = (id) => (dispatch) => {
  axios
    .post(
      'http://localhost:5000/api/transfers/delete',
      {
        id,
      },
      {
        headers: {
          /* eslint-disable no-undef */
          'auth-token': localStorage.getItem('auth-token'),
        },
      },
    )
    .then(() => dispatch(getTransfersList))
    .catch(({ response }) => {
      const { data } = response;
      dispatch({ type: FAILURE_DELETE_TRANSFER_RECORD, payload: data.message });
    });
};
