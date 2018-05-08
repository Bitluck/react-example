import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Helmet } from 'react-helmet';

import UserProfileItem from './UserProfileItem';

import styles from '../styles/components/UserProfile.scss';

const PartialUserProfile = (props) => {
  const { user } = props;

  return (
    <Grid fluid className={styles.profileContainer}>
      <Helmet>
        <title>{`${user.data.firstName}'s profile - Social Network`}</title>
      </Helmet>
      <Row>
        <Col sm={3}>
          <img width='150'
               height='150'
               className={styles.avatar}
               src={user.data.avatar
                  ? user.data.avatar
                  : '/img/avatars/default_big.png'}
               alt='avatar' />
        </Col>
        <Col sm={7} className={styles.profileData}>
          <Row><Col sm={12}>
            <UserProfileItem
              name={'First name'}
              value={user.data.firstName}/>
          </Col></Row>
          <Row><Col sm={12}>
            <UserProfileItem
              name={'Last name'}
              value={user.data.lastName}/>
          </Col></Row>
        </Col>
      </Row>
    </Grid>
  );
}

export default PartialUserProfile;
