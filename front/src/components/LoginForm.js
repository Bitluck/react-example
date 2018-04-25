import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormField from './FormField';

import { loginRequest } from '../actions/authActions';
import { required, maxLength, minLength } from '../utils/validate';

import styles from '../styles/components/LoginForm.scss';
import Redirect from 'react-router-dom/Redirect';

const LoginForm = props => {
  const { handleSubmit, handleSubmitForm, dispatch, loginStatus, submitting } = props;

  if(props.loggedIn) {
    return <Redirect to={"/"} />
  }
  
  return (
    <Grid fluid className={styles.loginForm}>
      <form onSubmit={handleSubmit(async values => handleSubmitForm(values))}>
        <Row>
          <Col sm={12} className={styles.error}>
            <span>{loginStatus}</span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Field
              name="login"
              type="text"
              autoComplete="username"
              component={FormField}
              label="Login"
              validate={[required, minLength(2), maxLength(20)]} />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Field
              name="password"
              type="password"
              autoComplete="current-password"
              component={FormField}
              label="Password"
              validate={[required]} />
          </Col>
        </Row>
        <Row>
          <Col className={styles.button} sm={12}>
            <button disabled={submitting}>Submit</button>
          </Col>
        </Row>
      </form>
    </Grid>
  );
}

export default LoginForm;
