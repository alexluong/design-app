import { SELECT } from './types';

const select = selected => ({
  type: SELECT,
  payload: {
    selected,
  },
});

export { select };
