import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserRequest } from '../actions/userActions';
import UserProfile from '../components/UserProfile';
import NotFound from '../components/NotFound';

const mapStateToProps = state => {
  return {
    isFetching: state.user.isFetching,
    user: state.user.payload,
    userId: state.user.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetUser: bindActionCreators(getUserRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
