import { combineReducers } from 'redux';
import auth from 'reducers/auth';
import accountBalance from 'reducers/accountBalance';
import toggle from 'reducers/toggle';
import outgoings from 'reducers/outgoings';
import incomes from 'reducers/incomes';
import transfers from 'reducers/transfers';

export default combineReducers({
  auth,
  accountBalance,
  toggle,
  outgoings,
  incomes,
  transfers,
});
