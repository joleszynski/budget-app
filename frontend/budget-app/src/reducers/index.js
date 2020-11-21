import { combineReducers } from 'redux';
import auth from 'reducers/auth';
import accountBalance from 'reducers/accountBalance';
import toggle from 'reducers/toggle';

export default combineReducers({
  auth,
  accountBalance,
  toggle,
});
