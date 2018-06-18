import { UPDATE, DROP, CLEAR } from './types';

const update = component => ({
  type: UPDATE,
  payload: {
    component,
  },
});

const drop = component => ({
  type: DROP,
  payload: {
    component,
  },
});

const clear = () => ({
  type: CLEAR,
});

export { update, drop, clear };
