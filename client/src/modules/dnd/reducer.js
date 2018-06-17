import { DROP } from './types';

const initialState = {
  components: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DROP:
      return {
        components: [action.payload.component, ...state.components],
      };
    default:
      return state;
  }
};

export default reducer;
