import { call, put, select, takeLatest } from 'redux-saga/effects';

import { POST_CREATE_REQUEST,
         GET_USER_POSTS_REQUEST,
         GET_FEED_POSTS_REQUEST,
         GET_USER_MORE_POSTS_REQUEST,
         GET_FEED_MORE_POSTS_REQUEST } from '../constants/postActionTypes';

import { getUserPostsSuccess,
         getUserPostsFailed,
         getFeedPostsSuccess,
         getFeedPostsFailed,
         postCreateSuccess,
         postCreateFailed } from '../actions/postActions';
import PostService from '../services/PostService';

const postService = new PostService();

function* createPost(action) {
  try {
    const params = action.payload;

    const post = yield call(postService.createPost, params);
    if(post.status === 200) {
      
      yield put(postCreateSuccess({ status: post.status, data: post.data }));
    } else {
      yield put(postCreateFailed(post.message));
    }
  } catch(err) {
    yield put(postCreateFailed(err.message));
  }
}

function* getUserPosts(action) {
  try {
    const posts = yield call(postService.getUserAllPosts, action.payload);

    yield put(getUserPostsSuccess(posts));
  } catch(err) {
    yield put(getUserPostsFailed(err.message));
  }
}

function* getFeedPosts(action) {
  try {
    const posts = yield call(postService.getFeedPosts, action.payload);

    yield put(getFeedPostsSuccess(posts));
  } catch(err) {
    yield put(getFeedPostsFailed(err.message));
  }
}

export function* watchPostSaga() {
  yield takeLatest(POST_CREATE_REQUEST, createPost);
  yield takeLatest(GET_USER_POSTS_REQUEST, getUserPosts);
  yield takeLatest(GET_USER_MORE_POSTS_REQUEST, getUserPosts);
  yield takeLatest(GET_FEED_POSTS_REQUEST, getFeedPosts);
  yield takeLatest(GET_FEED_MORE_POSTS_REQUEST, getFeedPosts);
}
