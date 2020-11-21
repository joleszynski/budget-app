import { OPTIONS_BOOL, DISPLAY_MODAL_ON, DISPLAY_MODAL_OFF } from 'actions/index';

const initialState = {
  options: false,
  modalDisplay: false,
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
    default:
      return state;
  }
}
