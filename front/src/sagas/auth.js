import { call, put, takeLatest } from 'redux-saga/effects';
import { withRouter } from 'react-router-dom';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS } from '../constants/authActionTypes';
import { loginRequest, loginSuccess, loginFailed } from '../actions/authActions';
import AuthService from '../services/AuthService';

const authService = new AuthService();

function* loginUserRequest(action) {
  try {
    const user = yield call(authService.login, action.payload);

    if(user.status === 200) {
      yield put(loginSuccess({ status: user.status, data: user.data }));
    } else {
      yield put(loginFailed(user.message));
    }
  } catch(err) {
    yield put(loginFailed(err.message));
  }
}

export function* watchLoginSaga() {
  yield takeLatest(AUTH_LOGIN_REQUEST, loginUserRequest);
}
