import { AuthService } from '../services/AuthService';
import { 
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_FORM_NEXT_PAGE,
  AUTH_REGISTER_FORM_PREV_PAGE
} from '../constants/authActionTypes';

export function loginRequest(loginData) {
  return {
    type: AUTH_LOGIN_REQUEST,
    payload: loginData
  }
}

export function loginSuccess(userData) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload: userData
  }
}

export function loginFailed(msg) {
  return {
    type: AUTH_LOGIN_FAILED,
    payload: { loginMsg: msg }
  }
}

export function registerRequest(registerData) {
  return {
    type: AUTH_REGISTER_REQUEST,
    payload: registerData
  }
}

export function registerSuccess(userData) {
  return {
    type: AUTH_REGISTER_SUCCESS,
    payload: userData
  }
}

export function registerFailed(msg) {
  return {
    type: AUTH_REGISTER_FAILED,
    payload: { registerMsg: msg }
  }
}

export function logoutRequest() {
  return {
    type: AUTH_LOGOUT_REQUEST
  }
}

export function logoutSuccess() {
  return {
    type: AUTH_LOGOUT_SUCCESS
  }
}

export function registerFormNextPage() {
  return {
    type: AUTH_REGISTER_FORM_NEXT_PAGE
  }
}

export function registerFormPrevPage() {
  return {
    type: AUTH_REGISTER_FORM_PREV_PAGE
  }
}
