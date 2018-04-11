import { POST_GET_REQUEST, POST_GET_SUCCESS } from '../constants/postActionTypes';

const initialState = {
  payload: {}
}

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case POST_GET_REQUEST:
      return { ...state, payload, isFetching: true };
    case POST_GET_SUCCESS:
      return { ...state, payload, isFetching: false };
    default:
      return state;
  }
}
