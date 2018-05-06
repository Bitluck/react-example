import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_FRIEND_RELATION_REQUEST,
         MAKE_FRIENDS_REQUEST,
         GET_FRIENDS_REQUEST,
         GET_IN_REQUESTS_REQUEST,
         GET_OUT_REQUESTS_REQUEST,
         CHANGE_SELECTED_FRIENDS_TAB } from '../constants/friendActionTypes';

import { getFriendRelationSuccess,
         getFriendsSuccess,
         getFriendsFailed,
         getFriendsRequest,
         getInRequests,
         getOutRequests } from '../actions/friendActions';

import FriendService from '../services/FriendService';
import UserService from '../services/UserService';

const friendService = new FriendService();
const userService = new UserService();

function* getFriendRelation(action) {
  const res = yield call(friendService.getFriendRelation, action.payload.userId);

  const relation = res.data ? res.data.relation : null;

  yield put(getFriendRelationSuccess(relation));
}

function* makeFriends(action) {
  const res = yield call(friendService.makeFriends, action.payload.userId);

  const relation = res.data ? res.data.state : null;  

  yield put(getFriendRelationSuccess(relation));
}

function* getFriends(action) {
  try {
    let id = action.payload.userId;
    if(!id) {
      const user = yield call(userService.getCurrentUser);
      id = user.data.id;
    }
    const res = yield call(friendService.getFriends, id);
    const friends = res.data;

    yield put(getFriendsSuccess(friends));
  } catch(err) {
    yield put(getFriendsFailed(err.message));
  }
}

function* getUserInRequests(action) {
  try {
    let id = action.payload.userId;
    if(!id) {
      const user = yield call(userService.getCurrentUser);
      id = user.data.id;
    }
    const res = yield call(friendService.getInRequests, id);
    const friends = res.data;

    yield put(getFriendsSuccess(friends));
  } catch(err) {
    yield put(getFriendsFailed(err.message));
  }
  
}

function* getUserOutRequests(action) {
  try {
    const res = yield call(friendService.getOutRequests, id);
    const friends = res.data;

    yield put(getFriendsSuccess(friends));
  } catch(err) {
    yield put(getFriendsFailed(err.message));
  }
  
}

function* changeSelectedFriendsTab(action) {
  const TABS = {
    friendsTab: 'friendsTab',
    requestInTab: 'requestInTab',
    requestOutTab: 'requestOutTab'
  }

  const { payload } = action;

  switch(payload.tab) {
    case TABS.friendsTab:
      return yield put(getFriendsRequest(payload.id));
    case TABS.requestInTab:
      return yield put(getInRequests(payload.id));
    case TABS.requestOutTab:
      return yield put(getOutRequests(payload.id));
  }
}

export function* watchFriendSaga() {
  yield takeLatest(GET_FRIEND_RELATION_REQUEST, getFriendRelation);
  yield takeLatest(MAKE_FRIENDS_REQUEST, makeFriends);
  yield takeLatest(GET_FRIENDS_REQUEST, getFriends);
  yield takeLatest(GET_IN_REQUESTS_REQUEST, getUserInRequests);
  yield takeLatest(GET_OUT_REQUESTS_REQUEST, getUserOutRequests);
  yield takeLatest(CHANGE_SELECTED_FRIENDS_TAB, changeSelectedFriendsTab);
}
