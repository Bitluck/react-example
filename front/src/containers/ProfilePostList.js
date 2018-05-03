import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserRequest } from '../actions/userActions';
import { getUserMorePostsRequest } from '../actions/postActions';
import PostList from '../components/PostList';

const mapStateToProps = state => {
  return {
    user: state.user.payload,
    isMore: state.post.isMore,
    offset: state.post.offset,
    limit: state.post.limit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetUser: bindActionCreators(getUserRequest, dispatch),
    getMorePosts: bindActionCreators(getUserMorePostsRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
