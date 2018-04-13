import { AuthService } from '../services/AuthService';
import { 
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED
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
    payload: msg
  }
}

export function registerRequest(loginData) {
  return {
    type: AUTH_REGISTER_REQUEST,
    payload: loginData
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
    payload: msg
  }
}
