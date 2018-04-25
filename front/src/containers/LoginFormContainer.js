import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import LoginForm from '../components/LoginForm';
import { loginRequest } from '../actions/authActions';

import styles from '../styles/components/LoginForm.scss';

const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.auth.payload.loginMsg,
    loggedIn: state.auth.loggedIn
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

const LoginFormConnected = reduxForm({
  form: 'loginForm',
  destroyOnUnmount: false
})(LoginFormContainer);

export default LoginFormConnected;

/*export default props => (
  <div className={styles.loginContainer} className="any-container-name">
    <LoginFormConnected />
  </div>
);*/
