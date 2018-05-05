import { USER_GET_REQUEST, USER_GET_SUCCESS, GET_CURRENT_USER_SUCCESS } from '../constants/userActionTypes';

import { merge } from 'lodash';

const initialState = {
  user: {},
  userData: {},
  currentUser: {},
  payload: {},
  isFetching: true,
  full: false,
  userId: null
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case USER_GET_REQUEST:
      return { ...state, userId : payload, isFetching: true };
    case USER_GET_SUCCESS:
      return { ...state, payload, isFetching: false };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, currentUser: payload.data };
    default:
      return state;
  }
}
