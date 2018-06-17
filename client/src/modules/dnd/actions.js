import { DROP } from './types';

const drop = component => ({
  type: DROP,
  payload: {
    component,
  },
});

export { drop };
