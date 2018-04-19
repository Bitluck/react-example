import { call, put, select, takeLatest } from 'redux-saga/effects';
import { withRouter } from 'react-router-dom';

import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_REGISTER_REQUEST } from '../constants/authActionTypes';
import {
  loginSuccess,
  loginFailed,
  registerSuccess,
  registerFailed } from '../actions/authActions';
import AuthService from '../services/AuthService';

const authService = new AuthService();

function* loginUser(action) {
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

function* registerUser(action) {
  try {
    const user = yield call(authService.register, action. payload);

    console.log({ user });

    if(user.status === 201) {
      yield put(registerSuccess({ data: user.data }));
    } else {
      yield put(registerFailed(user.message));
    }
  } catch(err) {
      yield put(registerFailed(err.message));
  }
}

export function* watchLoginSaga() {
  yield takeLatest(AUTH_LOGIN_REQUEST, loginUser);
  yield takeLatest(AUTH_REGISTER_REQUEST, registerUser);
}
