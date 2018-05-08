import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { isAuth } from '../middleware/isAuth';
import { Helmet } from 'react-helmet';

import RegisterFormContainer from '../containers/RegisterFormContainer';

import styles from '../styles/views/RegisterPage.scss';

const RegisterPage = props => {
  return (
    <Grid fluid>
      <Helmet>
        <title>Registration - Social Network</title>
      </Helmet>
      <Row>
        <Col sm={6}>
          {'abc'}
        </Col>
        <Col sm={6}>
          <div className={styles.registerForm}>
            <RegisterFormContainer />
          </div>
        </Col>
      </Row>
    </Grid>
  );
}

export default RegisterPage;
