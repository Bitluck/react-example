import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import RegisterFormFirst from '../components/RegisterFormFirst';
import RegisterFormSecond from '../components/RegisterFormSecond';
import RegisterFormThird from '../components/RegisterFormThird';

import { registerRequest, registerFormNextPage, registerFormPrevPage } from '../actions/authActions';

import styles from '../styles/containers/RegisterFormContainer.scss';

class RegisterFormContainer extends React.Component {
  render() {
    const { page, onSubmit, nextPage, prevPage, registerStatus } = this.props;

    return (
      <Grid fluid styles={styles.registerForm}>
        <Row className={styles.pageIndicator}>
          <Col>
            {`${page} page of 3`}
          </Col>
        </Row>
        <Row className={styles.error}>
          <Col>
            {registerStatus}
          </Col>
        </Row>
        <Row>
          <Col>
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
          </Col>
        </Row>
      </Grid>
    )
  }
}

RegisterFormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired
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
