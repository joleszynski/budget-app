import {
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
  ADD_ACCOUNT_FAILURE,
  ADD_ACCOUNT_SUCCESS,
  GET_ACCOUNTS_LIST_SUCCESS,
  GET_ACCOUNTS_LIST_FAIL,
} from 'actions';

const initialState = {
  accounts: null,
};

/* eslint-disable no-alert */
/* eslint-disable no-undef */
export default function accountBalance(state = initialState, { type, payload }) {
  switch (type) {
    case DELETE_ACCOUNT_SUCCESS:
      alert(payload);
      return {
        ...state,
      };
    case DELETE_ACCOUNT_FAILURE:
      alert(payload);
      return {
        ...state,
      };
    case ADD_ACCOUNT_SUCCESS:
      alert(payload);
      return {
        ...state,
      };
    case ADD_ACCOUNT_FAILURE:
      alert(payload);
      return {
        ...state,
      };
    case GET_ACCOUNTS_LIST_SUCCESS:
      return {
        ...state,
        accounts: payload,
      };
    case GET_ACCOUNTS_LIST_FAIL:
      alert(payload);
      return {
        ...state,
      };

    default:
      return state;
  }
}
