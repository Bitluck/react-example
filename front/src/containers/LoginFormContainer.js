import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import LoginForm from '../components/LoginForm';
import { loginRequest } from '../actions/authActions';

const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.auth.payload.msg
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmitForm: (values) => {
      dispatch(loginRequest(values));
    }
  }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default reduxForm({
  form: 'loginForm',
  destroyOnUnmount: false
})(LoginFormContainer);
