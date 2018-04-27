import { POST_CREATE_REQUEST,
         POST_GET_REQUEST,
         POST_CREATE_SUCCESS,
         POST_PICTURE_CHOOSE } from '../constants/postActionTypes';

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
