import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';
import FormSelect from './FormSelect';

import { loginRequest } from '../actions/authActions';
import { required, maxLength, minLength } from '../utils/validate';

import { genders } from '../constants/genders';

const RegisterFormSecond = props => {
  const { handleSubmit, prevPage, dispatch, loginStatus, submitting } = props;
  return (
    <div className="register-form">
      {loginStatus}
      <form onSubmit={handleSubmit}>

        <Field
          name="firstName"
          type="text"
          autoComplete="given-name"
          component={FormField}
          label="First name"
          validate={[required]} />

        <Field
          name="lastName"
          type="text"
          autoComplete="given-name"
          component={FormField}
          label="Last name"
          validate={[required]} />

        <Field
          name="gender"
          type="text"
          autoComplete="gender"
          component={FormSelect}
          label="Gender"
          list={genders}
          validate={[required]} />

        <Field
          name="birthdate"
          type="date"
          autoComplete="birthdate"
          component={FormField}
          label="Birthdate"
          validate={[required]} />
        
        <div>
          <button type="button" className="previous" onClick={prevPage}>Previous</button>
          <button disabled={submitting}>Next</button>
        </div>
        
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'register-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegisterFormSecond);
