import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Helmet } from 'react-helmet';

import UserProfileItem from './UserProfileItem';
import PostList from './PostList';
import ProfilePostList from '../containers/ProfilePostList';

import styles from '../styles/components/UserProfile.scss';

const FullUserProfile = (props) => {
  const { id, user, posts, relation, onClick, currentUserId } = props;
  const MS_IN_YEAR = 1000*60*60*24*365;
  const defaultAvatar = '/img/avatars/default_big.png';

  const RELATION_STATUS = {
    none: null,
    friends: 'friends',
    inRequest: 'inRequest',
    outRequest: 'outRequest'
  };

  const userPosts = posts.map(post => ( { ...post, user: user.data } ));

  let friendElement;

  if(+id === user.data.id && +id !== currentUserId) {
    switch(relation) {
      case RELATION_STATUS.none:
      case '':
        friendElement = <button onClick={() => onClick(user.data.id)} className={styles.addToFriends}>Add to friends + </button>;
        break;
      case RELATION_STATUS.outRequest:
        friendElement = <p className={styles.addToFriends}>Already request</p>;
        break;
      case RELATION_STATUS.inRequest:
        friendElement = <button onClick={() => onClick(user.data.id)} className={styles.addToFriends}>Confirm</button>;
        break;
      case RELATION_STATUS.friends:
        friendElement = <p className={styles.addToFriends}>Already friends</p>;
        break;
    }
  }


  return (
    <Grid fluid className={styles.profileContainer}>
      <Helmet>
        <title>
        {user.data.id == currentUserId
        ? 'My profile - Social Network'
        : `${user.data.firstName}'s profile - Social Network` }
        </title>
      </Helmet>
      <Row>
        <Col sm={4}>
          <img width='200'
              height='200'
              className={styles.avatar}
              src={user.data.avatar
                ? user.data.avatar
                : defaultAvatar }
              alt='avatar' />
          {friendElement}
        </Col>
        <Col sm={8} className={styles.profileData}>
          <Row><Col sm={12} className={styles.profileDataTop}>
              {`${user.data.firstName} ${user.data.lastName}`}
          </Col></Row>
          <Row><Col sm={12}>
            <UserProfileItem
              name={'Country:'}
              value={user.data.country}/>
          </Col></Row>
          <Row><Col sm={12}>
            <UserProfileItem
              name={'City:'}
              value={user.data.city}/>
          </Col></Row>
          <Row><Col sm={12}>
            <UserProfileItem
              name={'Birthdate:'}
              value={`${new Date(user.data.birthdate).toLocaleDateString()}`}/>
          </Col></Row>
          <Row><Col sm={12}>
            <UserProfileItem
              name={'Gender:'}
              value={user.data.gender}/>
          </Col></Row>
          <Row><Col sm={12}>
            <UserProfileItem
              name={'Email:'}
              value={user.data.email}/>
          </Col></Row>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <ProfilePostList posts={userPosts} />
        </Col>
      </Row>
    </Grid>
  );
}

export default FullUserProfile;
