import { MOVE, DROP } from './types';

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

export { move, drop };
