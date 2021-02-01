import axios from 'axios';
import {
  GET_OUTGOINGS_LIST,
  FAILURE_ADD_OUTGOING_RECORD,
  FAILURE_DELETE_OUTGOING_RECORD,
} from 'actions';

export const getOutgoingsList = (dispatch) => {
  axios
    .get('http://localhost:5000/api/outgoings', {
      headers: {
        /* eslint-disable no-undef */
        'auth-token': localStorage.getItem('auth-token'),
      },
    })
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_OUTGOINGS_LIST, payload: data.outgoings });
    });
};

export const addOutgoingRecord = (date, account, category, value) => (dispatch) => {
  axios
    .post(
      'http://localhost:5000/api/outgoings/add',
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
    .then(() => dispatch(getOutgoingsList))
    .catch(({ response }) => {
      const { data } = response;
      dispatch({ type: FAILURE_ADD_OUTGOING_RECORD, payload: data.message });
    });
};

export const deleteOutgoingRecord = (id) => (dispatch) => {
  axios
    .post(
      'http://localhost:5000/api/outgoings/delete',
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
    .then(() => dispatch(getOutgoingsList))
    .catch(({ response }) => {
      const { data } = response;
      dispatch({ type: FAILURE_DELETE_OUTGOING_RECORD, payload: data.message });
    });
};
