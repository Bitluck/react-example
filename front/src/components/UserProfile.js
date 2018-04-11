import React from 'react';

class UserProfile extends React.Component {
  render() {
    const { isFetching, full, user } = this.props;

    if(isFetching) {
      return <div>Loading user profile...</div>
    }
    if(full) {
      return (
        <div>{ `full ${user.data.login}` }</div>
      );
    }
    return (
      <div>{ `nefull ${user.data.login}` }</div>
    );
  }
}

export default UserProfile;
