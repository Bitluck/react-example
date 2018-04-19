import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';

import { loginRequest } from '../actions/authActions';
import { required, maxLength, minLength } from '../utils/validate';

const RegisterFormFirst = props => {
  const { handleSubmit, handleSubmitForm, dispatch, loginStatus, submitting } = props;
  return (
    <div className="register-form">
      {loginStatus}
      <form onSubmit={handleSubmit}>
        <Field
          name="login"
          type="text"
          autoComplete="username"
          component={FormField}
          label="Login"
          validate={[required, minLength(2), maxLength(20)]} />

        <Field
          name="email"
          type="text"
          autoComplete="username"
          component={FormField}
          label="Email"
          validate={[required]} />

        <Field
          name="password"
          type="password"
          autoComplete="new-password"
          component={FormField}
          label="Password"
          validate={[required]} />

        <Field
          name="confirm-password"
          type="password"
          autoComplete="new-password"
          component={FormField}
          label="Confirm password"
          validate={[required]} />

        <button type="submit" className="next">Next</button>
      </form>
    </div>
  );
}

//export default RegisterForm;

export default reduxForm({
  form: 'register-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegisterFormFirst);
