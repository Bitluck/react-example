import { POST_GET_REQUEST,
         POST_GET_SUCCESS,
         POST_PICTURE_CHOOSE } from '../constants/postActionTypes';

const initialState = {
  payload: {},
  files: []
}

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case POST_GET_REQUEST:
      return { ...state, payload, isFetching: true };
    case POST_GET_SUCCESS:
      return { ...state, payload, isFetching: false };
    case POST_PICTURE_CHOOSE:
      return { ...state, files: payload.files };
    default:
      return state;
  }
}
