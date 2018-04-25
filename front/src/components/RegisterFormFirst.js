import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { loginRequest } from '../actions/authActions';
import { required, maxLength, minLength } from '../utils/validate';

import styles from '../styles/containers/RegisterFormContainer.scss';

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
          type="text"
          autoComplete="username"
          component={FormField}
          label="Email"
          validate={[required]} />
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
          name="confirm-password"
          type="password"
          autoComplete="new-password"
          component={FormField}
          label="Confirm password"
          validate={[required]} />
      </Row>
      <Row className={styles.button}>
        <button type="submit" className="next">Next</button>
      </Row>
      </form>
    </Grid>
  );
}

export default reduxForm({
  form: 'register-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegisterFormFirst);
