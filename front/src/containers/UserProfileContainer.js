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
    const { isFetching, payload } = this.props;
    if(payload.data) {
      return (
        <UserProfile isFetching={isFetching} user={payload}/>
      )
    } else {
      return <div>Not Found</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.user.isFetching,
    payload: state.user.payload
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetUser: bindActionCreators(getUserRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
