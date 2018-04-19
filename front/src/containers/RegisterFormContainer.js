import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RegisterFormFirst from '../components/RegisterFormFirst';
import RegisterFormSecond from '../components/RegisterFormSecond';
import RegisterFormThird from '../components/RegisterFormThird';

import { registerRequest, registerFormNextPage, registerFormPrevPage } from '../actions/authActions';

class RegisterFormContainer extends React.Component {
  render() {
    const { page, onSubmit, nextPage, prevPage, registerStatus } = this.props;

    return (
      <div>
        {registerStatus}
        {page === 1 &&
          <RegisterFormFirst
            onSubmit={nextPage} />}
        {page === 2 && (
          <RegisterFormSecond
            prevPage={prevPage}
            onSubmit={nextPage} />
        )}
        {page === 3 && (
          <RegisterFormThird
            prevPage={prevPage}
            onSubmit={onSubmit} />
        )}
      </div>
    )
  }
}

RegisterFormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    page: state.auth.page,
    registerStatus: state.auth.payload.registerMsg
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: values => dispatch(registerRequest(values)),
    nextPage: () => dispatch(registerFormNextPage()),
    prevPage: () => dispatch(registerFormPrevPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormContainer);
