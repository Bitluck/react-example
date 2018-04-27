import { call, put, select, takeLatest } from 'redux-saga/effects';

import { AUTH_LOGIN_REQUEST, AUTH_REGISTER_REQUEST, AUTH_LOGOUT_REQUEST } from '../constants/authActionTypes';
import {
  loginSuccess,
  loginFailed,
  registerSuccess,
  registerFailed,
  logoutSuccess } from '../actions/authActions';
import AuthService from '../services/AuthService';

const authService = new AuthService();

function* loginUser(action) {
  try {
    const user = yield call(authService.login, action.payload);

    if(user.status === 200) {
      localStorage.loggedIn = true;
      
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

    if(user.status === 201) {
      yield put(registerSuccess({ data: user.data }));
    } else {
      yield put(registerFailed(user.message));
    }
  } catch(err) {
      yield put(registerFailed(err.message));
  }
}

function* logoutUser(action) {
  try {
    const result = yield call(authService.logout);

    if(result.status === 200) {
      localStorage.removeItem('loggedIn');

      yield put(logoutSuccess());
    }
  } catch(err) {

  }
}

export function* watchLoginSaga() {
  yield takeLatest(AUTH_LOGIN_REQUEST, loginUser);
  yield takeLatest(AUTH_REGISTER_REQUEST, registerUser);
  yield takeLatest(AUTH_LOGOUT_REQUEST, logoutUser);
}
