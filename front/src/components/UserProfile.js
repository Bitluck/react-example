import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { UserActions } from '../actions/userActions';

const userActions = new UserActions();

class UserProfile extends React.Component {
  render() {
    const { full } = this.props;
    console.log({ props: this.props });

    if(full) {
      return (
        <div>full {this.props}</div>
      );
    }
    return (
      <div>nefull {this.props}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: bindActionCreators(userActions.getUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
