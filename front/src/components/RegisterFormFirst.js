import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';

import { Link } from 'react-router-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { loginRequest } from '../actions/authActions';
import { required, isEmail, maxLength, minLength } from '../utils/validate';

import styles from '../styles/containers/RegisterFormContainer.scss';

const validate = values => {
  const errors = {};

  if(values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords not equals';
  }

  return errors;
}

const RegisterFormFirst = props => {
  const { handleSubmit, handleSubmitForm, dispatch, loginStatus, submitting } = props;
  return (
    <Grid fluid>
      <Row>
        <Col>
          {loginStatus}
        </Col>
      </Row>
      <form onSubmit={handleSubmit}>
      <Row>
        <Field
          name="login"
          type="text"
          autoComplete="username"
          component={FormField}
          label="Login"
          validate={[required, minLength(2), maxLength(20)]} />
      </Row>
      <Row>
        <Field
          name="email"
          //type="email"
          autoComplete="username"
          component={FormField}
          label="Email"
          validate={[required, isEmail]} />
      </Row>
      <Row>
        <Field
          name="password"
          type="password"
          autoComplete="new-password"
          component={FormField}
          label="Password"
          validate={[required]} />
      </Row>
      <Row>
        <Field
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          component={FormField}
          label="Confirm password"
          validate={[required]} />
      </Row>
      <Row className={styles.button}>
        <button type="submit" className="next">Next</button>
      </Row>
      <Row>
        <Col className={styles.button} sm={12}>
          {'or '}<Link to={'/login'}>login</Link>
        </Col>
      </Row>
      </form>
    </Grid>
  );
}

export default reduxForm({
  form: 'register-form',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegisterFormFirst);
