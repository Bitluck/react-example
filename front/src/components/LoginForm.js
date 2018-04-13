import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { loginRequest } from '../actions/authActions';

const validate = values => {
  const errors = {};
  return errors;
} 

let LoginForm = props => {
  return (
  <form onSubmit={props.handleSubmit(async values => props.dispatch(loginRequest(values)))} >
    <div>
      <label>Login</label>
      <Field name="login" component="input" type="text" placeholder="Login" />
    </div>
    <div>
      <label>Password</label>
      <Field name="password" component="input" type="password" placeholder="Password" />
    </div>
    <button type="submit">Login</button>
  </form>
  );
}

LoginForm = reduxForm({
  form: 'loginForm',
  destroyOnUnmount: false,
  validate
})(LoginForm);

export default LoginForm;
