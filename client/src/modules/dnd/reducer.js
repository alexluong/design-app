import { MOVE, DROP, CLEAR } from './types';

const initialState = {
  components: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE:
    case DROP:
      const component = action.payload.component;
      const { id, type, position } = component;
      return {
        components: {
          ...state.components,
          [component.id]: { id, type, position },
        },
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
