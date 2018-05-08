import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { NavLink } from 'react-router-dom';

import styles from '../styles/components/NavigationMenu.scss';

const NavigationMenu = props => {
  return (
    <Grid fluid>
      <Row>
        <Col sm={12} className={styles.navigationMenuItem}>
          <NavLink to={`/users/me`} className={styles.navigationLink}><div>My profile</div></NavLink>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className={styles.navigationMenuItem}>
          <NavLink to={`/`} className={styles.navigationLink}><div>Feed</div></NavLink>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className={styles.navigationMenuItem}>
          <NavLink to={'/friends'} className={styles.navigationLink}><div>Friends</div></NavLink>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className={styles.navigationMenuItem}>
          <NavLink to={'/post'} className={styles.navigationLink}><div>Create post</div></NavLink>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className={styles.navigationMenuItem}>
          <NavLink to={`/logout`} className={styles.navigationLink}><div>Logout</div></NavLink>
        </Col>
      </Row>
    </Grid>
  );
}

export default NavigationMenu;
