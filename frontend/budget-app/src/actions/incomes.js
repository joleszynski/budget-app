import axios from 'axios';
import { GET_INCOMES_LIST, FAILURE_ADD_INCOME_RECORD, FAILURE_DELETE_INCOME_RECORD } from 'actions';

export const getIncomesList = (dispatch) => {
  axios
    .get('http://localhost:5000/api/incomes', {
      headers: {
        /* eslint-disable no-undef */
        'auth-token': localStorage.getItem('auth-token'),
      },
    })
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_INCOMES_LIST, payload: data.incomes });
    });
};

export const addIncomeRecord = (date, account, category, value) => (dispatch) => {
  axios
    .post(
      'http://localhost:5000/api/incomes/add',
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
    .then(() => dispatch(getIncomesList))
    .catch(({ response }) => {
      const { data } = response;
      dispatch({ type: FAILURE_ADD_INCOME_RECORD, payload: data.message });
    });
};

export const deleteIncomeRecord = (id) => (dispatch) => {
  axios
    .post(
      'http://localhost:5000/api/incomes/delete',
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
    .then(() => dispatch(getIncomesList))
    .catch(({ response }) => {
      const { data } = response;
      dispatch({ type: FAILURE_DELETE_INCOME_RECORD, payload: data.message });
    });
};
