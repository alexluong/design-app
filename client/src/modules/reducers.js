import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import authReducer, { SIGN_OUT } from 'modules/auth';
import dndReducer from 'modules/dnd';
import editorReducer from 'modules/editor';
import userReducer from 'modules/user';
import uploadReducer from 'modules/upload';

const appReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  dnd: dndReducer,
  editor: editorReducer,
  user: userReducer,
  upload: uploadReducer,
});

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
