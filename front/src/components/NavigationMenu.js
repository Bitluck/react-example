import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { NavLink } from 'react-router-dom';

const NavigationMenu = props => {
  return (
    <Grid>
      <Row>
        <NavLink to={`/`}>Home (Feed)</NavLink>
      </Row>
      <Row>
        <NavLink to={`/users/me`}>My profile</NavLink>
      </Row>
      <Row>
        <NavLink to={'/friends'}>Friends</NavLink>
      </Row>
      <Row>
        <NavLink to={'/post'}>Create post</NavLink>
      </Row>
      <Row>
        <NavLink to={`/logout`}>Logout</NavLink>
      </Row>
    </Grid>
  );
}

export default NavigationMenu;
