import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import UserProfileItem from './UserProfileItem';

const PartialUserProfile = (props) => {
  const { user } = props;

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
        {/*profile data*/}
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
        </Col>
      </Row>
    </Grid>
  );
}

export default PartialUserProfile;
