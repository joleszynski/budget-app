import { OPTIONS_BOOL, DISPLAY_MODAL_OFF, DISPLAY_MODAL_ON } from './index';

export const toggleOptions = () => ({
  type: OPTIONS_BOOL,
});

export const displayModalOn = () => ({
  type: DISPLAY_MODAL_ON,
});

export const displayModalOff = () => ({
  type: DISPLAY_MODAL_OFF,
});
