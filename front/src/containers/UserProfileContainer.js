import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserRequest } from '../actions/userActions';
import { getUserPostsRequest } from '../actions/postActions';
import UserProfile from '../components/UserProfile';
import NotFound from '../components/NotFound';

const mapStateToProps = state => {
  return {
    isFetching: state.user.isFetching,
    user: state.user.payload,
    userId: state.user.userId,
    posts: state.post.posts,
    isMore: state.post.isMore,
    offset: state.post.offset,
    limit: state.post.limit
    currentUserId: state.user.currentUser.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetUser: bindActionCreators(getUserRequest, dispatch),
    getUserPosts: bindActionCreators(getUserPostsRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
