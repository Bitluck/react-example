import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserRequest } from '../actions/userActions';
import UserProfile from '../components/UserProfile';

class UserProfileContainer extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { dispatchGetUser } = this.props;
    
    dispatchGetUser(id);
  }

  render() {
    const { full, isFetching, payload } = this.props;
    return (
      <UserProfile isFetching={isFetching} user={payload} full={full} />
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.user.isFetching,
    payload: state.user.payload,
    user: state.user.userData,
    full: state.user.full
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetUser: bindActionCreators(getUserRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);