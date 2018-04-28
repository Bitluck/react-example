import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';
import FormSelect from './FormSelect';

import { Link } from 'react-router-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { loginRequest } from '../actions/authActions';
import { required, maxLength, minLength } from '../utils/validate';

import styles from '../styles/containers/RegisterFormContainer.scss';

const RegisterFormThird = props => {
  const { handleSubmit, onSubmit, prevPage, dispatch, loginStatus, submitting } = props;
  return (
    <Grid fluid>
      <Row>
        <Col>
          {loginStatus}
        </Col>
      </Row>
      
      <form onSubmit={handleSubmit(async values => onSubmit(values) )}>
      <Row>
        <Field
          name="country"
          type="text"
          autoComplete="country-name"
          component={FormField}
          label="Country"
          validate={[required]} />
      </Row>
      <Row>
        <Field
          name="city"
          type="text"
          autoComplete="address-level2"
          component={FormField}
          label="City"
          validate={[required]} />
      </Row>
      <Row className={styles.button}>
        <button type="button" className="previous" onClick={prevPage}>Previous</button>
        <button disabled={submitting} className={styles.button}>Submit</button>
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
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegisterFormThird);
