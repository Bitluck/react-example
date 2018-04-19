import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';

import { loginRequest } from '../actions/authActions';
import { required, maxLength, minLength } from '../utils/validate';

import '../styles/components/LoginForm.css';

const LoginForm = props => {
  const { handleSubmit, handleSubmitForm, dispatch, loginStatus, submitting } = props;
  return (
    <div className="login-form">
      {loginStatus}
      <form onSubmit={handleSubmit(async values => handleSubmitForm(values))}>
        <Field
          name="login"
          type="text"
          autoComplete="username"
          component={FormField}
          label="Login"
          validate={[required, minLength(2), maxLength(20)]} />

        <Field
          name="password"
          type="password"
          autoComplete="current-password"
          component={FormField}
          label="Password"
          validate={[required]} />
          
        <button disabled={submitting}>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
