import { MOVE, DROP } from './types';

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
    default:
      return state;
  }
};

export default reducer;
