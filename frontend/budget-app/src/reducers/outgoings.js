import {
  GET_OUTGOINGS_LIST,
  FAILURE_ADD_OUTGOING_RECORD,
  FAILURE_DELETE_OUTGOING_RECORD,
} from 'actions';

const initialState = {
  outgoingsList: [],
};

export default function outgoings(state = initialState, { type, payload }) {
  /* eslint-disable */
  switch (type) {
    case GET_OUTGOINGS_LIST:
      return {
        outgoingsList: payload,
      };
    case FAILURE_ADD_OUTGOING_RECORD:
      alert(payload);
      return {
        ...state,
      };
    case FAILURE_DELETE_OUTGOING_RECORD:
      alert(payload);
      return {
        ...state,
      };
    default:
      return state;
  }
}
