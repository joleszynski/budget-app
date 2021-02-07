import {
  OPTIONS_BOOL,
  DISPLAY_MODAL_ON,
  DISPLAY_MODAL_OFF,
  TOGGLE_ACCOUNTS,
  TOGGLE_OUTGOINGS,
  TOGGLE_TRANSFERS,
  TOGGLE_INCOME,
} from 'actions/index';

const initialState = {
  options: false,
  modalDisplay: false,
  // eslint-disable-next-line no-undef
  dashboardState: window.location.pathname,
};

export default function toggle(state = initialState, { type }) {
  switch (type) {
    case OPTIONS_BOOL:
      return {
        ...state,
        options: !state.options,
      };
    case DISPLAY_MODAL_ON:
      return {
        ...state,
        modalDisplay: true,
      };
    case DISPLAY_MODAL_OFF:
      return {
        ...state,
        modalDisplay: false,
      };
    case TOGGLE_ACCOUNTS:
      return {
        ...state,
        dashboardState: '/accounts',
      };
    case TOGGLE_INCOME:
      return {
        ...state,
        dashboardState: '/income',
      };
    case TOGGLE_OUTGOINGS:
      return {
        ...state,
        dashboardState: '/outgoings',
      };
    case TOGGLE_TRANSFERS:
      return {
        ...state,
        dashboardState: '/transfers',
      };
    default:
      return state;
  }
}
