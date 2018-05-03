import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import UserProfileItem from './UserProfileItem';
import PostList from './PostList';
import ProfilePostList from '../containers/ProfilePostList';

const FullUserProfile = (props) => {
  const { user, posts } = props;
  const MS_IN_YEAR = 1000*60*60*24*365;

  const userPosts = posts.map(post => ( { ...post, user: user.data } ));
  console.log({ userPosts });

  return (
    <Grid fluid>
      <Row>
        <Col>
          <strong>{`${user.data.login}'s profile`}</strong>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <img width='150'
               height='150'
               src={user.data.avatar
                  ? user.data.avatar
                  : '/img/avatars/default_big.png'}
               alt='avatar' />
        </Col>
        <Col sm={8}>
          <Row>
            <UserProfileItem
              name={'First name'}
              value={user.data.firstName}/>
          </Row>
          <Row>
            <UserProfileItem
              name={'Last name'}
              value={user.data.lastName}/>
          </Row>
          <Row>
            <UserProfileItem
              name={'Email'}
              value={user.data.email}/>
          </Row>
          <Row>
            <UserProfileItem
              name={'Gender'}
              value={user.data.gender}/>
          </Row>
          <Row>
            <UserProfileItem
              name={'Birthdate'}
              value={`${new Date(user.data.birthdate).toLocaleDateString()}`}/>
          </Row>
          <Row>
            <UserProfileItem
              name={'Country'}
              value={user.data.country}/>
          </Row>
          <Row>
            <UserProfileItem
              name={'City'}
              value={user.data.city}/>
          </Row>
        </Col>
      </Row>
      <Row>
        <ProfilePostList posts={userPosts} />
      </Row>
    </Grid>
  );
}

export default FullUserProfile;
