import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../styles/components/UserListItem.scss';

const defaultSmallAvatar = '/img/avatars/default_small.png';

const UserListItem = props => {
  const { user } = props;

  return (
    <Col sm={12}>
      <Row className={styles.friendItem}>
        <Col sm={2}>
          <img className={styles.userAvatar} src={`${user.avatar || defaultSmallAvatar}`} alt="userpic" />
        </Col>
        <Col sm={10} className={styles.friendInfo}>
          <Link to={`/users/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link>
        </Col>
      </Row>
    </Col>
  );
}

export default UserListItem;
