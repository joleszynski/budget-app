import {
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
  ADD_ACCOUNT_FAILURE,
  ADD_ACCOUNT_SUCCESS,
  GET_ACCOUNTS_LIST_SUCCESS,
  GET_ACCOUNTS_LIST_FAIL,
} from 'actions';

const initialState = {
  accounts: [],
};

/* eslint-disable no-alert */
/* eslint-disable no-undef */
export default function accountBalance(state = initialState, { type, payload }) {
  switch (type) {
    case DELETE_ACCOUNT_SUCCESS:
      alert(payload.message);
      return {
        ...state,
      };
    case DELETE_ACCOUNT_FAILURE:
      alert(payload.message);
      return {
        ...state,
      };
    case ADD_ACCOUNT_SUCCESS:
      alert(payload);
      return {
        accounts: [...accounts, payload.account],
      };
    case ADD_ACCOUNT_FAILURE:
      alert(payload.message);
      return {
        ...state,
      };
    case GET_ACCOUNTS_LIST_SUCCESS:
      return {
        accounts: payload,
      };
    case GET_ACCOUNTS_LIST_FAIL:
      alert(payload.message);
      return {
        ...state,
      };

    default:
      return state;
  }
}
