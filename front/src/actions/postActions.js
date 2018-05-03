import { POST_CREATE_REQUEST,
         POST_GET_REQUEST,
         POST_CREATE_SUCCESS,
         POST_PICTURE_CHOOSE,
         GET_USER_POSTS_REQUEST,
         GET_USER_POSTS_SUCCESS,
         GET_USER_POSTS_FAILED,
         GET_FEED_POSTS_REQUEST,
         GET_FEED_POSTS_SUCCESS,
         GET_FEED_POSTS_FAILED,
         GET_USER_MORE_POSTS_REQUEST,
         GET_FEED_MORE_POSTS_REQUEST } from '../constants/postActionTypes';

export function postPictureChoose(files) {
  return {
    type: POST_PICTURE_CHOOSE,
    payload: { files }
  }
}

export function postGetRequest(postId) {
  return {
    type: POST_GET_REQUEST,
    payload: { postId }
  }
}

export function postCreateRequest(postData) {
  return {
    type: POST_CREATE_REQUEST,
    payload: { postData }
  }
}

export function getUserPostsRequest(userId, offset, limit) {
  return {
    type: GET_USER_POSTS_REQUEST,
    payload: { userId, offset, limit }
  }
}

export function getUserMorePostsRequest(offset, limit, userId) {
  return {
    type: GET_USER_MORE_POSTS_REQUEST,
    payload: { userId, offset, limit }
  }
}

export function getFeedPostsRequest(offset, limit) {
  return {
    type: GET_FEED_POSTS_REQUEST,
    payload: { offset, limit }
  }
}

export function getFeedMorePostsRequest(offset, limit) {
  return {
    type: GET_FEED_MORE_POSTS_REQUEST,
    payload: { offset, limit }
  }
}

export function getUserPostsSuccess(posts) {
  return {
    type: GET_USER_POSTS_SUCCESS,
    payload: posts
  }
}

export function getUserPostsFailed(msg) {
  return {
    type: GET_USER_POSTS_FAILED,
    payload: msg
  }
}

export function getFeedPostsSuccess(posts) {
  return {
    type: GET_FEED_POSTS_SUCCESS,
    payload: posts
  }
}

export function getFeedPostsFailed(msg) {
  return {
    type: GET_FEED_POSTS_FAILED,
    payload: msg
  }
}
