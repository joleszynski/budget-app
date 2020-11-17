import { OPTIONS_BOOL } from 'actions/index';

const initialState = {
  options: false,
};

export default function toggle(state = initialState, { type }) {
  switch (type) {
    case OPTIONS_BOOL:
      return {
        options: !state.options,
      };
    default:
      return state;
  }
}
