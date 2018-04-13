import { call, put, takeLatest } from 'redux-saga/effects';
import { getUserSuccess, getUserFailed } from '../actions/userActions';
import UserService from '../services/UserService';

import { USER_GET_REQUEST,
         USER_GET_SUCCESS,
         USER_GET_FAILED } from '../constants/userActionTypes';

const userService = new UserService();

function* fetchUser(action) {
  try {
    const user = yield call(userService.getUser, action.payload);
    yield put(getUserSuccess({ status: user.status, data: user.data }));
  } catch(err) {
    yield put(getUserFailed(err.message));
  }
}

export function* watchGetUserSaga() {
  yield takeLatest(USER_GET_REQUEST, fetchUser);
}
