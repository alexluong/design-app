import { DROP } from './types';

const initialState = {
  elements: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DROP:
      return {
        elements: [action.payload.position, ...state.elements],
      };
    default:
      return state;
  }
};

export default reducer;
