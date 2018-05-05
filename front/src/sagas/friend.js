import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_FRIEND_RELATION_REQUEST, MAKE_FRIENDS_REQUEST } from '../constants/friendActionTypes';

import { getFriendRelationSuccess } from '../actions/friendActions';

import FriendService from '../services/FriendService';

const friendService = new FriendService();

function* getFriendRelation(action) {
  const res = yield call(friendService.getFriendRelation, action.payload.userId);

  const relation = res.data ? res.data.relation : null;

  console.log({ relation });

  yield put(getFriendRelationSuccess(relation));
}

function* makeFriends(action) {
  const res = yield call(friendService.makeFriends, action.payload.userId);

  const relation = res.data ? res.data.state : null;  

  yield put(getFriendRelationSuccess(relation));
}

export function* watchFriendSaga() {
  yield takeLatest(GET_FRIEND_RELATION_REQUEST, getFriendRelation);
  yield takeLatest(MAKE_FRIENDS_REQUEST, makeFriends);
}
