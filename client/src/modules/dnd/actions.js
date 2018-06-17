import { DROP } from './types';

const drop = position => ({
  type: DROP,
  payload: { position },
});

export { drop };
