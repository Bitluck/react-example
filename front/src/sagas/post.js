import { call, put, select, takeLatest } from 'redux-saga/effects';

import { POST_CREATE_REQUEST,
         GET_USER_POSTS_REQUEST,
         GET_FEED_POSTS_REQUEST,
         GET_USER_MORE_POSTS_REQUEST,
         GET_FEED_MORE_POSTS_REQUEST } from '../constants/postActionTypes';

import { getUserPostsSuccess,
         getUserPostsFailed,
         getFeedPostsSuccess,
         getFeedPostsFailed } from '../actions/postActions';
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

function* getUserPosts(action) {
  try {
    const posts = yield call(postService.getUserAllPosts, action.payload);

    console.log({ posts });

    yield put(getUserPostsSuccess(posts));
  } catch(err) {
    yield put(getUserPostsFailed(err.message));
  }
}

function* getFeedPosts(action) {
  try {
    const posts = yield call(postService.getFeedPosts, action.payload);

    console.log({ posts });

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
