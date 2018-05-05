import { GET_FRIEND_RELATION_REQUEST,
         GET_FRIEND_RELATION_SUCCESS,
         MAKE_FRIENDS_REQUEST,
         MAKE_FRIENDS_SUCCESS } from '../constants/friendActionTypes';

export function getFriendRelationRequest(userId) {
  return {
    type: GET_FRIEND_RELATION_REQUEST,
    payload: { userId }
  }
}

export function getFriendRelationSuccess(relation) {
  return {
    type: GET_FRIEND_RELATION_SUCCESS,
    payload: { relation }
  }
}

export function makeFriendsRequest(userId) {
  return {
    type: MAKE_FRIENDS_REQUEST,
    payload: { userId }
  }
}

export function makeFriendsSuccess(result) {
  return {
    type: MAKE_FRIENDS_SUCCESS,
    payload: { result }
  }
}
