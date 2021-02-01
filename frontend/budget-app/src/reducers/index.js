import { combineReducers } from 'redux';
import auth from 'reducers/auth';
import accountBalance from 'reducers/accountBalance';
import toggle from 'reducers/toggle';
import outgoings from 'reducers/outgoings';

export default combineReducers({
  auth,
  accountBalance,
  toggle,
  outgoings,
});
