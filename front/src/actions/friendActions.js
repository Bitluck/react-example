import { GET_FRIEND_RELATION_REQUEST,
         GET_FRIEND_RELATION_SUCCESS,
         MAKE_FRIENDS_REQUEST,
         MAKE_FRIENDS_SUCCESS,
         GET_FRIENDS_REQUEST,
         GET_IN_REQUESTS_REQUEST,
         GET_OUT_REQUESTS_REQUEST,
         GET_FRIENDS_SUCCESS,
         GET_FRIENDS_FAILED,
         CHANGE_SELECTED_FRIENDS_TAB } from '../constants/friendActionTypes';

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

export function getFriendsRequest(userId) {
  return {
    type: GET_FRIENDS_REQUEST,
    payload: { userId }
  }
}

export function getInRequests(userId) {
  return {
    type: GET_IN_REQUESTS_REQUEST,
    payload: { userId }
  }
}

export function getOutRequests(userId) {
  return {
    type: GET_OUT_REQUESTS_REQUEST,
    payload: { userId }
  }
}

export function getFriendsSuccess(friendsData) {
  return {
    type: GET_FRIENDS_SUCCESS,
    payload: { friendsData }
  }
}

export function getFriendsFailed(msg) {
  return {
    type: GET_FRIENDS_FAILED,
    payload: { msg }
  }
}

export function changeSelectedFriendsTab(selectedTab, tabNamespace, userId) {
  return {
    type: CHANGE_SELECTED_FRIENDS_TAB,
    payload: { tab: selectedTab, namespace: tabNamespace, id: userId }
  }
}
