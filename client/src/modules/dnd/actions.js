import { MOVE, DROP, CLEAR } from './types';

const move = component => ({
  type: MOVE,
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

export { move, drop, clear };
