import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserRequest } from '../actions/userActions';
import { getFeedMorePostsRequest } from '../actions/postActions';
import PostList from '../components/PostList';

const mapStateToProps = state => {
  return {
    user: state.user.payload,
    isMore: state.post.isMore,
    offset: state.post.feedOffset,
    limit: state.post.feedLimit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetUser: bindActionCreators(getUserRequest, dispatch),
    getMorePosts: bindActionCreators(getFeedMorePostsRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
