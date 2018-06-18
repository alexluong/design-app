import { UPDATE, DROP, CLEAR } from './types';

const initialState = {
  components: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
    case DROP:
      const component = action.payload.component;
      const { id, type, position, dimension } = component;
      return {
        components: {
          ...state.components,
          [component.id]: { id, type, position, dimension },
        },
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
