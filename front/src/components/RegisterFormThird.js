import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';
import FormSelect from './FormSelect';

import { loginRequest } from '../actions/authActions';
import { required, maxLength, minLength } from '../utils/validate';

const RegisterFormThird = props => {
  const { handleSubmit, onSubmit, prevPage, dispatch, loginStatus, submitting } = props;
  return (
    <div className="register-form">
      {loginStatus}
      <form onSubmit={handleSubmit(async values => { console.log({ values }); onSubmit(values)})}>

        <Field
          name="country"
          type="text"
          autoComplete="country-name"
          component={FormField}
          label="Country"
          validate={[required]} />

        <Field
          name="city"
          type="text"
          autoComplete="address-level2"
          component={FormField}
          label="City"
          validate={[required]} />
          
        <div>
          <button type="button" className="previous" onClick={prevPage}>Previous</button>
          <button disabled={submitting}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'register-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegisterFormThird);
