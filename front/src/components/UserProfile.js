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
    const { isFetching, user,
            offset, limit, match,
            dispatchGetUser,
            getUserPosts,
            getFriendRelation } = this.props;
    //const { id } = match.params;
    const id = this.props.id;

    dispatchGetUser(id);
    getUserPosts(id, offset, limit);
    
    if(id !== 'me') {
      getFriendRelation(id);
    }
  }

  render() {
    const { isFetching, user, posts, userId, relation, makeFriends, currentUserId } = this.props;

    if(isFetching) {
      return <div>Loading...</div>
    }

    if(user.data) {
      if(isAuth()) {
        return (
          <FullUserProfile id={userId}
                           user={user}
                           posts={posts}
                           relation={relation}
                           onClick={makeFriends}
                           currentUserId={currentUserId} />
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
