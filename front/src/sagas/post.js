import { call, put, select, takeLatest } from 'redux-saga/effects';

import { POST_CREATE_REQUEST } from '../constants/postActionTypes';
import { postCreateRequest } from '../actions/postActions';
import PostService from '../services/PostService';

const postService = new PostService();

function* createPost(action) {
  try {
    const post = yield call(postService.createPost, action.payload);
    if(post.status === 200) {
      
      //yield put(createPostSuccess({ status: user.status, data: user.data }));
    } else {
      //yield put(createPostFailed(user.message));
    }
  } catch(err) {
    //yield put(createPostFailed(err.message));
  }
}

export function* watchPostSaga() {
  yield takeLatest(POST_CREATE_REQUEST, createPost);
}
