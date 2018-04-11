import { UserService } from '../services/UserService';
import { USER_GET_REQUEST,
         USER_GET_SUCCESS,
         USER_GET_FAILED } from '../constants/userActionTypes';

export function getUserRequest(userId) {
  return {
    type: USER_GET_REQUEST,
    payload: userId
  }
}

export function getUserSuccess(userData) {
  return {
    type: USER_GET_SUCCESS,
    payload: userData
  }
}

export function getUserFailed(msg) {
  return {
    type: USER_GET_FAILED,
    payload: msg
  }
}
