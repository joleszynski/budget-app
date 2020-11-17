import { combineReducers } from 'redux';
import auth from 'reducers/auth';
import toggle from 'reducers/toggle';

export default combineReducers({
  auth,
  toggle,
});
