import { USER_GET_REQUEST, USER_GET_SUCCESS } from '../constants/userActionTypes';

import { merge } from 'lodash';

const initialState = {
  user: {},
  userData: {},
  payload: {},
  isFetching: true,
  full: false
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case USER_GET_REQUEST:
      return { ...state, payload, isFetching: true };
    case USER_GET_SUCCESS:
      return { ...state, payload, isFetching: false };
    default:
      return state;
  }
}
