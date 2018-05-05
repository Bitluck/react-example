import { all, fork } from 'redux-saga/effects';

import { watchFriendSaga } from './friend';
import { watchGetUserSaga } from './user';
import { watchLoginSaga } from './auth';
import { watchPostSaga } from './post';

export default function* root() {
  yield all([
    fork(watchGetUserSaga),
    fork(watchLoginSaga),
    fork(watchPostSaga),
    fork(watchFriendSaga)
  ])
}
