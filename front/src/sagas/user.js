import { call, put, takeLatest } from 'redux-saga/effects';
import { getUserSuccess,
         getUserFailed,
         getCurrentUserSuccess } from '../actions/userActions';
import UserService from '../services/UserService';

import { USER_GET_REQUEST,
         GET_CURRENT_USER_REQUEST } from '../constants/userActionTypes';

const userService = new UserService();

function* fetchUser(action) {
  try {
    const user = yield call(userService.getUser, action.payload);
    yield put(getUserSuccess({ status: user.status, data: user.data }));
  } catch(err) {
    yield put(getUserFailed(err.message));
  }
}

function* fetchCurrentUser(action) {
  try {
    const currentUser = yield call(userService.getCurrentUser);

    yield put(getCurrentUserSuccess(currentUser));
  } catch(err) {
    yield put(getUserFailed(err.message));
  }
}

export function* watchGetUserSaga() {
  yield takeLatest(USER_GET_REQUEST, fetchUser);
  yield takeLatest(GET_CURRENT_USER_REQUEST, fetchCurrentUser);
}
