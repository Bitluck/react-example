import { all, fork } from 'redux-saga/effects';

import { watchGetUserSaga } from './user';
import { watchLoginSaga } from './auth';

export default function* root() {
  yield all([
    fork(watchGetUserSaga),
    fork(watchLoginSaga)
  ])
}
