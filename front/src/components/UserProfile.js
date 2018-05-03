import React from 'react';

import FullUserProfile from './FullUserProfile';
import PartialUserProfile from './PartialUserProfile';
import NotFound from './NotFound';
import PostList from './PostList';

import { isAuth } from '../middleware/isAuth';

import { getUserPostsRequest } from '../actions/postActions';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { isFetching, user, dispatchGetUser, getUserPosts, offset, limit, match } = this.props;
    //const { id } = match.params;
    const id = this.props.id;

    dispatchGetUser(id);
    getUserPosts(id, offset, limit);
    //dispatchGetRelationWithUser
  }

  render() {
    const { isFetching, user, posts } = this.props;

    if(isFetching) {
      return <div>Loading...</div>
    }

    if(user.data) {
      if(isAuth()) {
        return (
          <FullUserProfile user={user} posts={posts} />
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
