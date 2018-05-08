import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Helmet } from 'react-helmet';

import RegisterFormContainer from '../containers/RegisterFormContainer';
import { isAuth } from '../middleware/isAuth';

import styles from '../styles/views/RegisterPage.scss';

const RegisterPage = props => {
  return (
    <Grid fluid>
      <Helmet>
        <title>Registration - Social Network</title>
      </Helmet>
      <Row>
        <Col sm={6} className={styles.registerText}>
          <p>Registering you get opportunities:</p>
          <ul>
            <li>make friends on interests;</li>
            <li>share your thinks with friends;</li>
            <li>see than friends shared.</li>
          </ul>
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
