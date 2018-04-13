import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { loginRequest } from '../actions/authActions';

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmitForm: (values) => {
      dispatch(loginRequest(values));
    }
  }
}

const validate = (values) => {
  const errors = {};
  return errors;
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default reduxForm({
  form: 'loginForm',
  destroyOnUnmount: false,
  validate
})(LoginFormContainer);
