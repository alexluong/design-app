import { all } from 'redux-saga/effects';

import { authSaga } from './auth';
import { dndSaga } from './dnd';
import { userSaga } from './user';
import { uploadSaga } from './upload';

export default function* sagas() {
  yield all([authSaga(), dndSaga(), userSaga(), uploadSaga()]);
}
