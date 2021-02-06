import {
  GET_TRANSFERS_LIST,
  FAILURE_ADD_TRANSFER_RECORD,
  FAILURE_DELETE_TRANSFER_RECORD,
} from 'actions';

const initialState = {
  transfersList: [],
};

export default function incomes(state = initialState, { type, payload }) {
  /* eslint-disable */
  switch (type) {
    case GET_TRANSFERS_LIST:
      return {
        transfersList: payload,
      };
    case FAILURE_ADD_TRANSFER_RECORD:
      alert(payload);
      return {
        ...state,
      };
    case FAILURE_DELETE_TRANSFER_RECORD:
      alert(payload);
      return {
        ...state,
      };
    default:
      return state;
  }
}
