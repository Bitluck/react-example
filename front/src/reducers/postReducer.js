import { POST_GET_REQUEST,
         POST_GET_SUCCESS,
         POST_PICTURE_CHOOSE,
         GET_USER_POSTS_REQUEST,
         GET_FEED_POSTS_REQUEST,
         GET_USER_POSTS_SUCCESS,
         GET_USER_POSTS_FAILED,
         GET_FEED_POSTS_SUCCESS,
         GET_FEED_POSTS_FAILED,
         GET_USER_MORE_POSTS_REQUEST,
         GET_FEED_MORE_POSTS_REQUEST } from '../constants/postActionTypes';

const initialState = {
  payload: {},
  files: [],
  posts: [],
  feedPosts: [],
  isMore: true,
  offset: 0,
  limit: 10,
  feedOffset: 0,
  feedLimit: 10
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
    case GET_USER_POSTS_REQUEST:
      return { ...state, posts: [], offset: 0, limit: 10, loadMore: true };
    case GET_USER_MORE_POSTS_REQUEST:
      return { ...state, offset: state.offset + state.limit };
    case GET_FEED_POSTS_REQUEST:
      return { ...state, feedPosts: [], feedOffset: 0, feedLimit: 10, loadMore: true };
    case GET_FEED_MORE_POSTS_REQUEST:
      return { ...state, feedOffset: state.feedOffset + state.feedLimit };
    case GET_USER_POSTS_SUCCESS:
      const isMoreUserPosts = payload.data.length === state.limit ? true : false;
      return { ...state, posts: [ ...state.posts, ...payload.data ], isMore: isMoreUserPosts };
    case GET_FEED_POSTS_SUCCESS:
      const isMoreFeedPosts = payload.data.length === state.limit ? true : false;    
      return { ...state, feedPosts: [ ...state.feedPosts, ...payload.data ], isMore: isMoreFeedPosts };
    default:
      return state;
  }
}
