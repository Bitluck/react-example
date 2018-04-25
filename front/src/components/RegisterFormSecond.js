import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';
import FormSelect from './FormSelect';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { loginRequest } from '../actions/authActions';
import { required, maxLength, minLength } from '../utils/validate';

import { genders } from '../constants/genders';

import styles from '../styles/containers/RegisterFormContainer.scss';

const RegisterFormSecond = props => {
  const { handleSubmit, prevPage, dispatch, loginStatus, submitting } = props;
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
          name="firstName"
          type="text"
          autoComplete="given-name"
          component={FormField}
          label="First name"
          validate={[required]} />
      </Row>
      <Row>
        <Field
          name="lastName"
          type="text"
          autoComplete="given-name"
          component={FormField}
          label="Last name"
          validate={[required]} />
      </Row>
      <Row>
        <Field
          name="gender"
          type="text"
          autoComplete="gender"
          component={FormSelect}
          label="Gender"
          list={genders}
          validate={[required]} />
      </Row>
      <Row>
        <Field
          name="birthdate"
          type="date"
          autoComplete="birthdate"
          component={FormField}
          label="Birthdate"
          validate={[required]} />
      </Row>
      <Row className={styles.button}>
        <button type="button" className="previous" onClick={prevPage}>Previous</button>
        <button disabled={submitting} className={styles.button}>Next</button>
      </Row>
        
      </form>
    </Grid>
  );
}

export default reduxForm({
  form: 'register-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegisterFormSecond);
