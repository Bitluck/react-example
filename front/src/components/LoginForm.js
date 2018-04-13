import React from 'react';
import { Field } from 'redux-form';

let LoginForm = props => {
  console.log({ props });
  return (
  <form onSubmit={props.handleSubmit(values => props.handleSubmitForm(values))} >
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

export default LoginForm;
