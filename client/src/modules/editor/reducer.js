import { SELECT } from './types';

const initialState = {
  selected: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT:
      return { selected: action.payload.selected };
    default:
      return state;
  }
};

export default reducer;
