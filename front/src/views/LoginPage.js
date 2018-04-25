import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { isAuth } from '../middleware/isAuth';

import LoginFormContainer from '../containers/LoginFormContainer';

import styles from '../styles/views/LoginPage.scss';

const LoginPage = props => {
  return (
    <Grid fluid>
      <Row>
        <Col sm={6}>
          {'abc'}
        </Col>
        <Col sm={6}>
          <LoginFormContainer className={styles.loginForm} />
        </Col>
      </Row>
    </Grid>
  );
}

export default LoginPage;
