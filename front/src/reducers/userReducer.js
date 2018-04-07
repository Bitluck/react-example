import { userActionTypes } from '../constants/userActionTypes';
const { GET_USER } = userActionTypes;

export function userReducer(state = {}, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
}
