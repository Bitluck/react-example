import { call, put, takeLatest } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailed } from '../actions/authActions';
import AuthService from '../services/AuthService';

import { AUTH_LOGIN_REQUEST } from '../constants/authActionTypes';

const authService = new AuthService();

function* loginUserRequest(action) {
  try {
    const user = yield call(authService.login, action.payload);
    
    yield put(loginSuccess({ status: user.status, data: user.data }));
  } catch(err) {
    yield put(loginFailed(err.message));
  }
}

export function* watchLoginSaga() {
  yield takeLatest(AUTH_LOGIN_REQUEST, loginUserRequest);
}
