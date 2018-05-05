import { GET_FRIEND_RELATION_REQUEST,
         GET_FRIEND_RELATION_SUCCESS,
         GET_FRIEND_RELATION_FAILED } from '../constants/friendActionTypes';

const initialState = {
  payload: {},
  friendsData: [],
  relation: null
}

export default function friendReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_FRIEND_RELATION_REQUEST:
      return { ...state };
    case GET_FRIEND_RELATION_SUCCESS:
      return { ...state, relation: payload.relation };
    case GET_FRIEND_RELATION_FAILED:
      return { ...state };
    default:
      return state;
  }
}
