import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Helmet } from 'react-helmet';

import { isAuth } from '../middleware/isAuth';

import LoginFormContainer from '../containers/LoginFormContainer';

import styles from '../styles/views/LoginPage.scss';

const LoginPage = props => {
  return (
    <Grid fluid>
      <Helmet>
        <title>Login - Social Network</title>
      </Helmet>
      <Row>
        <Col sm={6}>
        </Col>
        <Col sm={6}>
          <LoginFormContainer className={styles.loginForm} />
        </Col>
      </Row>
    </Grid>
  );
}

export default LoginPage;
