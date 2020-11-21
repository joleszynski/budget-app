import { DELETE_ACCOUNT_SUCCESS, DELETE_ACCOUNT_FAILURE } from 'actions';

const initialState = {};

/* eslint-disable no-alert */
/* eslint-disable no-undef */
export default function accountBalance(state = initialState, { type, payload }) {
  switch (type) {
    case DELETE_ACCOUNT_SUCCESS:
      alert(payload);
      return state;
    case DELETE_ACCOUNT_FAILURE:
      alert(payload);
      return state;
    default:
      return state;
  }
}
