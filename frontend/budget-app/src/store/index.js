import { createStore } from 'redux';
import rootReducer from 'reducers/index';

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const store = createStore(
  rootReducer,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
