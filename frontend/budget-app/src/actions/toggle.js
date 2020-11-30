import {
  OPTIONS_BOOL,
  DISPLAY_MODAL_OFF,
  DISPLAY_MODAL_ON,
  TOGGLE_ACCOUNTS,
  TOGGLE_OUTGOINGS,
  TOGGLE_TRANSFERS,
  TOGGLE_INCOME,
} from './index';

export const toggleOptions = () => ({
  type: OPTIONS_BOOL,
});

export const displayModalOn = () => ({
  type: DISPLAY_MODAL_ON,
});

export const displayModalOff = () => ({
  type: DISPLAY_MODAL_OFF,
});

export const toggleAccounts = () => ({
  type: TOGGLE_ACCOUNTS,
});

export const toggleOutgoings = () => ({
  type: TOGGLE_OUTGOINGS,
});

export const toggleTransfers = () => ({
  type: TOGGLE_TRANSFERS,
});

export const toggleIncome = () => ({
  type: TOGGLE_INCOME,
});
