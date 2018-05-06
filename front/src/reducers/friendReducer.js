import { GET_FRIEND_RELATION_REQUEST,
         GET_FRIEND_RELATION_SUCCESS,
         GET_FRIEND_RELATION_FAILED,
         GET_FRIENDS_REQUEST,
         GET_FRIENDS_SUCCESS,
         GET_FRIENDS_FAILED,
         GET_IN_REQUESTS_REQUEST,
         GET_OUT_REQUESTS_REQUEST,
         CHANGE_SELECTED_FRIENDS_TAB } from '../constants/friendActionTypes';

const initialState = {
  payload: {},
  friendsData: [],
  searchResult: [],
  msg: '',
  relation: null,
  friendsTabs: null
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
    case GET_FRIENDS_REQUEST:
      return { ...state, friendsData: [], friendsTabs: 'friendsTab' };
    case GET_IN_REQUESTS_REQUEST:
    case GET_OUT_REQUESTS_REQUEST:
      return { ...state, friendsData: [] };
    case GET_FRIENDS_SUCCESS:
      return { ...state, friendsData: payload.friendsData || [] };
    case GET_FRIENDS_FAILED:
      return { ...state, msg: payload.msg };
    case CHANGE_SELECTED_FRIENDS_TAB:
      return { ...state, [payload.namespace]: payload.tab };
    default:
      return state;
  }
}
