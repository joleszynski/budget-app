import { GET_INCOMES_LIST, FAILURE_ADD_INCOME_RECORD, FAILURE_DELETE_INCOME_RECORD } from 'actions';

const initialState = {
  incomesList: [],
};

export default function incomes(state = initialState, { type, payload }) {
  /* eslint-disable */
  switch (type) {
    case GET_INCOMES_LIST:
      return {
        incomesList: payload,
      };
    case FAILURE_ADD_INCOME_RECORD:
      alert(payload);
      return {
        ...state,
      };
    case FAILURE_DELETE_INCOME_RECORD:
      alert(payload);
      return {
        ...state,
      };
    default:
      return state;
  }
}
