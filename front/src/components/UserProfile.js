import React from 'react';

import FullUserProfile from './FullUserProfile';
import PartialUserProfile from './PartialUserProfile';
import NotFound from './NotFound';

import { isAuth } from '../middleware/isAuth';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { isFetching, user, dispatchGetUser, match } = this.props;
    //const { id } = match.params;
    const id = this.props.id;

    dispatchGetUser(id);
    //dispatchGetRelationWithUser
  }

  render() {
    const { isFetching, user } = this.props;

    if(isFetching) {
      return <div>Loading...</div>
    }

    if(user.data) {
      if(isAuth()) {
        return (
          <FullUserProfile user={user} />
        );
      }

      return (
        <PartialUserProfile user={user} />
      );
    }

    return <NotFound />;
  }
}

export default UserProfile;
